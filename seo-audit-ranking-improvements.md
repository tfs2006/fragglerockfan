# SEO Content Audit: Ranking Improvements for Pages 11-20

**Objective:** Move high-impression pages from positions 11-20 to top 10 (page 1)  
**Date:** December 2025  
**Current Average Position:** 14.9

---

## Executive Summary

| Page | Current Word Count | Target Word Count | Impressions | Clicks | CTR | Priority |
|------|-------------------|-------------------|-------------|--------|-----|----------|
| `/characters.html` | ~2,800 words | 3,500+ words | 2,307 | 6 | 0.26% | 🔴 HIGH |
| `/episodes.html` | ~4,500 words | 5,000+ words | 222 | 2 | 0.90% | 🟡 MEDIUM |
| `/universe.html` | ~3,200 words | 4,000+ words | 122 | 2 | 1.64% | 🟢 LOWER |

---

## 1. CHARACTERS.HTML - Priority Analysis

### Current State Analysis

**Word Count:** ~2,800 words  
**Target Word Count:** 3,500+ words (need +700 words minimum)  
**Current Heading Structure:**
- H1: "Meet the Characters" ❌ (not keyword-optimized)
- H2: The Fraggles, The Doozers, The Gorgs, Outer Space, Supporting Characters ✅
- H3: Individual character names ✅
- H4: About, Key Traits, Memorable Quotes ✅

### Missing Content Gaps (vs. Competitors)

1. **No Table of Contents** - Page is >1000 words
2. **No FAQ Section** - Missing common question targeting
3. **No Character Comparison Table** - Visual content gap
4. **No "Puppeteer Information"** - Who performed each character
5. **No "Episode Appearances"** - Character-specific episode links
6. **Missing Characters:** Cantus the Minstrel, Large Marvin, Sidebottom, Convincing John (expanded), The Storyteller (expanded)
7. **No "Relationships" Section** - Character connections
8. **No Schema Markup** - Missing FAQPage and Article schema

### Recommended New Sections to Add

```
## Table of Contents (NEW - add after page header)
- Quick navigation for 50+ characters

## Character Comparison Table (NEW - add after Fraggle Five profiles)
- Side-by-side personality traits
- Visual comparison grid

## Character Relationships (NEW - add after comparison table)  
- Who is friends with whom
- Family connections
- Rivalries and conflicts

## Frequently Asked Questions (NEW - add before CTA section)
- Target long-tail keywords
- 8-10 common questions

## Related: Explore More (NEW - add at bottom)
- Internal links to episodes, universe, music
```

### Specific Content to Add

#### A. Optimized H1 (Replace current)
**Current:** "Meet the Characters"  
**New:** "Complete Fraggle Rock Characters Guide: All 50+ Characters Explained"

#### B. Table of Contents HTML
```html
<!-- Add after page-subtitle -->
<nav class="toc-section" aria-label="Table of Contents">
    <h2>Quick Navigation</h2>
    <ul class="toc-list">
        <li><a href="#fraggles">The Fraggle Five</a> - Gobo, Red, Mokey, Wembley, Boober</li>
        <li><a href="#doozers">The Doozers</a> - Cotterpin, Architect & Doozer Society</li>
        <li><a href="#gorgs">The Gorgs</a> - Pa, Ma & Junior Gorg</li>
        <li><a href="#outer-space">Outer Space Characters</a> - Doc, Sprocket & Uncle Matt</li>
        <li><a href="#supporting">Supporting Characters</a> - Marjory, Cantus & More</li>
        <li><a href="#comparison">Character Comparison</a></li>
        <li><a href="#relationships">Character Relationships</a></li>
        <li><a href="#faq">Frequently Asked Questions</a></li>
    </ul>
</nav>
```

#### C. Character Comparison Table HTML
```html
<!-- Add new section after main Fraggles section -->
<section id="comparison" class="characters-section">
    <div class="container">
        <h2>Fraggle Five Character Comparison</h2>
        <p class="section-subtitle">How do the main Fraggle Rock characters compare? Here's a quick personality breakdown:</p>
        
        <div class="comparison-table-wrapper">
            <table class="character-comparison-table">
                <thead>
                    <tr>
                        <th>Character</th>
                        <th>Personality Type</th>
                        <th>Strength</th>
                        <th>Weakness</th>
                        <th>Best Friend</th>
                        <th>Signature Trait</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Gobo</strong></td>
                        <td>Leader/Explorer</td>
                        <td>Bravery</td>
                        <td>Stubbornness</td>
                        <td>Wembley</td>
                        <td>Gets Uncle Matt's postcards</td>
                    </tr>
                    <tr>
                        <td><strong>Red</strong></td>
                        <td>Athlete/Competitor</td>
                        <td>Athletic ability</td>
                        <td>Impatience</td>
                        <td>Mokey</td>
                        <td>Swimming champion</td>
                    </tr>
                    <tr>
                        <td><strong>Mokey</strong></td>
                        <td>Artist/Philosopher</td>
                        <td>Creativity</td>
                        <td>Dreamy/distracted</td>
                        <td>Red</td>
                        <td>Visits Trash Heap for wisdom</td>
                    </tr>
                    <tr>
                        <td><strong>Wembley</strong></td>
                        <td>Loyal Friend</td>
                        <td>Kindness</td>
                        <td>Indecisiveness</td>
                        <td>Gobo</td>
                        <td>Volunteer Fire Department</td>
                    </tr>
                    <tr>
                        <td><strong>Boober</strong></td>
                        <td>Worrier/Chef</td>
                        <td>Cooking skills</td>
                        <td>Pessimism</td>
                        <td>None specific</td>
                        <td>Loves laundry</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</section>
```

#### D. Character Relationships Section HTML
```html
<section id="relationships" class="characters-section alt-section">
    <div class="container">
        <h2>Character Relationships in Fraggle Rock</h2>
        <p class="section-subtitle">Understanding how Fraggle Rock characters connect to each other</p>
        
        <div class="relationships-grid">
            <div class="relationship-card">
                <h3>🏠 Roommates</h3>
                <ul>
                    <li><strong>Gobo & Wembley</strong> - Share a cave and are best friends</li>
                    <li><strong>Red & Mokey</strong> - Opposite personalities, share living space</li>
                    <li><strong>Boober</strong> - Lives alone (prefers it that way)</li>
                </ul>
            </div>
            
            <div class="relationship-card">
                <h3>👨‍👩‍👦 Family Connections</h3>
                <ul>
                    <li><strong>Gobo & Uncle Traveling Matt</strong> - Nephew/Uncle</li>
                    <li><strong>Pa, Ma & Junior Gorg</strong> - Royal family</li>
                    <li><strong>Cotterpin & The Architect</strong> - Mentor/Student</li>
                </ul>
            </div>
            
            <div class="relationship-card">
                <h3>💕 Best Friendships</h3>
                <ul>
                    <li><strong>Gobo & Wembley</strong> - Adventure partners, always together</li>
                    <li><strong>Red & Mokey</strong> - Opposites attract friendship</li>
                    <li><strong>Gobo & Red</strong> - Competitive but caring</li>
                </ul>
            </div>
            
            <div class="relationship-card">
                <h3>⚔️ Complex Relationships</h3>
                <ul>
                    <li><strong>Fraggles & Junior Gorg</strong> - Enemies to friends over series</li>
                    <li><strong>Gobo & Sprocket</strong> - Mutual curiosity, unable to communicate</li>
                    <li><strong>Cotterpin & Gobo</strong> - First Doozer-Fraggle friendship</li>
                </ul>
            </div>
        </div>
    </div>
</section>
```

#### E. FAQ Section HTML (with FAQPage Schema)
```html
<section id="faq" class="characters-section faq-section">
    <div class="container">
        <h2>Frequently Asked Questions About Fraggle Rock Characters</h2>
        
        <div class="faq-container" itemscope itemtype="https://schema.org/FAQPage">
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">What are Fraggles supposed to be?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">Fraggles are fictional creatures created by Jim Henson, designed to represent different aspects of human personality and culture. They are small, furry beings about 18 inches tall who live in an underground cave system. Each Fraggle represents different human traits - Gobo embodies adventure and leadership, Red represents athleticism and competition, Mokey symbolizes creativity and spirituality, Wembley shows loyalty and indecisiveness, and Boober demonstrates caution and practicality. Henson designed them to show that diverse personalities can coexist harmoniously.</p>
                </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">How many Fraggle Rock characters are there?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">Fraggle Rock features over 50 named characters across its five-season run (1983-1987). The main cast includes 5 core Fraggles (Gobo, Red, Mokey, Wembley, and Boober), 3 Gorgs (Pa, Ma, and Junior), 2 human-world characters (Doc and Sprocket), Uncle Traveling Matt, and numerous supporting characters including Marjory the Trash Heap, Convincing John, Cantus the Minstrel, Cotterpin Doozer, The Storyteller, and the World's Oldest Fraggle.</p>
                </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">Why is Wembley called Wembley in Fraggle Rock?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">Wembley's name comes from the British slang term "wemble" or "wembling," which means to be indecisive or to waffle between choices. This perfectly captures his character - Wembley has extreme difficulty making decisions, often seeing both sides of every argument. His name is essentially a personality description, as "wembling" describes exactly what he does throughout the series.</p>
                </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">Who performed Gobo Fraggle?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">Gobo Fraggle was performed by Jerry Nelson, a legendary Muppet performer who worked with Jim Henson for decades. Nelson also provided Gobo's singing voice. Other main Fraggle performers include Karen Prell (Red), Kathryn Mullen (Mokey), Steve Whitmire (Wembley), and Dave Goelz (Boober). Jim Henson himself performed Cantus the Minstrel.</p>
                </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">What do the Doozers build in Fraggle Rock?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">Doozers build elaborate crystalline structures, towers, bridges, and architectural marvels using "Doozer sticks" made from processed radish dust. The fascinating part of their construction is that these buildings are designed to be eaten by Fraggles! This creates a perfect ecosystem - Doozers need Fraggles to eat their work so they have room to build more. If Fraggles stopped eating Doozer constructions, Doozers would eventually have nowhere left to build and become miserable.</p>
                </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">Are the Gorgs villains in Fraggle Rock?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">The Gorgs are not true villains - they're more misunderstood. Pa, Ma, and Junior Gorg see themselves as the royal family of the universe and view Fraggles as "pests" stealing their radishes. However, as the series progresses, especially Junior Gorg develops a more nuanced relationship with the Fraggles. By the series finale, the different species learn to coexist peacefully. The Gorgs represent how perspective shapes relationships - they're not evil, just operating from different understanding.</p>
                </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">Who is Marjory the Trash Heap?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">Marjory the Trash Heap is a sentient, all-knowing compost pile who serves as the oracle and wisdom figure of Fraggle Rock. She dispenses advice (often cryptic) to Fraggles who seek her guidance, assisted by her heralds Philo and Gunge. Her catchphrase is "The Trash Heap has spoken! Nyeah!" Marjory represents the wisdom of the natural world and shows that knowledge can come from unexpected sources.</p>
                </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">What happened to Uncle Traveling Matt?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">Uncle Traveling Matt left Fraggle Rock in the very first episode to explore "Outer Space" (the human world). Throughout the series, he sends postcards back to his nephew Gobo describing his adventures and observations about "Silly Creatures" (humans). He frequently misunderstands human technology and customs, leading to humorous commentary. Uncle Matt returns to Fraggle Rock in the series finale "Change of Address" for a heartfelt reunion.</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

#### F. Additional Supporting Characters Content
```html
<!-- Expand the supporting characters section with these additions -->
<div class="minor-character-card">
    <div class="minor-character-icon cantus-bg">
        <i class="fas fa-music"></i>
    </div>
    <h4>Cantus the Minstrel</h4>
    <p>A mysterious, philosophical Fraggle who wanders the Rock with his Magic Pipe. Performed by Jim Henson himself, Cantus represents wisdom and the spiritual power of music. He speaks in riddles and helps Fraggles discover deeper truths about themselves.</p>
    <p><strong>Notable Episodes:</strong> "The Minstrels," "The Honk of Honks"</p>
</div>

<div class="minor-character-card">
    <div class="minor-character-icon">
        <i class="fas fa-user-secret"></i>
    </div>
    <h4>Sidebottom</h4>
    <p>Boober's fun-loving, mischievous alter ego who emerges when Boober lets loose. Sidebottom represents the suppressed playful side that Boober usually keeps hidden, showing that even the most cautious among us have a wild side.</p>
</div>

<div class="minor-character-card">
    <div class="minor-character-icon">
        <i class="fas fa-fist-raised"></i>
    </div>
    <h4>Large Marvin</h4>
    <p>The largest Fraggle in the Rock, ironically gentle despite his intimidating size. Large Marvin demonstrates that appearances can be deceiving and that true strength comes from kindness.</p>
</div>
```

#### G. Related Internal Links Section
```html
<section class="related-section">
    <div class="container">
        <h2>Related: Explore More Fraggle Rock Content</h2>
        <div class="related-grid">
            <a href="episodes.html" class="related-card">
                <i class="fas fa-tv"></i>
                <h3>Episode Guide</h3>
                <p>See all 96 episodes featuring these characters</p>
            </a>
            <a href="universe.html" class="related-card">
                <i class="fas fa-globe"></i>
                <h3>The Universe</h3>
                <p>Explore where these characters live</p>
            </a>
            <a href="music.html" class="related-card">
                <i class="fas fa-music"></i>
                <h3>Music & Songs</h3>
                <p>190+ songs performed by the characters</p>
            </a>
            <a href="behind-scenes.html" class="related-card">
                <i class="fas fa-film"></i>
                <h3>Behind the Scenes</h3>
                <p>Meet the puppeteers behind the characters</p>
            </a>
        </div>
    </div>
</section>
```

### Schema Markup to Add (in `<head>`)
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Fraggle Rock Characters Guide: All 50+ Characters Explained",
    "description": "Complete guide to all 50+ Fraggle Rock characters including Gobo, Red, Mokey, Wembley, Boober, Doozers and Gorgs with detailed profiles and personality traits.",
    "image": "https://fragglerockfan.com/assets/images/characters-og.jpg",
    "author": {
        "@type": "Organization",
        "name": "FraggleRockFan.com"
    },
    "publisher": {
        "@type": "Organization",
        "name": "FraggleRockFan.com"
    },
    "datePublished": "2024-01-01",
    "dateModified": "2025-12-11"
}
</script>
```

---

## 2. EPISODES.HTML - Analysis

### Current State Analysis

**Word Count:** ~4,500 words (already strong)  
**Target Word Count:** 5,000+ words  
**Current Structure:** ✅ Good - Has season breakdown, episode cards, streaming info

### Missing Content Gaps

1. **No FAQ Section** - Missing question-based keywords
2. **No "Best Episodes" Recommendations** - Popular content gap
3. **No Article Schema Markup**
4. **Missing streaming update for 2025**
5. **No "Where to Start" Guide** for new viewers

### Recommended Additions

#### A. Optimized H1
**Current:** "Episodes & Watch Guide"  
**New:** "Fraggle Rock Episodes: Complete 96-Episode Guide with Summaries"

#### B. "Where to Start" Section HTML
```html
<section class="where-to-start-section">
    <div class="container">
        <h2>New to Fraggle Rock? Where to Start Watching</h2>
        <p>With 96 episodes to choose from, here are our recommended starting points:</p>
        
        <div class="starter-options">
            <div class="starter-card">
                <h3>🎬 Start from Episode 1</h3>
                <p><strong>"Beginnings"</strong> - The perfect introduction that establishes all characters and the world.</p>
                <p class="recommendation">Best for: Those who want the full experience</p>
            </div>
            
            <div class="starter-card">
                <h3>⭐ Start with Fan Favorites</h3>
                <ul>
                    <li>"The Thirty-Minute Work Week" (S1E5)</li>
                    <li>"Marooned" (S2E8)</li>
                    <li>"The Bells of Fraggle Rock" (Holiday Special)</li>
                </ul>
                <p class="recommendation">Best for: Quick sample of the show's best</p>
            </div>
            
            <div class="starter-card">
                <h3>👶 For Young Children</h3>
                <ul>
                    <li>"Wembley and the Gorgs" (S1E2)</li>
                    <li>"Let the Water Run" (S1E3)</li>
                    <li>"Red's Club" (S1E13)</li>
                </ul>
                <p class="recommendation">Best for: Ages 3-6, simple stories</p>
            </div>
        </div>
    </div>
</section>
```

#### C. FAQ Section for Episodes
```html
<section id="episodes-faq" class="faq-section">
    <div class="container">
        <h2>Frequently Asked Questions About Fraggle Rock Episodes</h2>
        
        <div class="faq-container" itemscope itemtype="https://schema.org/FAQPage">
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">How many Fraggle Rock episodes are there?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">The original Fraggle Rock series has 96 episodes across 5 seasons, airing from January 10, 1983 to March 30, 1987. Each episode runs approximately 24 minutes. Additionally, the Apple TV+ reboot "Fraggle Rock: Back to the Rock" has produced new episodes starting in 2022, continuing the story for a new generation.</p>
                </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">How can I watch Fraggle Rock in 2025?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">In 2025, you can watch Fraggle Rock through several platforms: Apple TV+ has exclusive streaming rights for both the original series and the new "Back to the Rock" reboot. The complete original series is also available on DVD and Blu-ray. Previously, episodes were available on HBO Max, though availability may vary by region. Apple TV+ offers a free trial for new subscribers.</p>
                </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">What is the best Fraggle Rock episode?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">Fan favorites consistently include "Marooned" (S2E8), where Gobo and Boober must work together when trapped; "The Bells of Fraggle Rock," a beloved holiday special; "The Minstrels" featuring Cantus; and the series finale "Change of Address." The pilot episode "Beginnings" is also highly rated for establishing the show's universe so effectively.</p>
                </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">What is the Fraggle Rock series finale about?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">"Change of Address" (S5E13) is the emotional series finale where Doc announces he's moving away, threatening the connection between Fraggle Rock and Outer Space. Uncle Traveling Matt returns, and the episode culminates in the different species finally meeting and understanding their interconnectedness - fulfilling Jim Henson's vision of world peace through understanding.</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## 3. UNIVERSE.HTML - Analysis

### Current State Analysis

**Word Count:** ~3,200 words  
**Target Word Count:** 4,000+ words  
**Current Structure:** ✅ Excellent - Very comprehensive already

### Missing Content Gaps

1. **No FAQ Section**
2. **No Table of Contents**
3. **Missing Schema Markup**
4. **No "Maps" or visual ecosystem diagram description**

### Recommended Additions

#### A. Table of Contents
```html
<nav class="toc-section">
    <h2>In This Guide</h2>
    <ul class="toc-list">
        <li><a href="#three-worlds">The Three Worlds</a></li>
        <li><a href="#geography">Geography & Locations</a></li>
        <li><a href="#ecosystem">The Ecosystem Explained</a></li>
        <li><a href="#flora-fauna">Flora & Fauna</a></li>
        <li><a href="#time-seasons">Time & Seasons</a></li>
        <li><a href="#mysteries">Unsolved Mysteries</a></li>
        <li><a href="#rules">The Rules of Fraggle Rock</a></li>
        <li><a href="#universe-faq">Frequently Asked Questions</a></li>
    </ul>
</nav>
```

#### B. FAQ Section for Universe
```html
<section id="universe-faq" class="faq-section">
    <div class="container">
        <h2>Frequently Asked Questions About the Fraggle Rock Universe</h2>
        
        <div class="faq-container" itemscope itemtype="https://schema.org/FAQPage">
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">Why do Fraggles eat Doozer sticks?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">Fraggles eat Doozer constructions because they're delicious and nutritious - made from processed radish dust. But the deeper reason is ecological: Doozers actually WANT Fraggles to eat their buildings! If Fraggles stopped eating, Doozers would run out of space to build and become miserable. This creates a perfect symbiotic ecosystem where both species benefit from what seems like consumption.</p>
                </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">Where is Fraggle Rock located?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">Fraggle Rock exists in a vast underground cave system that connects to our world (called "Outer Space" by Fraggles) through a hole in Doc's workshop wall. Above the caves lies the Gorgs' Garden. The exact geographical location is never specified - it exists as a magical realm that connects to different locations worldwide (which is why international versions had different human characters).</p>
                </div>
            </div>
            
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">What is the Fraggle Rock ecosystem?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <p itemprop="text">The Fraggle Rock ecosystem is a perfectly balanced cycle: Gorgs grow radishes → Fraggles harvest radishes → Doozers process radishes into building materials → Doozers build structures → Fraggles eat the structures → waste returns to fertilize the garden. Each species depends on the others without realizing it, creating Jim Henson's metaphor for Earth's interconnected ecology.</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## Implementation Priority Order

### Phase 1: Characters.html (Week 1) - HIGHEST ROI
1. ✅ Add Table of Contents
2. ✅ Add Character Comparison Table
3. ✅ Add Character Relationships section
4. ✅ Add FAQ section with Schema markup
5. ✅ Expand Supporting Characters
6. ✅ Add Related internal links section
7. ✅ Update H1 tag
8. ✅ Add Article schema in head

### Phase 2: Episodes.html (Week 2)
1. Add "Where to Start" section
2. Add FAQ section
3. Update streaming info for 2025
4. Add schema markup

### Phase 3: Universe.html (Week 3)
1. Add Table of Contents
2. Add FAQ section
3. Add schema markup

---

## Expected Results

After implementing these changes:

| Metric | Current | Target (3 months) |
|--------|---------|-------------------|
| Average Position | 14.9 | 8-10 |
| CTR (characters.html) | 0.26% | 2-3% |
| CTR (overall) | 0.6% | 2-3% |
| Impressions | 2,307+ | 4,000+ |

---

## CSS Additions Needed

```css
/* Table of Contents */
.toc-section {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 12px;
    margin-bottom: 2rem;
}

.toc-list {
    columns: 2;
    column-gap: 2rem;
}

/* Character Comparison Table */
.character-comparison-table {
    width: 100%;
    border-collapse: collapse;
    margin: 2rem 0;
}

.character-comparison-table th,
.character-comparison-table td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid var(--border-color);
}

.character-comparison-table th {
    background: var(--primary-color);
    color: white;
}

/* FAQ Section */
.faq-section {
    background: var(--section-alt-bg);
}

.faq-item {
    background: var(--card-bg);
    padding: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 8px;
}

.faq-item h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
}

/* Relationships Grid */
.relationships-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
}

.relationship-card {
    background: var(--card-bg);
    padding: 1.5rem;
    border-radius: 8px;
}

/* Related Section */
.related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
}

.related-card {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s;
}

.related-card:hover {
    transform: translateY(-5px);
}

.related-card i {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}
```

---

*Document created for SEO ranking improvements - Review and implement in priority order*
