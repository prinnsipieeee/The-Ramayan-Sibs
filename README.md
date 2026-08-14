# 🎻 The Ramayan Sibs — Official Business Website

> **Soulful Acoustic Harmonies for Life's Most Unforgettable Moments**  
> A modern, editorial, and responsive web application built for *The Ramayan Sibs* (Acoustic Singer Duo for Weddings, Corporate, and Special Events).

---

## 🌟 Tech Stack & Features

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: Google Fonts (*Cormorant Garamond*, *Cinzel*, *Plus Jakarta Sans*, *Alex Brush*)

---

## ✨ Features Implemented (Phase 1)

1. **Editorial Responsive Navigation (`Navbar.jsx`)**:
   - Stacked luxury brand typography (`The Ramayan / Sibs | ESTABLISHED 2022`).
   - Clean tracking navigation links (`Home`, `Services`, `The Sibling Bond`, `Media Showcase`, `Booking Guide`).
   - Outlined `INQUIRE NOW` Call-To-Action button.
   - Fully responsive mobile menu drawer.

2. **Luxury Hero Section (`Hero.jsx`)**:
   - 2-Column responsive grid layout.
   - Custom SVG circular brand emblem logo & subtitle badge.
   - Mixed-case serif headline (*"Weaving timeless sibling harmonies into your sacred milestones"*).
   - Dual Call-to-Action buttons (`RESERVE YOUR DATE` and `LISTEN TO HARMONIES` with interactive play button).
   - Landscape ratio (`aspect-[16/10]`) acoustic duo feature photo with floating season booking overlay.

3. **Curated Musical Experiences Section (`Services.jsx`)**:
   - 2-Column section header with tagline and tailored arrangement description.
   - 3-Column interactive card grid featuring *Wedding Liturgies*, *Traditional Harana*, and *Corporate Soirées*.
   - Smooth image zoom hover effects and high-editorial typography.

4. **The Sibling Bond Section (`About.jsx`)**:
   - 3-Photo editorial collage layout displaying venue decor and duo performances.
   - Core brand narrative (*"Two voices, one shared heartbeat"*).
   - Clean metrics counter (*150+ Sacred Unions Celebrated*).
---

## 📁 Folder & Architecture Structure

```text
The Ramayan Sibs/
├── public/
│   ├── logo.svg                 # SVG Vector Logo
│   └── hero-duo.jpg             # Featured Duo Photography
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky Header & Mobile Drawer
│   │   └── Hero.jsx             # Editorial Hero Section
│   ├── index.css                # Tailwind Directives & Google Fonts
│   ├── App.jsx                  # Root Application Component
│   └── main.jsx                 # Entry Point
├── vite.config.js               # Tailwind CSS v4 Vite Config
└── README.md