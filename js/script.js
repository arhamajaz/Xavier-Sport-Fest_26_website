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
                let current = 0;
                const increment = count / 100;
                const duration = 2000; // 2 seconds
                const stepTime = duration / 100;
                
                const counter = setInterval(() => {
                    current += increment;
                    if (current >= count) {
                        target.textContent = count.toLocaleString();
                        clearInterval(counter);
                    } else {
                        target.textContent = Math.floor(current).toLocaleString();
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

// ====================================
// Registration Form Multi-Step
// ====================================
let currentStep = 1;
const totalSteps = 4;

function nextStep(step) {
    // Validate current step
    if (!validateStep(step)) {
        return;
    }
    
    // Hide current step
    document.querySelector(`.form-step[data-step="${step}"]`).classList.remove('active');
    document.querySelector(`.progress-step[data-step="${step}"]`).classList.remove('active');
    
    // Show next step
    currentStep = step + 1;
    document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.add('active');
    document.querySelector(`.progress-step[data-step="${currentStep}"]`).classList.add('active');
    
    // If step 4 (review), populate review data
    if (currentStep === 4) {
        populateReview();
    }
    
    // Scroll to top of form
    document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
}

function prevStep(step) {
    // Hide current step
    document.querySelector(`.form-step[data-step="${step}"]`).classList.remove('active');
    document.querySelector(`.progress-step[data-step="${step}"]`).classList.remove('active');
    
    // Show previous step
    currentStep = step - 1;
    document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.add('active');
    document.querySelector(`.progress-step[data-step="${currentStep}"]`).classList.add('active');
    
    // Scroll to top of form
    document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
}

function validateStep(step) {
    const currentStepElement = document.querySelector(`.form-step[data-step="${step}"]`);
    
    if (step === 1) {
        // Validate college information
        const collegeName = currentStepElement.querySelector('[name="collegeName"]').value;
        const state = currentStepElement.querySelector('[name="state"]').value;
        const address = currentStepElement.querySelector('[name="address"]').value;
        const contactPerson = currentStepElement.querySelector('[name="contactPerson"]').value;
        const phone = currentStepElement.querySelector('[name="phone"]').value;
        const email = currentStepElement.querySelector('[name="email"]').value;
        
        if (!collegeName || !state || !address || !contactPerson || !phone || !email) {
            alert('Please fill in all required fields');
            return false;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }
        
        // Validate phone format
        const phoneRegex = /^[+]?[\d\s-]{10,}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number');
            return false;
        }
    }
    
    if (step === 2) {
        // Validate sport selection
        const selectedSports = currentStepElement.querySelectorAll('[name="sports"]:checked');
        if (selectedSports.length === 0) {
            alert('Please select at least one sport');
            return false;
        }
    }
    
    if (step === 3) {
        // Validate terms acceptance
        const termsAccepted = currentStepElement.querySelector('[name="terms"]').checked;
        if (!termsAccepted) {
            alert('Please accept the terms and conditions');
            return false;
        }
    }
    
    return true;
}

function populateReview() {
    const form = document.getElementById('registrationForm');
    const sportLabelMap = {
        tabletennis: 'Table Tennis',
        esports: 'E Sports'
    };
    
    // Get form values
    const collegeName = form.querySelector('[name="collegeName"]').value;
    const state = form.querySelector('[name="state"]').value;
    const contactPerson = form.querySelector('[name="contactPerson"]').value;
    const email = form.querySelector('[name="email"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    
    const selectedSports = Array.from(form.querySelectorAll('[name="sports"]:checked'))
        .map(checkbox => checkbox.value)
        .map(sport => sportLabelMap[sport] || (sport.charAt(0).toUpperCase() + sport.slice(1)))
        .join(', ');
    
    // Populate review section
    document.getElementById('reviewCollege').textContent = collegeName;
    document.getElementById('reviewState').textContent = state;
    document.getElementById('reviewContact').textContent = contactPerson;
    document.getElementById('reviewEmail').textContent = email;
    document.getElementById('reviewPhone').textContent = phone;
    document.getElementById('reviewSports').textContent = selectedSports || 'None selected';
}

// Form submission handler
document.getElementById('registrationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        if (key === 'sports') {
            if (!data.sports) data.sports = [];
            data.sports.push(value);
        } else {
            data[key] = value;
        }
    }
    
    console.log('Registration Data:', data);
    
    // Show success message
    alert('ðŸŽ‰ Registration Submitted Successfully!\n\nYou will receive a confirmation email shortly with further details.\n\nRegistration ID: XH-' + Math.random().toString(36).substr(2, 9).toUpperCase());
    
    // Reset form
    e.target.reset();
    currentStep = 1;
    document.querySelectorAll('.form-step').forEach(step => step.classList.remove('active'));
    document.querySelectorAll('.progress-step').forEach(step => step.classList.remove('active'));
    document.querySelector('.form-step[data-step="1"]').classList.add('active');
    document.querySelector('.progress-step[data-step="1"]').classList.add('active');
});

// ====================================
// Participating Colleges
// ====================================
const collegesData = [
    { name: 'Xavier University', state: 'Bihar', sports: ['Football', 'Basketball', 'Cricket'] },
    { name: 'St. Xavier\'s College', state: 'Bihar', sports: ['Volleyball', 'Kabaddi'] },
    { name: 'Patna College', state: 'Bihar', sports: ['Football', 'Cricket', 'Table Tennis'] },
    { name: 'Bihar National College', state: 'Bihar', sports: ['Basketball', 'Volleyball'] },
    { name: 'Chanakya National Law University', state: 'Bihar', sports: ['Football', 'Kabaddi'] },
    { name: 'Ranchi University', state: 'Jharkhand', sports: ['Football', 'Cricket', 'Kabaddi'] },
    { name: 'BIT Mesra', state: 'Jharkhand', sports: ['Basketball', 'Volleyball', 'Table Tennis'] },
    { name: 'St. Xavier\'s College Ranchi', state: 'Jharkhand', sports: ['Football', 'Cricket'] },
    { name: 'Allahabad University', state: 'Uttar Pradesh', sports: ['Cricket', 'Football', 'Kabaddi'] },
    { name: 'BHU Varanasi', state: 'Uttar Pradesh', sports: ['Basketball', 'Volleyball', 'Cricket'] },
    { name: 'Lucknow University', state: 'Uttar Pradesh', sports: ['Football', 'Table Tennis'] },
    { name: 'Jadavpur University', state: 'West Bengal', sports: ['Football', 'Cricket', 'Basketball'] },
    { name: 'Presidency University', state: 'West Bengal', sports: ['Volleyball', 'Kabaddi', 'Table Tennis'] },
    { name: 'St. Xavier\'s College Kolkata', state: 'West Bengal', sports: ['Football', 'Cricket'] },
    { name: 'Utkal University', state: 'Odisha', sports: ['Football', 'Kabaddi', 'Volleyball'] },
    { name: 'NIT Rourkela', state: 'Odisha', sports: ['Basketball', 'Cricket', 'Table Tennis'] },
    { name: 'Pt. Ravishankar University', state: 'Chhattisgarh', sports: ['Football', 'Kabaddi'] },
    { name: 'NIT Raipur', state: 'Chhattisgarh', sports: ['Basketball', 'Volleyball', 'Cricket'] }
];

const featuredStates = ['Bihar', 'Jharkhand', 'Uttar Pradesh', 'West Bengal'];

function loadColleges(filter = 'all') {
    const collegesGrid = document.getElementById('collegesGrid');
    collegesGrid.innerHTML = '';
    
    let filteredColleges;
    if (filter === 'all') {
        filteredColleges = collegesData;
    } else if (filter === 'Other') {
        filteredColleges = collegesData.filter(college => !featuredStates.includes(college.state));
    } else {
        filteredColleges = collegesData.filter(college => college.state === filter);
    }
    
    filteredColleges.forEach(college => {
        const collegeCard = document.createElement('div');
        collegeCard.className = 'college-card glass-card';
        collegeCard.setAttribute('data-aos', 'fade-up');
        
        collegeCard.innerHTML = `
            <div class="college-icon">
                <i class="fas fa-university"></i>
            </div>
            <h3 class="college-name">${college.name}</h3>
            <span class="college-state">${college.state}</span>
        `;
        
        collegesGrid.appendChild(collegeCard);
    });
    
    // Update stats
    const uniqueStates = [...new Set(collegesData.map(c => c.state))];
    const filteredStates = [...new Set(filteredColleges.map(c => c.state))];
    document.getElementById('totalColleges').textContent = filteredColleges.length;
    document.getElementById('statesRepresented').textContent = filter === 'all' ? uniqueStates.length : filteredStates.length;
    
    // Reinitialize AOS for new elements
    if (window.AOS) {
        AOS.refresh();
    }
}

function filterColleges(state, buttonEl) {
    // Update active filter button
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    if (buttonEl) {
        buttonEl.classList.add('active');
    }
    
    // Load filtered colleges
    loadColleges(state);
}

// Load colleges on page load
loadColleges();

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
            <p class="countdown-text">March 23-29, 2026</p>
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
            'Winner: â‚¹50,000 + Trophy',
            'Runner-up: â‚¹25,000 + Trophy',
            'Best Player: â‚¹5,000',
            'Golden Boot: â‚¹5,000'
        ],
        dates: 'March 23-27, 2026',
        venue: 'Main Football Ground'
    },
    basketball: {
        name: 'Basketball',
        icon: 'fas fa-basketball-ball',
        description: 'High-octane 5v5 basketball action on indoor courts with professional equipment.',
        rules: [
            'FIBA rules apply',
            '4 quarters of 10 minutes each',
            'Team of 5 players + 3 substitutes',
            'Shot clock: 24 seconds',
            'Knockout format from quarter-finals'
        ],
        prizes: [
            'Winner: â‚¹40,000 + Trophy',
            'Runner-up: â‚¹20,000 + Trophy',
            'MVP: â‚¹5,000',
            'Highest Scorer: â‚¹3,000'
        ],
        dates: 'March 23-26, 2026',
        venue: 'Indoor Basketball Court 1'
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
            'Winner: â‚¹35,000 + Trophy',
            'Runner-up: â‚¹18,000 + Trophy',
            'Best Spiker: â‚¹3,000',
            'Best Setter: â‚¹3,000'
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
            'Winner: â‚¹60,000 + Trophy',
            'Runner-up: â‚¹30,000 + Trophy',
            'Player of Tournament: â‚¹8,000',
            'Best Batsman: â‚¹5,000',
            'Best Bowler: â‚¹5,000'
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
            'Winner: â‚¹40,000 + Trophy',
            'Runner-up: â‚¹20,000 + Trophy',
            'Best Raider: â‚¹5,000',
            'Best Defender: â‚¹5,000'
        ],
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
            'Singles Winner: â‚¹15,000 + Trophy',
            'Singles Runner-up: â‚¹8,000 + Trophy',
            'Doubles Winner: â‚¹20,000 + Trophy',
            'Doubles Runner-up: â‚¹10,000 + Trophy'
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
            'Winner: ₹30,000 + Trophy',
            'Runner-up: ₹15,000 + Trophy',
            'MVP: ₹4,000',
            'Best Strategy Team: ₹3,000'
        ],
        dates: 'March 24-29, 2026',
        venue: 'E Sports Arena'
    }
};

function openSportModal(sportKey) {
    const modal = document.getElementById('sportModal');
    const modalBody = document.getElementById('sportModalBody');
    const sport = sportDetails[sportKey];
    
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
            <a href="#register" class="btn btn-primary" onclick="closeSportModal()">
                <i class="fas fa-rocket"></i>
                Register Your Team
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
console.log('%cðŸ† X-HILARATION 2026 ðŸ†', 'font-size: 24px; font-weight: bold; color: #00c4ff; text-shadow: 0 0 10px #00c4ff;');
console.log('%cInter-College Sports Festival', 'font-size: 16px; color: #3aff7a;');
console.log('%cXavier University, Patna | March 23-29, 2026', 'font-size: 14px; color: #3aff7a;');
console.log('%c\nWebsite developed with â¤ï¸ for the biggest sports festival of 2026', 'font-size: 12px; color: #b8c5d6;');



