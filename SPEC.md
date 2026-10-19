# Technical Specification & Coding Guidelines (Portfolio Jan Furrer)

## 1. Strict Rule: ZERO COMMENTS

- Do NOT write any comments (`<!-- -->`, `/* */`, or `//`) anywhere in the HTML, CSS, or JavaScript files.
- The developer will manually audit, reverse-engineer, and document the entire codebase afterward.

## 2. Tech Stack & Modern Best Practices

- Use semantic Vanilla HTML5, modern native CSS3, and Vanilla ES6+ JavaScript.
- Do NOT use external CSS frameworks (no Tailwind, no Bootstrap) or JS libraries.
- Write clean, modern "Best Practice" CSS that serves as an architectural reference:
  - Use CSS Custom Properties (`:root`) mapped strictly from `design-tokens.tokens.json`.
  - Use CSS Grid (`grid-template-columns`, `minmax`, `auto-fit`) for macro layouts and 3-column card sections.
  - Use Flexbox for micro-layouts, badges, and internal card alignment (e.g., pushing card footers to the bottom via `margin-top: auto`).
  - Use CSS pseudo-elements (`::before`, `::after`) for decorative elements like the `//` section prefixes, dashed header lines, and the turquoise flowchart arrows (`#00e0e0`), keeping the HTML DOM free of purely decorative tags.
  - Use modern CSS transforms (`skewX`) with counter-skewed inner text for the parallelogram node ("Erfolgreicher Lehrabschluss").

## 3. File Architecture

- `index.html`: Strictly semantic structure (`<header>`, `<aside>`, `<main>`, `<section>`, `<article>`, `<ol>` for the career timeline, `<footer>`).
- `css/variables.css`: All tokens plus semantic variables for Tech Badges and Status Badges.
- `css/base.css`: Modern CSS Reset, root typography settings (`Roboto` and `Roboto Mono`), and global defaults.
- `css/layout.css`: Sticky top navigation, 2-column sidebar-to-main grid layout, and responsive breakpoints.
- `css/components.css`: Modular, reusable classes for Buttons, Timeline Flowchart nodes, Skill/Project Cards, Status Pills, and Tech Badges.
- `js/main.js`: Clean ES6+ script for the `janf_` typewriter header animation and smooth scroll / active navigation state.
