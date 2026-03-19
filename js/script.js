// ====================================
// X-HILARATION 2026 - Main JavaScript
// ====================================

// Initialize AOS Animation Library when available
if (window.AOS) {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
}

// ====================================
// Navigation
// ====================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ====================================
// Countdown Timer
// ====================================
function startCountdown() {
    const eventDate = new Date('March 23, 2026 08:00:00').getTime();
    let timer;
    
    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        if (distance < 0) {
            document.getElementById('countdown').innerHTML = '<div class="countdown-item"><span class="countdown-value">EVENT</span><span class="countdown-label">Started!</span></div>';
            clearInterval(timer);
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    };
    
    updateCountdown();
    timer = setInterval(updateCountdown, 1000);
}

// Start countdown when page loads
startCountdown();

// ====================================
// Animated Stats Counter
// ====================================
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.getAttribute('data-count'));
                const suffix = target.getAttribute('data-suffix') || '';
                let current = 0;
                const increment = count / 100;
                const duration = 2000; // 2 seconds
                const stepTime = duration / 100;
                
                const counter = setInterval(() => {
                    current += increment;
                    if (current >= count) {
                        target.textContent = `${count.toLocaleString()}${suffix}`;
                        clearInterval(counter);
                    } else {
                        target.textContent = `${Math.floor(current).toLocaleString()}${suffix}`;
                    }
                }, stepTime);
                
                observer.unobserve(target);
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => observer.observe(stat));
}

// Initialize stats animation
animateStats();

// ====================================
// Schedule Tabs
// ====================================
function showSchedule(dayId, buttonEl) {
    // Hide all schedule days
    const allDays = document.querySelectorAll('.schedule-day');
    allDays.forEach(day => day.classList.remove('active'));
    
    // Remove active class from all tab buttons
    const allTabs = document.querySelectorAll('.schedule-tabs .tab-btn');
    allTabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected day
    document.getElementById(dayId).classList.add('active');
    
    // Add active class to clicked button
    if (buttonEl) {
        buttonEl.classList.add('active');
    }
}

function openBasketballGirlsRulebook() {
    const girlsRulebook = window.open('assets/basketball%20girls.pdf', '_blank', 'noopener,noreferrer');
    if (!girlsRulebook) {
        alert('Girls basketball rulebook is available in assets/basketball girls.pdf');
    }
}

// ====================================
// Leaderboard
// ====================================
function showLeaderboard(sport, buttonEl) {
    // Update active tab
    const leaderboardTabs = document.querySelectorAll('.leaderboard-tabs .tab-btn');
    leaderboardTabs.forEach(tab => tab.classList.remove('active'));
    if (buttonEl) {
        buttonEl.classList.add('active');
    }
    
    // Show placeholder (in real implementation, this would fetch data)
    const leaderboardContent = document.getElementById('leaderboardContent');
    leaderboardContent.innerHTML = `
        <div class="leaderboard-placeholder">
            <i class="fas fa-calendar-check"></i>
            <h3>${sport === 'overall' ? 'Overall' : sport.charAt(0).toUpperCase() + sport.slice(1)} Results</h3>
            <p>Competition results will be updated live during the festival</p>
            <p class="countdown-text">March 23-28, 2026</p>
        </div>
    `;
}

// ====================================
// Sport Modal
// ====================================
const sportDetails = {
    football: {
        name: 'Football',
        icon: 'fas fa-futbol',
        description: 'Experience the thrill of 11v11 competitive football on professional-grade turf fields.',
        rules: [
            'Standard FIFA rules apply',
            '90-minute matches (45 minutes each half)',
            'Team of 11 players + 5 substitutes',
            'Round-robin group stage followed by knockout',
            'Golden goal in knockout stages if draw'
        ],
        prizes: [
            'Winner: Rs 50,000 + Trophy',
            'Runner-up: Rs 25,000 + Trophy',
            'Best Player: Rs 5,000',
            'Golden Boot: Rs 5,000'
        ],
        registrationFee: [
            'Entry Fee: Rs 3000 per team'
        ],
        dates: 'March 23-27, 2026',
        venue: 'Main Football Ground'
    },
    basketball: {
        name: 'Basketball',
        icon: 'fas fa-basketball-ball',
        description: 'High 5 vs 5 action in outdoor courts.',
        rules: [
            'FIBA rules apply',
            '4 quarters of 10 minutes each',
            'Team of 5 players + 3 substitutes',
            'Shot clock: 24 seconds',
            'Knockout format from quarter-finals'
        ],
        prizes: [
            'Winner: Rs 40,000 + Trophy',
            'Runner-up: Rs 20,000 + Trophy',
            'MVP: Rs 5,000',
            'Highest Scorer: Rs 3,000'
        ],
        registrationFee: [
            'Entry Fee: Rs 2000 per team'
        ],
        registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSe_FR1J4GLvlJPaqQusQM2_te7uXdlpq9wzUGenvc2cLAxsdg/viewform',
        rulebooks: [
            { label: 'Basketball Boys Rulebook (PDF)', href: 'assets/basketball%20boys.pdf' },
            { label: 'Basketball Girls Rulebook (PDF)', href: 'assets/basketball%20girls.pdf' }
        ],
        dates: 'March 23-26, 2026',
        venue: 'Outdoor Basketball Court'
    },
    volleyball: {
        name: 'Volleyball',
        icon: 'fas fa-volleyball-ball',
        description: 'Dynamic 6v6 volleyball competition with fierce spikes and strategic plays.',
        rules: [
            'FIVB rules apply',
            'Best of 5 sets (25 points each, 15 for 5th set)',
            'Team of 6 players + 2 substitutes',
            'Rally point system',
            'Pool stage followed by knockouts'
        ],
        prizes: [
            'Winner: Rs 35,000 + Trophy',
            'Runner-up: Rs 18,000 + Trophy',
            'Best Spiker: Rs 3,000',
            'Best Setter: Rs 3,000'
        ],
        registrationFee: [
            'Entry Fee: Rs 2000 per team'
        ],
        registerLink: 'https://docs.google.com/forms/d/13PXw8YzOyW-T7Q8cQxN_XgjhvPDtprvNCkXfIbAVY0M/viewform?edit_requested=true',
        rulebooks: [
            { label: 'Volleyball Rulebook (PDF)', href: 'assets/Volleyball%20Rule%20Book.pdf' }
        ],
        dates: 'March 24-27, 2026',
        venue: 'Volleyball Court Complex'
    },
    cricket: {
        name: 'Cricket',
        icon: 'fas fa-baseball-ball',
        description: 'T20 format cricket with electrifying boundaries and strategic gameplay.',
        rules: [
            'T20 format (20 overs per side)',
            'ICC T20 rules apply',
            'Team of 11 players + 4 substitutes',
            'Powerplay in first 6 overs',
            'Super Over in case of tie'
        ],
        prizes: [
            'Winner: Rs 60,000 + Trophy',
            'Runner-up: Rs 30,000 + Trophy',
            'Player of Tournament: Rs 8,000',
            'Best Batsman: Rs 5,000',
            'Best Bowler: Rs 5,000'
        ],
        registrationFee: [
            'Boys Team Fee: Rs 5000',
            'Girls Team Fee: Rs 2000'
        ],
        registerLink: 'https://docs.google.com/forms/d/1HwIKfMCtqmzeqqNdwKOuEjIdL9Z6aQSQRgOY0GqmRBY/viewform?edit_requested=true',
        rulebooks: [
            { label: 'Cricket Rulebook (PDF)', href: 'assets/CRICKET.pdf' }
        ],
        dates: 'March 23-28, 2026',
        venue: 'Cricket Stadium'
    },
    kabaddi: {
        name: 'Kabaddi',
        icon: 'fas fa-fist-raised',
        description: 'Traditional Indian contact sport with intense raids and defensive strategies.',
        rules: [
            'Standard Pro Kabaddi rules',
            '40-minute matches (20 minutes each half)',
            'Team of 7 players + 5 substitutes',
            'Raid and defense points system',
            'All-out bonus applies'
        ],
        prizes: [
            'Winner: Rs 40,000 + Trophy',
            'Runner-up: Rs 20,000 + Trophy',
            'Best Raider: Rs 5,000',
            'Best Defender: Rs 5,000'
        ],
        registrationFee: [
            'Entry Fee: Rs 2000 per team'
        ],
        registerLink: 'assets/X-hilaration%20Xavier%27s%20Sports%20Fest%20Rulebook.pdf',
        dates: 'March 25-28, 2026',
        venue: 'Kabaddi Arena'
    },
    tabletennis: {
        name: 'Table Tennis',
        icon: 'fas fa-table-tennis',
        description: 'Lightning-fast singles and doubles table tennis matches.',
        rules: [
            'ITTF rules apply',
            'Best of 5 games (11 points each)',
            'Singles and Doubles categories',
            'Knockout format',
            'Deuce at 10-10'
        ],
        prizes: [
            'Singles Winner: Rs 15,000 + Trophy',
            'Singles Runner-up: Rs 8,000 + Trophy',
            'Doubles Winner: Rs 20,000 + Trophy',
            'Doubles Runner-up: Rs 10,000 + Trophy'
        ],
        registrationFee: [
            'Singles: Rs 250',
            'Doubles: Rs 500',
            'Mix Doubles: Rs 500',
            'Team Event: Rs 1500'
        ],
        registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSean5WVtkgSLuz58TwiMsSwsYxIH2-0McuNTvs82oEQT5rUHg/viewform',
        rulebooks: [
            { label: 'Table Tennis Rulebook (PDF)', href: 'assets/X_Hilaration_2026_Table_Tennis_Rulebook_COMPLETE.pdf' }
        ],
        dates: 'March 24-26, 2026',
        venue: 'Table Tennis Hall'
    },
    esports: {
        name: 'E Sports',
        icon: 'fas fa-gamepad',
        description: 'Team-based competitive gaming event featuring tactical coordination, strategy, and fast-paced action.',
        rules: [
            'Team of 4 players + 1 substitute',
            'Standard tournament rulebook announced before fixture draw',
            'Double-elimination bracket format',
            'Each match is best-of-3 (finals best-of-5)',
            'All players must carry valid college IDs and registered game IDs'
        ],
        prizes: [
            'Winner: Rs 30,000 + Trophy',
            'Runner-up: Rs 15,000 + Trophy',
            'MVP: Rs 4,000',
            'Best Strategy Team: Rs 3,000'
        ],
        registrationFee: [
            'BGMI: Rs 400 per team',
            'Free Fire: Rs 400 per team'
        ],
        registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSf9SlK9pYp6AJoEvUV50SiJWcG0oYXK7QD5P3Y1xgYIZy2IGQ/viewform',
        dates: 'March 24-28, 2026',
        venue: 'E Sports Arena'
    },
    athletics: {
        name: 'Athletics',
        icon: 'fas fa-person-running',
        description: 'Track and field events featuring speed, endurance, jumps, and throws.',
        rules: [
            'Individual participation across track and field categories',
            'Standard federation event rules apply',
            'Track events use timed heats and finals',
            'Field events follow best-attempt qualification',
            'Reporting 45 minutes before event start is mandatory'
        ],
        prizes: [
            'Gold Medal + Certificate (each event)',
            'Silver Medal + Certificate (each event)',
            'Bronze Medal + Certificate (each event)'
        ],
        registrationFee: [
            'Entry Fee: Rs 100 per event'
        ],
        registerLink: 'assets/X-Leration%20Athletics%20Rulebook.pdf',
        dates: 'March 24-28, 2026',
        venue: 'Athletics Track & Field Arena'
    }
};

function openSportModal(sportKey) {
    const modal = document.getElementById('sportModal');
    const modalBody = document.getElementById('sportModalBody');
    const sport = sportDetails[sportKey];
    if (!sport) return;

    const feeSection = sport.registrationFee && sport.registrationFee.length > 0
        ? `
        <div style="margin-bottom: 2rem;">
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-receipt" style="color: var(--color-primary);"></i>
                Registration Fee
            </h3>
            <ul style="list-style: none; padding: 0;">
                ${sport.registrationFee.map(fee => `
                    <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--color-border); display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-tag" style="color: var(--color-primary);"></i>
                        <span>${fee}</span>
                    </li>
                `).join('')}
            </ul>
        </div>`
        : '';

    const rulebookSection = sport.rulebooks && sport.rulebooks.length > 0
        ? `
        <div style="margin-bottom: 2rem;">
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-file-pdf" style="color: var(--color-secondary);"></i>
                Rulebook PDF
            </h3>
            <div style="display: grid; gap: 0.8rem;">
                ${sport.rulebooks.map(rulebook => `
                    <a href="${rulebook.href}" target="_blank" rel="noopener noreferrer" class="btn btn-sport" style="justify-content: center;">
                        <i class="fas fa-download"></i>
                        ${rulebook.label}
                    </a>
                `).join('')}
            </div>
        </div>`
        : '';

    const registerHref = sport.registerLink || '#contact';
    const registerExternalAttrs = /^https?:\/\//.test(registerHref) ? 'target="_blank" rel="noopener noreferrer"' : '';
    const registerLabel = sport.registerLink ? 'Register Now' : 'Contact for Registration';
    
    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <i class="${sport.icon}" style="font-size: 4rem; background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"></i>
            <h2 style="font-size: 2.5rem; margin: 1rem 0;">${sport.name}</h2>
            <p style="color: var(--color-text-secondary); font-size: 1.1rem;">${sport.description}</p>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 1rem;">
                <div style="text-align: center; padding: 1rem; background: rgba(0, 196, 255, 0.12); border-radius: 10px;">
                    <i class="fas fa-calendar" style="color: var(--color-primary); font-size: 1.5rem; margin-bottom: 0.5rem;"></i>
                    <p style="font-size: 0.9rem; color: var(--color-text-secondary); margin: 0;">Dates</p>
                    <p style="font-weight: 600; margin: 0;">${sport.dates}</p>
                </div>
                <div style="text-align: center; padding: 1rem; background: rgba(58, 255, 122, 0.12); border-radius: 10px;">
                    <i class="fas fa-map-marker-alt" style="color: var(--color-secondary); font-size: 1.5rem; margin-bottom: 0.5rem;"></i>
                    <p style="font-size: 0.9rem; color: var(--color-text-secondary); margin: 0;">Venue</p>
                    <p style="font-weight: 600; margin: 0;">${sport.venue}</p>
                </div>
            </div>
        </div>
        ${feeSection}
        ${rulebookSection}
        
        <div style="margin-bottom: 2rem;">
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-clipboard-list" style="color: var(--color-accent);"></i>
                Rules & Format
            </h3>
            <ul style="list-style: none; padding: 0;">
                ${sport.rules.map(rule => `
                    <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--color-border); display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-check-circle" style="color: var(--color-accent);"></i>
                        <span>${rule}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div>
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
                <i class="fas fa-trophy" style="color: var(--color-secondary);"></i>
                Prizes
            </h3>
            <ul style="list-style: none; padding: 0;">
                ${sport.prizes.map(prize => `
                    <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--color-border); display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-medal" style="color: var(--color-primary);"></i>
                        <span>${prize}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div style="text-align: center; margin-top: 2rem;">
            <a href="${registerHref}" class="btn btn-primary" ${registerExternalAttrs} onclick="closeSportModal()">
                <i class="fas fa-rocket"></i>
                ${registerLabel}
            </a>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSportModal() {
    const modal = document.getElementById('sportModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking overlay
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-overlay')) {
        closeSportModal();
    }
});

// ====================================
// FAQ Accordion
// ====================================
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked FAQ if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// ====================================
// Smooth Scroll for Anchor Links
// ====================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ====================================
// EDM Background Media
// ====================================
function initEdmBackgroundMedia() {
    const edmSection = document.getElementById('edm');
    const edmVideo = document.getElementById('edmBgVideo');

    if (!edmSection || !edmVideo) {
        return;
    }

    let videoAvailable = true;

    const switchToFallback = () => {
        if (!videoAvailable) {
            return;
        }
        videoAvailable = false;
        edmSection.classList.remove('video-active');
        edmSection.classList.add('video-fallback');
        edmVideo.pause();
    };

    const markVideoReady = () => {
        if (!videoAvailable) {
            return;
        }
        edmSection.classList.add('video-active');
        edmSection.classList.remove('video-fallback');
    };

    const playEdmVideo = () => {
        if (!videoAvailable) {
            return;
        }
        const playAttempt = edmVideo.play();
        if (playAttempt && typeof playAttempt.catch === 'function') {
            playAttempt.catch(() => {
                switchToFallback();
            });
        }
    };

    const pauseEdmVideo = () => {
        if (!edmVideo.paused) {
            edmVideo.pause();
        }
    };

    edmVideo.addEventListener('playing', markVideoReady);
    edmVideo.addEventListener('error', switchToFallback);
    edmVideo.addEventListener('abort', switchToFallback);

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.target !== edmSection) {
                    return;
                }
                if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
                    playEdmVideo();
                } else {
                    pauseEdmVideo();
                }
            });
        }, {
            threshold: [0, 0.2, 0.35, 0.6]
        });

        observer.observe(edmSection);
    } else {
        playEdmVideo();
    }

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            pauseEdmVideo();
            return;
        }
        const rect = edmSection.getBoundingClientRect();
        const sectionVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;
        if (sectionVisible) {
            playEdmVideo();
        }
    });
}

initEdmBackgroundMedia();

// ====================================
// Page Load Animations
// ====================================
window.addEventListener('load', () => {
    // Add loaded class to body for any CSS animations
    document.body.classList.add('loaded');
    
    // Refresh AOS to ensure all animations work
    if (window.AOS) {
        AOS.refresh();
    }
});

// ====================================
// Console Message
// ====================================
console.log('%cX-HILARATION 2026', 'font-size: 24px; font-weight: bold; color: #00c4ff; text-shadow: 0 0 10px #00c4ff;');
console.log('%cInstitutional Sports Festival', 'font-size: 16px; color: #3aff7a;');
console.log('%cXavier University, Patna | March 23-28, 2026', 'font-size: 14px; color: #3aff7a;');
console.log('%c\nWebsite developed for the biggest sports festival of 2026', 'font-size: 12px; color: #b8c5d6;');



