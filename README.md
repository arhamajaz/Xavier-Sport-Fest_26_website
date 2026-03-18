# X-hilaration 2026 ðŸ†

**Inter-College Sports Festival Website**  
Xavier University, Patna | March 23-28, 2026

---

## ðŸŽ¯ Project Overview

X-hilaration 2026 is a high-energy, dark-themed website designed for an inter-college sports festival. The website features a modern design with neon accents, glassmorphism effects, smooth animations, and full mobile responsiveness.

### ðŸŒŸ Key Features

- **Dark Theme Design**: Deep electric-blue base with neon-green information highlights and blue glow accents
- **Athletic Typography**: Orbitron + Rajdhani for futuristic sports energy
- **Glassmorphism Cards**: Enhanced frosted glass effect with blue/green neon glow
- **Smooth Animations**: AOS (Animate On Scroll) library integration
- **Fully Responsive**: Mobile-first design that works on all devices
- **Interactive Elements**: Sport modals, schedule tabs, leaderboard tabs, and accordion FAQs

---

## ðŸ“‹ Sections & Features

### 1. **Hero Section** (`#home`)
- Large animated title with neon glow effects
- Live countdown timer to March 23, 2026
- "View Schedule" CTA button
- Animated background with floating orbs
- Scroll indicator

### 2. **About Section** (`#about`)
- Festival introduction and highlights
- Animated statistics counter:
  - 2,000+ Athletes Expected
  - 150+ Teams Expected
  - 7 Sports Events
  - â‚¹500,000 Prize Pool

### 3. **Sports Section** (`#sports`)
- Interactive sport cards for 6 sports:
  - âš½ **Football** (11+5 players, Mar 23-27)
  - ðŸ€ **Basketball** (5+3 players, Mar 23-26)
  - ðŸ **Volleyball** (6+2 players, Mar 24-27)
  - ðŸ **Cricket** (11+4 players, Mar 23-28)
  - ðŸ¤¼ **Kabaddi** (7+5 players, Mar 25-28)
  - ðŸ“ **Table Tennis** (Singles/Doubles, Mar 24-26)
- Click on sport cards to view detailed rules, prizes, and schedules in modal

### 4. **Schedule Section** (`#schedule`)
- Day-wise schedule dashboard (7 days)
- Tab-based navigation for each day
- Timeline view with event details
- Venue and timing information
- Special highlight for EDM closing night

### 5. **Registration Flow**
- On-page team registration has been removed.
- Team registration is handled externally through a Google Form.

### 6. **Institution Listings**
- The on-page institution listing section has been removed until official data is finalized.

### 7. **Leaderboard Section** (`#leaderboard`)
- Results & standings UI
- Sport-specific tabs
- Placeholder for live updates during festival
- Ready for integration with backend API

### 8. **EDM Night Showcase** (`#edm`)
- Full-screen section with dramatic design
- Event details:
  - Date: March 28, 2026
  - Time: 8:00 PM - 2:00 AM
  - Venue: Open Air Arena
- Features: Top DJs, Live Performances, Light Show, Pyrotechnics
- Free entry for registered participants

### 9. **Sponsors Section** (`#sponsors`)
- Tiered sponsor display:
  - ðŸ‘‘ **Title Sponsor** (1 slot)
  - ðŸ’Ž **Platinum Sponsors** (3 slots)
  - ðŸ¥‡ **Gold Sponsors** (4 slots)
  - â­ **Silver Sponsors** (6 slots)
- Sponsor CTA for partnership inquiries

### 10. **Contact & FAQ** (`#contact`)
- Coordinator contact cards:
  - **Rahul Kumar** (Sports Coordinator): +91 98765 43210
  - **Priya Singh** (Registration Head): +91 98765 43211
- Venue address with map marker
- Social media links (Facebook, Instagram, Twitter, YouTube, LinkedIn)
- Interactive FAQ accordion (7 common questions)

### 11. **Footer**
- Quick links navigation
- Contact information
- Social media links
- Copyright notice

---

## ðŸŽ¨ Design System

### Color Palette
```css
--color-primary: #39ff14;       /* Neon Green */
--color-secondary: #73ff4c;     /* Electric Lime */
--color-accent: #00a2ff;        /* Electric Blue */
--color-glow-green: #b8ff8a;    /* Neon Glow Green */
--color-glow-blue: #3b82f6;     /* Bright Blue */
--color-orange: #f97316;        /* Fiery Orange */
```

### Typography
- **Display Font**: Orbitron (headings, titles, numbers) - Futuristic energy
- **Body Font**: Rajdhani (paragraphs, buttons, forms) - Athletic readability

### Visual Effects
- **Glassmorphism**: Enhanced `backdrop-filter: blur(15px)` with blue/green neon glow
- **Neon Glow**: Intense `box-shadow: 0 0 40px rgba(168, 85, 247, 0.4)`
- **Gradient Text**: Blue-to-neon-green gradients on key titles
- **Smooth Animations**: AOS library + custom neon blue/green CSS animations
- **Radial Backgrounds**: Blue and neon-green gradients for depth

---

## ðŸ› ï¸ Technology Stack

### Frontend
- **HTML5**: Semantic structure
- **CSS3**: Custom styling with CSS variables
- **JavaScript (ES6+)**: Interactive functionality

### Libraries & CDN
- **Google Fonts**: Orbitron + Rajdhani (+ Bebas Neue & Inter fallbacks)
- **Font Awesome 6.4.0**: Icons
- **AOS 2.3.1**: Scroll animations

### Features Implementation
- Countdown timer to event date
- Multi-step form with validation
- Dynamic content filtering
- Modal dialogs
- Accordion FAQs
- Smooth scroll navigation
- Responsive mobile menu

---

## ðŸ“± Responsive Breakpoints

- **Desktop**: 1400px+ (full layout)
- **Laptop**: 1024px - 1399px (adjusted grid)
- **Tablet**: 768px - 1023px (single column layouts)
- **Mobile**: < 768px (mobile menu, stacked content)

---

## ðŸš€ Getting Started

### Local Development

1. **Clone or download** the project files
2. **Open `index.html`** in a modern web browser
3. No build process required - pure HTML/CSS/JS

### File Structure
```
x-hilaration-2026/
â”œâ”€â”€ index.html           # Main HTML file
â”œâ”€â”€ css/
â”‚   â””â”€â”€ style.css       # Main stylesheet
â”œâ”€â”€ js/
â”‚   â””â”€â”€ script.js       # Main JavaScript file
â””â”€â”€ README.md           # This file
```

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## âœ… Completed Features

### Fully Implemented
- âœ… Hero section with countdown timer
- âœ… About section with animated statistics
- âœ… Interactive sports cards with detailed modals
- âœ… Day-wise schedule dashboard (7 days)
- âœ… Multi-step registration form (4 steps)
- âœ… Participating colleges grid with state filters
- âœ… Leaderboard/results UI placeholder
- âœ… EDM closing night showcase
- âœ… Sponsor tier display
- âœ… Contact section with coordinator details
- âœ… FAQ accordion
- âœ… Responsive navigation
- âœ… Smooth scroll animations
- âœ… Mobile responsiveness
- âœ… Glassmorphism effects
- âœ… Neon accent styling

---

## ðŸ”„ Features Not Yet Implemented

### Backend Integration (Future Enhancements)
- âŒ Form submission to database
- âŒ Real-time leaderboard updates
- âŒ Live match scores
- âŒ Admin dashboard for organizers
- âŒ Email confirmation system
- âŒ Payment gateway integration
- âŒ User authentication
- âŒ College verification system

### Additional Features (Optional)
- âŒ Photo gallery from past events
- âŒ Video highlights
- âŒ Live streaming integration
- âŒ Mobile app links
- âŒ Ticket booking system
- âŒ Accommodation booking
- âŒ Food court information
- âŒ Campus map integration

---

## ðŸŽ¯ Recommended Next Steps

### Phase 1: Content Enhancement
1. **Add real sponsor logos** to replace placeholders
2. **Include event photos** from previous festivals
3. **Add coordinator photos** to contact cards
4. **Write detailed terms & conditions** document
5. **Create downloadable brochure** (PDF)

### Phase 2: Backend Development
1. **Set up database** for registration storage
2. **Implement email service** for confirmations
3. **Create admin panel** for managing registrations
4. **Add payment gateway** for registration fees
5. **Build API endpoints** for leaderboard updates

### Phase 3: Advanced Features
1. **Real-time notifications** for match updates
2. **Live score integration** from match venues
3. **Social media feed** integration
4. **Mobile app development** (optional)
5. **Analytics dashboard** for organizers

### Phase 4: Testing & Launch
1. **Cross-browser testing** on all major browsers
2. **Mobile device testing** (iOS, Android)
3. **Performance optimization** (lazy loading, minification)
4. **SEO optimization** (meta tags, sitemap)
5. **Security audit** before launch

---

## ðŸ“Š Current Functional Entry URIs

### Navigation Links
- `/` or `/#home` - Hero section
- `/#about` - About the festival
- `/#sports` - Sports events
- `/#schedule` - Event schedule
- `/#leaderboard` - Results & leaderboard
- `/#edm` - EDM night details
- `/#sponsors` - Sponsor information
- `/#contact` - Contact & FAQ

### Interactive Elements
- Sport cards â†’ Opens detailed modal
- FAQ items â†’ Expands/collapses answers
- Schedule tabs â†’ Switches between days
- Leaderboard tabs â†’ Switches between sports

---

## ðŸŽ¨ Customization Guide

### Changing Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --color-primary: #0ff;      /* Electric Blue */
    --color-secondary: #ff4500;  /* Fiery Orange */
    --color-accent: #39ff14;     /* Lime Green */
}
```

### Updating Event Date
Modify countdown in `js/script.js`:
```javascript
const eventDate = new Date('March 23, 2026 08:00:00').getTime();
```

### Adding Sports
Update `sportDetails` object in `js/script.js` with new sport information.

---

## ðŸ“ž Contact & Support

### Festival Organizers
- **Sports Coordinator**: Rahul Kumar (+91 98765 43210)
- **Registration Head**: Priya Singh (+91 98765 43211)
- **Email**: info@xhilaration.com

### Venue
Xavier University  
Digha-Ashiana Road, Sondaha  
Patna, Bihar 800030

### Social Media
- Facebook: [Link]
- Instagram: [Link]
- Twitter: [Link]
- YouTube: [Link]
- LinkedIn: [Link]

---

## ðŸ“ License & Credits

### Design & Development
- Created for X-hilaration 2026, Xavier University, Patna
- All rights reserved Â© 2026

### Third-Party Resources
- Google Fonts (Bebas Neue, Inter)
- Font Awesome Icons
- AOS Animation Library

---

## ðŸŽ‰ Event Highlights

**X-hilaration 2026** promises to be the biggest inter-college sports festival in the region with:

- ðŸ† **â‚¹5 Lakh Total Prize Pool**
- ðŸ« **50+ Colleges** from 6+ states
- ðŸ‘¥ **2000+ Athletes** competing
- âš½ **6 Major Sports** across 7 days
- ðŸŽµ **Epic EDM Night** closing celebration
- ðŸ… **Professional-grade facilities**
- ðŸŽ–ï¸ **Certified referees & judges**
- ðŸ¥ **On-site medical support**
- ðŸ¨ **Accommodation available**

**See you at the arena! ðŸ”¥**

---

*Last Updated: 2026-03-14*  
*Website Version: 1.0*

