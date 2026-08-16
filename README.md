# 🎻 The Ramayan Sibs — Official Business Website

> **Soulful Acoustic Harmonies for Life's Most Unforgettable Moments**  
> A modern, editorial, and responsive web application built for *The Ramayan Sibs* (Acoustic Singer Duo for Weddings, Corporate, and Special Events).

---

## 🌟 Tech Stack & Environment

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Interactive FX**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
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

7. **Pricing & Performance Curation (`BookingGuide.jsx`)**:
   - 3-Tier package cards (*The Intimate Harana*, *The Sacred Union*, *The Grand Soirée*).
   - Highlighted warm gold border frame for *The Sacred Union* package with check icons.

8. **Inquire About Your Date (`Contact.jsx`)**:
   - Location & direct email details panel.
   - Interactive booking form with date auto-formatting, event selection, and celebratory confetti upon submission.

9. **Architectural Footer (`Footer.jsx`)**:
   - Deep charcoal theme (`#161514`) with a subtle 36px architectural grid pattern background overlay.
   - Brand story, navigation links, social links, and smooth Back-to-Top scroll button.

---

## 📁 Final Project Architecture & Folder Structure

```text
The Ramayan Sibs/
├── public/
│   ├── logo.svg                 # SVG Vector Brand Logo
│   └── hero.png                 # Featured Performance Photo
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky Header & Mobile Menu
│   │   ├── Hero.jsx             # Editorial Hero Banner
│   │   ├── Services.jsx         # 3-Card Offerings Grid
│   │   ├── About.jsx            # 3-Photo Collage & Brand Story
│   │   ├── Gallery.jsx          # Asymmetrical Performance Gallery
│   │   ├── Testimonials.jsx     # Client Reviews & Testimonials
│   │   ├── BookingGuide.jsx     # 3-Tier Pricing Packages
│   │   ├── Contact.jsx          # Interactive Booking Form & Confetti
│   │   └── Footer.jsx           # Grid Texture Footer & Back-to-Top
│   ├── index.css                # Tailwind Directives & Custom Fonts
│   ├── App.jsx                  # Root Application Assembly
│   └── main.jsx                 # Application Entry Point
├── vite.config.js               # Tailwind CSS v4 Vite Config
└── README.md                    # Project Documentation