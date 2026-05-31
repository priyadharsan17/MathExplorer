# Algebra — Exploration Plan

## Overview

The Algebra section covers the foundational language of mathematics: variables, equations, functions, and structural relationships. Each topic is presented with a concept explanation, key formulas (rendered via MathJax), worked examples, and an interactive visualiser built with the Canvas API.

---

## Libraries & Tools

| Purpose | Library |
|---|---|
| Formula rendering | [MathJax 3](https://www.mathjax.org/) (CDN, no build step) |
| Interactive graphs | Native **Canvas API** (no external dependency) |
| Styling | Shared `css/style.css` + per-section accent colours |

---

## Topics & Status

| # | Topic | Page | Status | Interactive Feature |
|---|---|---|---|---|
| 1 | Linear Equations | `pages/algebra/linear-equations.html` | ✅ Done | Line plotter — sliders for slope (m) & intercept (b) |
| 2 | Quadratic Equations | `pages/algebra/quadratic-equations.html` | ✅ Done | Parabola plotter — sliders for a, b, c; shows roots & discriminant |
| 3 | Polynomials | `pages/algebra/polynomials.html` | ✅ Done | Polynomial curve plotter with degree selector (2/3/4) |
| 4 | Factoring | `pages/algebra/factoring.html` | ✅ Done | Step-by-step factoring of ax² + bx + c (AC method, special forms) |
| 5 | Functions & Graphs | `pages/algebra/functions.html` | ✅ Done | 6 function families with param sliders, domain/range info |
| 6 | Systems of Equations | `pages/algebra/systems.html` | ✅ Done | Two-line plotter with colour-coded unique/parallel/identical result |
| 7 | Inequalities | `pages/algebra/inequalities.html` | ✅ Done | Region shading (linear & quadratic) + number line + interval notation |
| 8 | Matrices | `pages/algebra/matrices.html` | ✅ Done | Multiplication, determinant, inverse calculators + transformation visualiser |

---

## Page Structure (per topic)

Each topic page follows this layout:

```
1. Navbar  (shared)
2. Breadcrumb — Home > Algebra > Topic Name
3. Hero — topic title, symbol, one-line summary
4. Concept section — "What is it?" plain-language explanation
5. Key Formulas — MathJax-rendered block formulas
6. Worked Examples — 2–3 step-by-step examples with MathJax
7. Interactive Visualiser — Canvas-based, labelled axes, controls (sliders/inputs)
8. Key Takeaways — bullet summary
9. Related Topics — links to adjacent pages
10. Footer (shared)
```

---

## Interactive Visualiser Spec (Canvas)

All graphs share a common canvas helper (`js/graph.js`, Phase 2):

- **Coordinate axes** with tick marks and labels
- **Grid lines** (subtle, matches dark theme)
- **Responsive** — canvas resizes on window resize
- **Controls** — HTML range sliders + number inputs, wired via `input` events
- **Live equation display** — updates as sliders move

---

## Implementation Phases

### Phase 1 — Foundation (Current)
- [x] Topic index page (`pages/algebra.html`) with all 8 topic cards
- [x] Linear Equations page — full content + Canvas line plotter
- [x] Quadratic Equations page — full content + Canvas parabola plotter

### Phase 2 — Core Topics ✅ Complete
- [x] Shared Canvas graph helper (`js/graph.js`)
- [x] Polynomials page — degree 2/3/4 selector, coefficient sliders, end behaviour
- [x] Factoring page — step-by-step GCF / simple / AC method / special forms + mini graph
- [x] Functions & Graphs page — Linear, Quadratic, Absolute Value, Square Root, Cubic, Reciprocal families

### Phase 3 — Advanced Topics ✅ Complete
- [x] Systems of Equations — two-line graph, intersection detection, result banner (unique/parallel/identical)
- [x] Inequalities — linear & quadratic modes, region fill, number line, interval notation
- [x] Matrices — A×B calculator, det(A), A⁻¹, transformation visualiser with presets (rotate/scale/reflect/shear)

### Phase 4 — Polish
- [ ] Practice problems with answer reveal
- [ ] Progress tracking (localStorage)
- [ ] Keyboard accessibility for all sliders
