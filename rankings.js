/**
 * Fraggle Rock Fan — Community Episode Rankings
 * Powered by Firebase Firestore (real-time voting)
 *
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  ONE-TIME SETUP (~5 minutes):                               ║
 * ║  1. Go to https://console.firebase.google.com/              ║
 * ║  2. Click "Add project" — give it any name                  ║
 * ║  3. Inside the project: click the </> Web icon to add an app║
 * ║  4. Copy the firebaseConfig object and paste below          ║
 * ║  5. In the left sidebar: Build → Firestore Database         ║
 * ║     → Create database → Start in TEST MODE → Done           ║
 * ║  6. Deploy — voting goes live automatically!                 ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

// ================================================================
//  REPLACE THE VALUES BELOW WITH YOUR FIREBASE PROJECT CONFIG
// ================================================================
const FIREBASE_CONFIG = {
    apiKey:            "YOUR_API_KEY",
    authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
    projectId:         "YOUR_PROJECT_ID",
    storageBucket:     "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId:             "YOUR_APP_ID"
};
// ================================================================

// Set to true once you have filled in the config above
const RANKINGS_ENABLED = FIREBASE_CONFIG.apiKey !== "YOUR_API_KEY";

let db = null;

// ----------------------------------------------------------------
// Firebase initialisation
// ----------------------------------------------------------------
function initFirebase() {
    if (!RANKINGS_ENABLED) {
        console.info('[Rankings] Firebase config not set — rankings disabled.');
        return false;
    }
    try {
        if (!firebase.apps.length) {
            firebase.initializeApp(FIREBASE_CONFIG);
        }
        db = firebase.firestore();
        return true;
    } catch (e) {
        console.warn('[Rankings] Firebase init failed:', e);
        return false;
    }
}

// ----------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------
function buildEpisodeId(season, epNum) {
    return `s${season}e${String(epNum).padStart(2, '0')}`;
}

function voteStorageKey(episodeId) {
    return `fr_vote_${episodeId}`;
}

function hasVoted(episodeId) {
    return !!localStorage.getItem(voteStorageKey(episodeId));
}

function getUserVote(episodeId) {
    return parseInt(localStorage.getItem(voteStorageKey(episodeId))) || 0;
}

function recordVoteLocally(episodeId, score) {
    localStorage.setItem(voteStorageKey(episodeId), score);
}

// ----------------------------------------------------------------
// Star widget — renders inside each episode card
// ----------------------------------------------------------------
function buildStarWidget(episodeId, title, season, epNum) {
    const alreadyVoted = hasVoted(episodeId);
    const userScore    = getUserVote(episodeId);

    const widget = document.createElement('div');
    widget.className = 'episode-rating';
    widget.dataset.episodeId = episodeId;
    widget.dataset.title     = title;
    widget.dataset.season    = season;
    widget.dataset.epNum     = epNum;

    const starsHtml = [1, 2, 3, 4, 5].map(n => {
        const filled = alreadyVoted && n <= userScore;
        return `<button class="star-btn${filled ? ' voted' : ''}" data-score="${n}" aria-label="Rate ${n} star${n > 1 ? 's' : ''}"${alreadyVoted ? ' disabled' : ''}>★</button>`;
    }).join('');

    widget.innerHTML = `
        <div class="star-row">${starsHtml}</div>
        <div class="ep-score" id="score-${episodeId}">
            <span class="score-value">—</span>
            <span class="vote-count"></span>
        </div>`;

    if (!alreadyVoted) {
        const buttons = widget.querySelectorAll('.star-btn');

        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                const s = parseInt(btn.dataset.score);
                buttons.forEach(b => b.classList.toggle('hover', parseInt(b.dataset.score) <= s));
            });
            btn.addEventListener('mouseleave', () => {
                buttons.forEach(b => b.classList.remove('hover'));
            });
            btn.addEventListener('click', () => {
                castVote(episodeId, parseInt(btn.dataset.score), widget);
            });
        });
    } else {
        widget.querySelector('.star-row').setAttribute('title', 'You already rated this episode');
    }

    return widget;
}

// ----------------------------------------------------------------
// Submit a vote to Firestore
// ----------------------------------------------------------------
async function castVote(episodeId, score, widget) {
    if (!db || hasVoted(episodeId)) return;

    // Optimistic UI update immediately
    recordVoteLocally(episodeId, score);
    const buttons = widget.querySelectorAll('.star-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove('hover');
        btn.classList.toggle('voted', parseInt(btn.dataset.score) <= score);
    });

    // Write to Firestore atomically
    try {
        const docRef = db.collection('episodes').doc(episodeId);
        await db.runTransaction(async t => {
            const snap = await t.get(docRef);
            if (snap.exists) {
                t.update(docRef, {
                    totalScore: firebase.firestore.FieldValue.increment(score),
                    voteCount:  firebase.firestore.FieldValue.increment(1)
                });
            } else {
                t.set(docRef, {
                    episodeId,
                    title:      widget.dataset.title,
                    season:     parseInt(widget.dataset.season),
                    epNum:      parseInt(widget.dataset.epNum),
                    totalScore: score,
                    voteCount:  1
                });
            }
        });
    } catch (e) {
        console.warn('[Rankings] Vote write failed:', e);
    }
}

// ----------------------------------------------------------------
// Listen to a single episode's live score and update the display
// ----------------------------------------------------------------
function listenEpisodeScore(episodeId) {
    if (!db) return;
    db.collection('episodes').doc(episodeId).onSnapshot(snap => {
        const scoreEl = document.getElementById(`score-${episodeId}`);
        if (!scoreEl) return;

        if (snap.exists) {
            const { totalScore, voteCount } = snap.data();
            const avg = voteCount > 0
                ? (totalScore / voteCount).toFixed(1)
                : null;
            scoreEl.querySelector('.score-value').textContent  = avg ? `★ ${avg}` : '—';
            scoreEl.querySelector('.vote-count').textContent   = voteCount > 0
                ? `(${voteCount.toLocaleString()} vote${voteCount !== 1 ? 's' : ''})`
                : 'No votes yet';
        } else {
            scoreEl.querySelector('.score-value').textContent = '—';
            scoreEl.querySelector('.vote-count').textContent  = 'Be the first to rate!';
        }
    });
}

// ----------------------------------------------------------------
// Episodes page — inject star widgets into every episode card
// ----------------------------------------------------------------
function initEpisodePage() {
    if (!initFirebase()) {
        // Show a subtle disabled state rather than nothing
        document.querySelectorAll('.episode-card').forEach(card => {
            const placeholder = document.createElement('div');
            placeholder.className = 'episode-rating rating-disabled';
            placeholder.innerHTML = '<span class="rating-setup-msg">⚙️ <a href="https://console.firebase.google.com/" target="_blank" rel="noopener">Set up Firebase</a> to enable community ratings</span>';
            const content = card.querySelector('.episode-content');
            if (content) content.appendChild(placeholder);
        });
        return;
    }

    document.querySelectorAll('.season-container').forEach(container => {
        const season = container.dataset.season;
        container.querySelectorAll('.episode-card').forEach((card, idx) => {
            const epNum    = idx + 1;
            const episodeId = buildEpisodeId(season, epNum);
            const title    = card.querySelector('h4')?.textContent?.trim() || episodeId;
            const content  = card.querySelector('.episode-content');
            if (!content) return;

            const widget = buildStarWidget(episodeId, title, season, epNum);
            content.appendChild(widget);
            listenEpisodeScore(episodeId);
        });
    });
}

// ----------------------------------------------------------------
// Homepage leaderboard — live top-10 list
// ----------------------------------------------------------------
function initHomepageRankings() {
    const section = document.getElementById('community-rankings');
    if (!section) return;

    if (!initFirebase()) {
        section.remove();
        return;
    }

    const listEl = document.getElementById('rankings-list');

    db.collection('episodes')
        .where('voteCount', '>', 0)
        .onSnapshot(snap => {
            if (!listEl) return;

            if (snap.empty) {
                listEl.innerHTML = `
                    <div class="rankings-empty">
                        <p>No episode ratings yet — <a href="episodes.html">visit the Episodes page</a> and cast the first vote!</p>
                    </div>`;
                return;
            }

            // Compute averages and sort client-side
            const episodes = snap.docs.map(d => {
                const data = d.data();
                return { ...data, avgScore: data.totalScore / data.voteCount };
            });
            episodes.sort((a, b) =>
                b.avgScore - a.avgScore || b.voteCount - a.voteCount
            );

            const top10 = episodes.slice(0, 10);
            const medals = ['🥇', '🥈', '🥉'];

            listEl.innerHTML = top10.map((ep, i) => `
                <div class="ranking-item">
                    <span class="rank-num">${i < 3 ? medals[i] : i + 1}</span>
                    <div class="rank-info">
                        <a href="episodes.html" class="rank-title">S${ep.season} · Ep ${String(ep.epNum).padStart(2, '0')}: ${ep.title}</a>
                        <span class="rank-meta">${ep.voteCount.toLocaleString()} vote${ep.voteCount !== 1 ? 's' : ''}</span>
                    </div>
                    <div class="rank-badge">★ ${ep.avgScore.toFixed(1)}</div>
                </div>`
            ).join('');
        });
}

// ----------------------------------------------------------------
// Entry point
// ----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    // Episodes page
    if (document.querySelector('.season-container')) {
        initEpisodePage();
    }
    // Homepage
    if (document.getElementById('community-rankings')) {
        initHomepageRankings();
    }
});
