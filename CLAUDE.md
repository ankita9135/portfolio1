# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML portfolio website using vanilla HTML, CSS, and JavaScript. It's designed to be hosted on GitHub Pages with no build process required.

## File Structure

```
portfolio1/
├── index.html       # Main portfolio page
├── styles.css       # All styling
├── script.js        # JavaScript for interactivity
├── .gitignore       # Git ignore rules
└── CLAUDE.md        # This file
```

## Development

**No installation or build process needed!**

Simply open `index.html` in a browser:
- Double-click the file, or
- Right-click → Open with → Browser

To see changes:
1. Edit the files
2. Save
3. Refresh your browser

## Deployment to GitHub Pages

This site is ready for GitHub Pages:

1. Push code to GitHub
2. Go to repository Settings → Pages
3. Select branch: `main`, folder: `/ (root)`
4. Your site will be live at: `https://ankita9135.github.io/portfolio1/`

## Portfolio Structure

The `index.html` contains these sections:
1. **Hero** - Name, tagline, and CTA buttons
2. **Projects** - Featured project cards with GitHub links
3. **Case Studies** - Detailed project descriptions
4. **Skills** - Technical skills organized by category
5. **Education** - Academic background
6. **Work & Certifications** - Professional experience and certifications
7. **Contact** - Email, phone, location, and social links

## Key Features

- **Smooth scrolling** - Anchor links smoothly scroll to sections
- **Responsive design** - Mobile-friendly layout
- **Font Awesome icons** - Loaded from CDN
- **Interactive effects** - Hover states and animations

## Styling System

- Uses CSS custom properties (variables) for consistent theming
- Pink accent color scheme (`#e91e8c`)
- Responsive breakpoints handled with media queries
- Animations for fade-in effects and hover states

## Important Notes

- All styles are in `styles.css` - no external CSS frameworks
- All JavaScript is in `script.js` - no dependencies
- Font Awesome loaded from CDN (no local icon files needed)
- Resume link in hero section points to `resume.pdf` (add this file if needed)
