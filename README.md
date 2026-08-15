# 🎻 The Ramayan Sibs — Official Business Website

> **Soulful Acoustic Harmonies for Life's Most Unforgettable Moments**  
> A modern, editorial, and responsive web application built for *The Ramayan Sibs* (Acoustic Singer Duo for Weddings, Corporate, and Special Events).

---

## 🌟 Tech Stack & Environment

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: Google Fonts (*Cormorant Garamond*, *Cinzel*, *Plus Jakarta Sans*, *Alex Brush*)

---

## ✨ Features & Modules Implemented

1. **Editorial Responsive Navigation (`Navbar.jsx`)**:
   - Stacked luxury brand typography (`The Ramayan / Sibs | ESTABLISHED 2022`).
   - Clean tracking navigation links (`Home`, `Services`, `The Sibling Bond`, `Media Showcase`, `Booking Guide`).
   - Outlined `INQUIRE NOW` Call-To-Action button.
   - Fully responsive mobile menu drawer.

2. **Luxury Hero Section (`Hero.jsx`)**:
   - 2-Column responsive grid layout.
   - Custom SVG circular brand emblem logo & subtitle badge.
   - Mixed-case serif headline (*"Weaving timeless sibling harmonies into your sacred milestones"*).
   - Dual Call-to-Action buttons and landscape feature photo with booking overlay badge.

3. **Curated Musical Experiences (`Services.jsx`)**:
   - 2-Column header with `OUR OFFERINGS` tagline.
   - 3-Column interactive card grid featuring *Wedding Liturgies*, *Traditional Harana*, and *Corporate Soirées*.
   - Smooth image scale-hover effects (`group-hover:scale-105`).

4. **The Sibling Bond (`About.jsx`)**:
   - 3-Photo editorial collage layout displaying wedding venue decor and live performances.
   - Core brand narrative (*"Two voices, one shared heartbeat"*).
   - Clean metrics counter (*150+ Sacred Unions Celebrated*).

5. **Performance Gallery (`Gallery.jsx`)**:
   - Asymmetrical 4-photo staggered layout (Row 1: 5-col + 7-col, Row 2: 7-col + 5-col).
   - Interactive zoom hover effects on performance photos (*"Moments we've orchestrated"*).

6. **Stories of Shared Joy (`Testimonials.jsx`)**:
   - Centered `KIND WORDS` tagline header.
   - 2-Column review cards featuring client feedback, custom quotation icon, italic Garamond text, and venue details.

---

## 📁 Project Architecture & Folder Structure

```text
The Ramayan Sibs/
├── public/
│   ├── logo.svg                 # SVG Vector Brand Logo
│   └── hero.png                 # Featured Hero Duo Photo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky Header & Mobile Menu
│   │   ├── Hero.jsx             # Editorial Hero Section
│   │   ├── Services.jsx         # 3-Card Offerings Grid
│   │   ├── About.jsx            # 3-Photo Collage & Brand Story
│   │   ├── Gallery.jsx          # Asymmetrical Performance Gallery
│   │   └── Testimonials.jsx     # Client Reviews & Testimonials
│   ├── index.css                # Tailwind Directives & Custom Fonts
│   ├── App.jsx                  # Root Application Component
│   └── main.jsx                 # Application Entry Point
├── vite.config.js               # Tailwind CSS v4 Vite Config
└── README.md                    # Project Documentation