# WDD 331R Portfolio

**Student:** Andrew Lawrence  
**Semester:** Fall 2026  
**Live Site:** [View Site](https://your-github-username.github.io/your-repository-name/)

## About

This repository is my portfolio for WDD 331R: Advanced CSS.
It now includes a full token-driven design system with light/dark/system theming using `oklch()` seeds, `light-dark()` semantic tokens, and a JavaScript-driven theme persistence layer.

All color values in the site are derived from semantic tokens in `css/tokens/colors.css`.

## Pages

- [Home](index.html)
- [Custom Properties and Nesting](unit1/custom-properties/index.html)
- [Layered Components](unit2/layered-components/index.html)
- [Visual Effects](unit3/visual-effects/index.html)
- [Editorial Layout](unit4/grid-layouts/editorial.html)
- [Card Grid](unit4/grid-layouts/cards.html)
- [Container Query Demo](unit4/advanced/container-demo.html)
- [Sticky Demo](unit4/advanced/sticky-demo.html)
- [Resume](unit5/resume.html)
- [Contact](unit5/contact.html)
- [Motion & Transitions](unit6/motion/index.html)

### Typography System

- Modular scale (major third ratio 1.25)
- Fluid typography using clamp()
- Semantic role-based font tokens
- Custom Inter font for headings
- System font fallback for body text
- Fully responsive hierarchy across viewport sizes

SVG Icons — Added a reusable inline Lucide SVG sprite with <symbol> and <use> for contact information, external links, and accessible icon-only controls. Icons inherit color with currentColor, adapt automatically to light and dark themes, and follow recommended SVG accessibility patterns.