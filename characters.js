// Characters Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scroll for character navigation
    const navPills = document.querySelectorAll('.nav-pill');
    
    navPills.forEach(pill => {
        pill.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all pills
            navPills.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked pill
            this.classList.add('active');
            
            // Get target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const characterNavHeight = document.querySelector('.character-nav').offsetHeight;
                const offset = navHeight + characterNavHeight + 20;
                
                const targetPosition = targetSection.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active section on scroll
    const sections = document.querySelectorAll('.characters-section');
    const navHeight = document.getElementById('navbar').offsetHeight;
    const characterNavHeight = document.querySelector('.character-nav').offsetHeight;
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - characterNavHeight - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navPills.forEach(pill => {
            pill.classList.remove('active');
            if (pill.getAttribute('href') === '#' + current) {
                pill.classList.add('active');
            }
        });
    });
    
    // Animate stat bars when they come into view
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statFills = entry.target.querySelectorAll('.stat-fill');
                statFills.forEach(fill => {
                    const width = fill.style.width;
                    fill.style.width = '0%';
                    setTimeout(() => {
                        fill.style.width = width;
                    }, 100);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const characterStats = document.querySelectorAll('.character-stats');
    characterStats.forEach(stats => {
        statsObserver.observe(stats);
    });
    
    // Character card interactions
    const characterProfiles = document.querySelectorAll('.character-profile');
    
    characterProfiles.forEach(profile => {
        profile.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        profile.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
});
