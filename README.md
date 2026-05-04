# WYVEX — AI Tools for Growing Businesses

A modern, responsive website for WYVEX featuring AI chatbots, workflow automation, and custom websites for small businesses.

## Project Structure

```
Wyvex_start/
├── index.html          (Main HTML file)
├── css/
│   └── style.css       (All styling)
├── js/
│   └── script.js       (All JavaScript functionality)
└── README.md           (This file)
```

## Features

- **Custom Cursor Animation** - Interactive pointer tracking with hover effects
- **Smooth Scroll Behavior** - Seamless navigation between sections
- **Reveal Animations** - Content slides in as you scroll
- **Interactive "How It Works" Steps** - Clickable process steps with visual panels
- **Live Demo Chat** - Interactive chatbot demonstration
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Contact Form** - Email validation and success feedback

## How to Run on Live Server

### Option 1: Using VS Code Live Server Extension (Recommended)

1. **Install the Extension** (if not already installed):
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
   - Search for "Live Server"
   - Install the version by Ritwick Dey

2. **Run the Server**:
   - Right-click on `index.html` in the file explorer
   - Select **"Open with Live Server"**
   - Your browser will automatically open at `http://127.0.0.1:5500`

3. **Auto-Reload**:
   - Changes to any files (HTML, CSS, JS) will automatically refresh your browser

### Option 2: Using Python (Alternative)

If you have Python installed, run this command in the project directory:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

### Option 3: Using Node.js http-server

If you have Node.js installed:

```bash
npx http-server
```

## File Breakdown

### `index.html`
- Clean HTML structure with all content sections
- Semantic HTML5 elements
- Links to external CSS (Google Fonts) and internal stylesheets
- Meta viewport for mobile responsive design

### `css/style.css`
- **Reset & Base Styles**: Universal box-sizing, typography
- **Custom Cursor**: Animated pointer with ring effect
- **Navigation**: Fixed header with sticky background on scroll
- **Hero Section**: Large heading, statistics, and animated ticker
- **Services**: Service cards with hover effects
- **How It Works**: Interactive process steps with visual panels
- **Work/Portfolio**: Case study cards with demo chat
- **Testimonials**: Client feedback section
- **CTA & Form**: Contact form with validation
- **Footer**: Links and company info
- **Animations**: Reveal effects with staggered delays
- **Responsive Design**: Mobile-first breakpoints at 1024px and 640px

### `js/script.js`
- **Cursor Animation**: Smooth tracking with hover enlargement
- **Navigation**: Sticky nav and mobile burger menu
- **Scroll Animations**: Intersection Observer for reveal effects
- **Interactive Steps**: Auto-advancing process steps with manual controls
- **Chat Demonstrations**: Animated conversation bubbles
- **Form Validation**: Email validation and success feedback

## Sections

1. **Hero** - Main introduction with statistics and CTA buttons
2. **Services** - Three main service offerings
3. **How It Works** - 4-step process with interactive visual panels
4. **Work** - Case studies and live chatbot demo
5. **Testimonials** - Client reviews and success metrics
6. **CTA** - Contact form and call-to-action
7. **Footer** - Company links and contact information

## Customization

- Edit `index.html` to change content and structure
- Modify `css/style.css` to adjust colors, spacing, and layout
- Update `js/script.js` to change interactive behavior
- CSS Variables are defined in `:root` for easy color/spacing changes

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Notes

- The custom cursor hides on mobile devices for better touch experience
- All animations use CSS Transitions and Keyframes for smooth performance
- The page is fully responsive with mobile-optimized layout
- Forms include basic validation (you may want to add backend submission)

---

**Ready to go live?** Just right-click `index.html` → "Open with Live Server" and you're done! 🚀
