# Calculus — Exploration Plan

## Overview

The Calculus section explores the mathematics of change and accumulation — from the intuition of limits through derivatives and integrals to infinite series. Visualisations focus on making abstract concepts tangible: watching a secant line become a tangent, or seeing area accumulate under a curve.

---

## Libraries & Tools

| Purpose | Library |
|---|---|
| Formula rendering | [MathJax 3](https://www.mathjax.org/) (CDN) |
| Interactive graphs | Native **Canvas API** |
| Animations | `requestAnimationFrame` (no extra library) |
| Styling | Shared `css/style.css` + purple (`--calculus-color`) accent |

---

## Topics & Status

| # | Topic | Page | Status | Interactive Feature |
|---|---|---|---|---|
| 1 | Limits | `pages/calculus/limits.html` | 🔲 Planned | Table of values + graph zooming toward a point |
| 2 | Continuity | `pages/calculus/continuity.html` | 🔲 Planned | Toggle discontinuity types on a graph |
| 3 | Derivatives (Concept) | `pages/calculus/derivatives.html` | 🔲 Planned | Secant → tangent animation (h → 0 slider) |
| 4 | Differentiation Rules | `pages/calculus/diff-rules.html` | 🔲 Planned | Rule selector with formula + worked example |
| 5 | Applications of Derivatives | `pages/calculus/diff-applications.html` | 🔲 Planned | Max/min finder on a curve |
| 6 | Definite Integrals | `pages/calculus/definite-integrals.html` | 🔲 Planned | Riemann sum visualiser (n-rectangles slider) |
| 7 | Indefinite Integrals | `pages/calculus/indefinite-integrals.html` | 🔲 Planned | Antiderivative formula builder |
| 8 | Fundamental Theorem | `pages/calculus/ftc.html` | 🔲 Planned | Dual panel: derivative ↔ integral of same function |
| 9 | Series & Sequences | `pages/calculus/series.html` | 🔲 Planned | Partial sum convergence animation |

---

## Page Structure (per topic)

```
1. Navbar  (shared)
2. Breadcrumb — Home > Calculus > Topic Name
3. Hero — topic title, symbol, one-line summary
4. Intuition section — "Why does this matter?" real-world motivation
5. Concept section — formal definition, plain-language breakdown
6. Key Formulas — MathJax block formulas
7. Worked Examples — 2–3 step-by-step examples
8. Interactive Visualiser — Canvas animation with controls
9. Key Takeaways — bullet summary
10. Related Topics — links to adjacent pages
11. Footer (shared)
```

---

## Signature Visualisations

### Derivative: Secant → Tangent
- Plot f(x) = x² (and later any function via input)
- Draw secant line from (x₀, f(x₀)) to (x₀+h, f(x₀+h))
- Slider for h from 2.0 → 0.01
- As h → 0 the secant animates into the tangent line
- Display slope value updating in real time

### Definite Integral: Riemann Sum
- Plot user-selectable function over [a, b]
- Slider for n (number of rectangles): 1 → 100
- Shade rectangles (left, right, or midpoint rule toggle)
- Display approximate area value updating live

### Limits: Table + Graph
- Input a function and an x-value
- Show table of values approaching from left and right
- Highlight the limit point on the graph

---

## Implementation Phases

### Phase 1 — Foundation
- [ ] Topic index page (`pages/calculus.html`) with all 9 topic cards
- [ ] Limits page — table of values + graph approach

### Phase 2 — Core Visualisations
- [ ] Derivatives page — secant → tangent animation
- [ ] Definite Integrals page — Riemann sum slider

### Phase 3 — Complete Coverage
- [ ] Remaining topic pages (Continuity, Diff Rules, Applications, Indefinite Integrals, FTC)

### Phase 4 — Advanced
- [ ] Series convergence animation
- [ ] Custom function input for all visualisers
- [ ] Side-by-side derivative / integral view
