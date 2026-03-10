# Project Advantage - Landing Page

**Business:** IT Consulting, Project Management, and Solution Architecture
**Tech Stack:** React 17, Bootstrap 3, EmailJS
**Deployment:** DigitalOcean App Platform
**Repository:** https://github.com/chadmcgowan/React-Landing-Page-Template

---

## Design System

### Color Palette
- **Primary Blue:** `#0E67B4` - Professional, trustworthy
- **Accent Coral:** `#FF6B6B` - Modern, energetic, calls-to-action
- **Light Blue:** `#5ca9fb` - Secondary accent
- **Background:** `#f6f6f6` - Light gray for sections
- **Text:** `#333` - Dark gray for body text

### Visual Style
- **Glass-morphism:** Navigation bar with backdrop blur
- **Coral Gradients:** Used for CTAs, feature icons, section underlines
- **Smooth Animations:** Scroll-reveal effects, hover transitions
- **Modern Effects:** Shadows, subtle transforms, micro-interactions

---

## Key Features & Modernizations

### 1. Sticky Navigation
- Glass-morphism effect with `backdrop-filter: blur(10px)`
- Shrinks on scroll (logo: 45px → 35px)
- Smooth transitions (0.4s ease)
- File: `src/components/navigation.jsx` + `public/css/style.css`

### 2. Modern SVG Logo
- **File:** `public/img/logo-modern.svg`
- Geometric hexagon pattern
- Uses brand colors (#0E67B4, #5ca9fb)
- Perfectly scalable for all screen sizes

### 3. Hero Section
- **Background:** `public/img/intro-bg1.jpg` with gradient overlay
- **Title:** "Your Trusted Technology Partner"
- **Tagline:** "From Vision to Execution: Project Management, Architecture & Development"
- **Gradient Overlay:** Blue to coral (135deg)
- **Button:** Coral gradient with glass effect

### 4. Scroll-Reveal Animations
- **Hook:** `src/hooks/useScrollReveal.js`
- **Classes:** `.scroll-reveal`, `.scroll-reveal-left`, `.scroll-reveal-right`, `.scroll-reveal-scale`
- **Applied to:** Services (fade-in), Features (scale), About industries (scale)
- **Timing:** Staggered delays (0.05s - 0.1s between items)

### 5. Services Section
- Blue gradient background (`linear-gradient(to right, #0E67B4 0%, #5ca9fb 100%)`)
- Glass-morphism icons (white with blur)
- 6 services: Project Management, Solution Architecture, App Development, Cloud, IoT, DevOps

### 6. Features Section (Functional Areas)
- **Coral gradient icons** with hover effects
- 4 areas: HR Systems, Supply Chain, Insurance, Content Management
- Scale-up animation on scroll

### 7. About Section
- **Image:** `public/img/undraw_Scrum_board_re_wk7v.png` (unDraw illustration)
- **Industries:** List-style with checkmarks (NOT cards - keep this format)
- **8 Industries:** Retail, Healthcare, Transportation, Insurance, Commodities, Publishing, Telecom, Airline

---

## Important Files

### Components
- `src/components/navigation.jsx` - Sticky nav with scroll detection
- `src/components/header.jsx` - Hero section
- `src/components/about.jsx` - About Us with industries list
- `src/components/services.jsx` - Services section (blue background)
- `src/components/features.jsx` - Functional Areas (coral icons)
- `src/components/contact.jsx` - Contact form with EmailJS

### Styling
- `public/css/style.css` - Main stylesheet with all custom styles
- `public/css/bootstrap.css` - Bootstrap 3.x

### Data
- `src/data/data.json` - All content (text, icons, lists)

### Hooks
- `src/hooks/useScrollReveal.js` - Intersection Observer for scroll animations

### Images
- `public/img/logo-modern.svg` - Modern logo
- `public/img/intro-bg1.jpg` - Hero background
- `public/img/undraw_*.png` - unDraw illustrations

---

## Development

### Package Manager
**IMPORTANT:** Use `yarn.lock` only - `package-lock.json` has been removed to fix DigitalOcean builds.

### Scripts
```bash
npm start          # Development server (http://localhost:3000)
npm run build      # Production build
npm test           # Run tests
```

### Dev Server
- Runs on: `http://localhost:3000`
- Network: `http://192.168.68.111:3000`
- Hot reload enabled

---

## Deployment

### Platform
**DigitalOcean App Platform** - Auto-deploys from GitHub master branch

### Process
1. Push changes to GitHub master branch
2. DigitalOcean automatically detects changes
3. Builds using `yarn` (not npm)
4. Deploys to production

### Build Requirements
- **Node Version:** 14.x or higher
- **Build Command:** `yarn build`
- **Output Directory:** `build/`
- **Lock File:** `yarn.lock` (package-lock.json removed)

### GitHub Actions
- Workflow: `.github/workflows/digitalocean-deploy.yml`
- Triggers on push to master
- Requires secrets: `DIGITALOCEAN_ACCESS_TOKEN`, `DO_APP_NAME`

---

## Design Decisions & Preferences

### ✅ Keep These
- **About section format:** List-style with checkmarks (NOT card-based)
- **Color scheme:** Coral + Blue combination
- **unDraw illustrations:** Modern, professional look
- **Glass-morphism navigation:** Maintains modern aesthetic

### ❌ Avoid These
- Don't add multiple package manager lock files
- Don't change About section to card layout
- Don't remove scroll animations without discussing first
- Don't add emojis unless explicitly requested

### 🔒 Git Workflow
- **IMPORTANT:** Only push to master when explicitly approved by the user
- Always ask before committing and pushing changes
- User prefers to review changes before they go to production

### 📝 Content Guidelines
- Keep messaging focused on value proposition
- Emphasize partnership and expertise
- Highlight 20+ years of experience
- Maintain professional, consultative tone

---

## Contact Integration

**Formspree Configuration:**
- Service: Formspree (replaced EmailJS which expired)
- Endpoint: `https://formspree.io/f/xqeyplge`
- Form: `src/components/contact.jsx`
- Toast notifications: custom Toast component
- Fields: Name, Email, Message
- Success/error toasts on submission
- Contact: info@projectadvantageconsulting.com

---

## Future Enhancements

### Potential Additions
- [ ] Re-enable Gallery section with portfolio work
- [ ] Add team member section with photos
- [ ] Implement client testimonials
- [ ] Add case studies or success stories
- [ ] Create blog integration
- [ ] Add analytics tracking

### Performance Optimizations
- Convert background images to WebP
- Implement lazy loading for images
- Add service worker for offline support
- Optimize bundle size with code splitting

---

## Notes

- Site was modernized in February 2026
- Original template from: https://github.com/issaafalkattan/React-Landing-Page-Template
- Customized for Project Advantage LLC
- Smooth scroll implemented with `smooth-scroll` library
- All animations use CSS transitions for GPU acceleration

---

**Last Updated:** 2026-02-16
