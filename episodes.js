// Episodes Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Season Switching
    const seasonButtons = document.querySelectorAll('.season-btn');
    const seasonContainers = document.querySelectorAll('.season-container');
    
    seasonButtons.forEach(button => {
        button.addEventListener('click', function() {
            const seasonNumber = this.getAttribute('data-season');
            
            // Remove active class from all buttons
            seasonButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show/hide season containers
            if (seasonNumber === 'all') {
                // Show all seasons
                seasonContainers.forEach(container => {
                    container.style.display = 'block';
                });
            } else {
                // Show only selected season
                seasonContainers.forEach(container => {
                    const containerSeason = container.getAttribute('data-season');
                    if (containerSeason === seasonNumber) {
                        container.style.display = 'block';
                        container.style.animation = 'fadeIn 0.5s ease-out';
                    } else {
                        container.style.display = 'none';
                    }
                });
            }
            
            // Scroll to episodes section
            const episodesSection = document.getElementById('original-series');
            if (episodesSection) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const seriesNavHeight = document.querySelector('.series-nav').offsetHeight;
                const offset = navHeight + seriesNavHeight + 100;
                
                window.scrollTo({
                    top: episodesSection.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Series Navigation
    const seriesNavLinks = document.querySelectorAll('.series-nav-links .nav-pill');
    
    seriesNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active from all
            seriesNavLinks.forEach(l => l.classList.remove('active'));
            
            // Add active to clicked
            this.classList.add('active');
            
            // Get target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const seriesNavHeight = document.querySelector('.series-nav').offsetHeight;
                const offset = navHeight + seriesNavHeight + 20;
                
                const targetPosition = targetSection.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active section on scroll
    const sections = document.querySelectorAll('.episodes-section');
    const navHeight = document.getElementById('navbar').offsetHeight;
    const seriesNavHeight = document.querySelector('.series-nav') ? document.querySelector('.series-nav').offsetHeight : 0;
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - seriesNavHeight - 100;
            
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        seriesNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // Episode Card Hover Effects
    const episodeCards = document.querySelectorAll('.episode-card:not(.placeholder)');
    
    episodeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const number = this.querySelector('.episode-number');
            if (number) {
                number.style.transform = 'rotate(360deg) scale(1.1)';
                number.style.transition = 'transform 0.5s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const number = this.querySelector('.episode-number');
            if (number) {
                number.style.transform = 'rotate(0deg) scale(1)';
            }
        });
    });
    
    // Animate stats on scroll
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const finalValue = stat.textContent;
                    const numericValue = parseInt(finalValue.replace(/\D/g, ''));
                    
                    if (!isNaN(numericValue)) {
                        animateValue(stat, 0, numericValue, 1000, finalValue);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const quickStats = document.querySelector('.quick-stats');
    if (quickStats) {
        statsObserver.observe(quickStats);
    }
    
    // Animate number counting
    function animateValue(element, start, end, duration, originalText) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(function() {
            current += increment;
            if (current >= end) {
                element.textContent = originalText;
                clearInterval(timer);
            } else {
                // Keep the + or other characters from original text
                const suffix = originalText.replace(/\d+/g, '').trim();
                element.textContent = Math.floor(current) + (suffix ? ' ' + suffix : '');
            }
        }, 16);
    }
    
    // Featured Episodes Animation
    const featuredCards = document.querySelectorAll('.featured-card');
    
    const featuredObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s both`;
                }, 0);
                featuredObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    featuredCards.forEach(card => {
        featuredObserver.observe(card);
    });
    
    // Streaming Cards Animation
    const streamingCards = document.querySelectorAll('.streaming-card');
    
    const streamingObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = `fadeIn 0.5s ease-out ${index * 0.15}s both`;
                }, 0);
                streamingObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    streamingCards.forEach(card => {
        streamingObserver.observe(card);
    });
    
    // Episode Search/Filter (placeholder for future enhancement)
    const searchInput = document.getElementById('episode-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const episodeCards = document.querySelectorAll('.episode-card:not(.placeholder)');
            
            episodeCards.forEach(card => {
                const title = card.querySelector('h4').textContent.toLowerCase();
                const summary = card.querySelector('.episode-summary').textContent.toLowerCase();
                
                if (title.includes(query) || summary.includes(query)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Numbers 1-5 to switch seasons
        if (e.key >= '1' && e.key <= '5' && !e.ctrlKey && !e.metaKey) {
            const seasonBtn = document.querySelector(`.season-btn[data-season="${e.key}"]`);
            if (seasonBtn && document.activeElement.tagName !== 'INPUT') {
                seasonBtn.click();
            }
        }
        
        // 'A' for all seasons
        if (e.key.toLowerCase() === 'a' && !e.ctrlKey && !e.metaKey) {
            const allBtn = document.querySelector('.season-btn[data-season="all"]');
            if (allBtn && document.activeElement.tagName !== 'INPUT') {
                allBtn.click();
            }
        }
    });
    
    // Show keyboard shortcuts hint
    console.log('%c⌨️ Keyboard Shortcuts:', 'color: #FF6B35; font-weight: bold; font-size: 14px;');
    console.log('%c1-5: Jump to Season 1-5', 'color: #00B388; font-size: 12px;');
    console.log('%cA: View All Seasons', 'color: #00B388; font-size: 12px;');
    
});
