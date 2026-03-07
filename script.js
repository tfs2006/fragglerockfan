// ===================================
// FraggleRockFan.com - Main JavaScript
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== Mobile Menu Toggle =====
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.querySelector('i').classList.add('fa-bars');
                mobileMenuToggle.querySelector('i').classList.remove('fa-times');
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.querySelector('i').classList.add('fa-bars');
                mobileMenuToggle.querySelector('i').classList.remove('fa-times');
            });
        });
    }
    
    // ===== Navbar Scroll Effect =====
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ===== Logo Easter Egg =====
    const logo = document.getElementById('logo');
    
    if (logo) {
        logo.addEventListener('click', function() {
            logo.style.animation = 'spin 2s linear';
            
            setTimeout(function() {
                logo.style.animation = '';
            }, 2000);
            
            showNotification('Dance your cares away! Explore a featured Fraggle Rock guide from the menu.');
        });
    }
    
    // ===== Notification System =====
    function showNotification(message) {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: linear-gradient(135deg, #FF6B35, #F7931E);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 1rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            font-weight: 600;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(function() {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(function() {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    // Add animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
        
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // ===== Character Card Hover Effects =====
    const characterCards = document.querySelectorAll('.character-card');
    
    characterCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.character-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.character-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
    
    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ===== Hero Scroll Indicator =====
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    // ===== Original Song Player =====
    const audioToggle = document.getElementById('audio-toggle');
    const siteSongAudio = document.getElementById('site-song-audio');
    const audioStatus = document.getElementById('audio-status');
    const lyricsTicker = document.getElementById('lyrics-ticker');
    const lyricsTrack = document.getElementById('lyrics-track');

    if (audioToggle && siteSongAudio && audioStatus && lyricsTicker && lyricsTrack) {
        const lyricsSegments = [
            'When the long day fades and the lights get low, there’s a little place where the good hearts go.',
            'Take a step, take a spin, let the wonder start, every tiny echo wakes a happy heart.',
            'Sing it out where the bright songs glow, bring your grin and your get-up-and-go.',
            'Round and round let the warm winds blow, we’re alive where the bright songs glow.',
            'Every little light helps the big light grow, come along, let your true self show.',
            'Build a dream, make a beat, let the rhythm rise, turn a little spark into big surprise.',
            'When the night feels deep and the path seems far, we can light it up with the songs we are.',
            'Welcome home where the bright songs glow.'
        ];

        const tickerMarkup = lyricsSegments
            .map(function(line) {
                return '<span class="lyrics-chip">' + line + '</span>';
            })
            .join('');

        lyricsTrack.innerHTML = tickerMarkup + tickerMarkup;

        function setAudioState(isPlaying) {
            const icon = audioToggle.querySelector('i');
            const label = audioToggle.querySelector('span');

            audioToggle.setAttribute('aria-pressed', String(isPlaying));
            lyricsTicker.classList.toggle('active', isPlaying);

            if (icon) {
                icon.classList.toggle('fa-play', !isPlaying);
                icon.classList.toggle('fa-pause', isPlaying);
            }

            if (label) {
                label.textContent = isPlaying ? 'Pause Song' : 'Play Song';
            }

            audioStatus.textContent = isPlaying ? 'Now playing: Where the Bright Songs Glow' : 'Ready to play';
        }

        audioToggle.addEventListener('click', function() {
            if (siteSongAudio.paused) {
                siteSongAudio.play().catch(function() {
                    audioStatus.textContent = 'Playback was blocked. Press play again to retry.';
                });
                return;
            }

            siteSongAudio.pause();
        });

        siteSongAudio.addEventListener('play', function() {
            setAudioState(true);
        });

        siteSongAudio.addEventListener('pause', function() {
            setAudioState(false);
        });

        siteSongAudio.addEventListener('ended', function() {
            setAudioState(false);
            audioStatus.textContent = 'Song finished. Play it again anytime.';
        });
    }
    
    // ===== Newsletter Form Handling =====
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // In production, this would connect to your email service
            showNotification('🎉 Thanks for subscribing! Welcome to the Fraggle Rock community!');
            this.reset();
        });
    }
    
    // ===== Intersection Observer for Animations =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.character-card, .universe-card, .content-card, .theme-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // ===== Random Fraggle Rock Facts =====
    const fraggleFacts = [
        "Fraggles work only 30 minutes per week!",
        "There are over 190 original songs in Fraggle Rock!",
        "Fraggle Rock was broadcast in the Soviet Union in 1989!",
        "The show was designed to promote world peace from the start!",
        "Doozers are only 6 inches tall!",
        "Marjory the Trash Heap is an all-knowing oracle!",
        "Uncle Traveling Matt explores 'Outer Space' - our world!",
        "The show ran for 5 seasons with 96 episodes!",
        "Fraggle Rock premiered on HBO on January 10, 1983!",
        "Jim Henson's goal was to bring about world peace!",
        "The Crystal Caves inspired parts of Fraggle Rock!",
        "Doc and Sprocket connect the Fraggle world to ours!",
        "Gorgs think they're the rulers of the universe!",
        "Fraggles love to eat Doozer constructions!",
        "The show teaches about environmental interconnectedness!"
    ];
    
    // Show a random fact on page load (optional feature)
    function showRandomFact() {
        const randomFact = fraggleFacts[Math.floor(Math.random() * fraggleFacts.length)];
        setTimeout(function() {
            showNotification('💡 Did you know? ' + randomFact);
        }, 3000);
    }
    
    // Uncomment to enable random facts on page load
    // showRandomFact();
    
    // ===== Search Functionality (Placeholder) =====
    const searchInputs = document.querySelectorAll('input[type="search"]');
    searchInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = this.value;
                if (query) {
                    showNotification('🔍 Search functionality coming soon!');
                    // In production, implement actual search
                }
            }
        });
    });
    
    // ===== Loading State Management =====
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Remove any loading indicators if present
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.display = 'none';
        }
    });
    
    // ===== Accessibility Enhancements =====
    // Add keyboard navigation for cards
    const interactiveCards = document.querySelectorAll('.character-card, .universe-card, .content-card');
    interactiveCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.querySelector('a');
                if (link) {
                    link.click();
                }
            }
        });
    });
    
    // ===== Performance Optimization =====
    // Lazy load images (if images are added later)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // ===== Console Easter Egg =====
    console.log('%cDance your cares away!', 'color: #FF6B35; font-size: 20px; font-weight: bold;');
    console.log('%cWelcome to FraggleRockFan.com!', 'color: #7B2CBF; font-size: 16px;');
    console.log('%cClick the logo for a small animation surprise.', 'color: #00B388; font-size: 14px;');
    console.log('%c"Down at Fraggle Rock!" - Jim Henson', 'color: #4A4A4A; font-size: 12px; font-style: italic;');
    
    // ===== Analytics Placeholder =====
    // Track page views, clicks, etc. (integrate with Google Analytics or similar)
    function trackEvent(category, action, label) {
        // In production, integrate with analytics service
        console.log('Event:', category, action, label);
    }
    
    // Example usage
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            trackEvent('Navigation', 'Click', this.getAttribute('href'));
        });
    });
    
});

// ===== Service Worker for PWA (Optional Enhancement) =====
if ('serviceWorker' in navigator) {
    // Uncomment to enable PWA features
    // navigator.serviceWorker.register('/sw.js')
    //     .then(reg => console.log('Service Worker registered'))
    //     .catch(err => console.log('Service Worker registration failed'));
}
