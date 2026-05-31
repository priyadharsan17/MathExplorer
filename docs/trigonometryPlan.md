# Trigonometry — Exploration Plan

## Overview

The Trigonometry section maps the relationships between angles, triangles, and periodic waves. The centrepiece is an interactive Unit Circle that ties angles, coordinates, and all six trig functions together in one live visualisation.

---

## Libraries & Tools

| Purpose | Library |
|---|---|
| Formula rendering | [MathJax 3](https://www.mathjax.org/) (CDN) |
| Interactive graphs | Native **Canvas API** |
| Animations | `requestAnimationFrame` |
| Styling | Shared `css/style.css` + teal (`--trig-color`) accent |

---

## Topics & Status

| # | Topic | Page | Status | Interactive Feature |
|---|---|---|---|---|
| 1 | Angles & Radians | `pages/trigonometry/angles.html` | 🔲 Planned | Degree ↔ radian converter with arc visualiser |
| 2 | Unit Circle | `pages/trigonometry/unit-circle.html` | 🔲 Planned | **Draggable point** on circle — shows sin, cos, tan live |
| 3 | Sine & Cosine | `pages/trigonometry/sin-cos.html` | 🔲 Planned | Animated wave unrolled from unit circle |
| 4 | All Six Functions | `pages/trigonometry/trig-functions.html` | 🔲 Planned | Toggle each function's graph on/off |
| 5 | Trig Identities | `pages/trigonometry/identities.html` | 🔲 Planned | Identity proof explorer (geometric + algebraic) |
| 6 | Inverse Functions | `pages/trigonometry/inverse.html` | 🔲 Planned | Graph of arcsin / arccos / arctan with domain restriction |
| 7 | Graphs of Trig Functions | `pages/trigonometry/graphs.html` | 🔲 Planned | Amplitude, period, phase shift sliders (A sin(Bx + C) + D) |
| 8 | Law of Sines & Cosines | `pages/trigonometry/laws.html` | 🔲 Planned | Interactive triangle — drag vertices, see law applied |

---

## Page Structure (per topic)

```
1. Navbar  (shared)
2. Breadcrumb — Home > Trigonometry > Topic Name
3. Hero — topic title, symbol, one-line summary
4. Concept section — intuitive explanation with diagrams
5. Key Formulas — MathJax block formulas
6. Worked Examples — 2–3 step-by-step examples
7. Interactive Visualiser — Canvas-based with controls
8. Key Takeaways — bullet summary
9. Related Topics — links to adjacent pages
10. Footer (shared)
```

---

## Signature Visualisations

### Unit Circle (Priority Feature)
- Full interactive canvas: point draggable around the circle
- Angle shown in both degrees and radians
- Live readout: sin θ, cos θ, tan θ, csc θ, sec θ, cot θ
- Draw the right triangle inside the circle
- Highlight the reference angle
- Snap-to option for common angles (0°, 30°, 45°, 60°, 90° …)

### Sine Wave Unrolled
- Dual canvas: unit circle on left, wave on right
- Animated point travels around circle
- Corresponding point traces sine (and cosine) wave in real time
- Slider for animation speed

### A·sin(Bx + C) + D Explorer
- Four sliders: A (amplitude), B (frequency), C (phase), D (vertical shift)
- Live graph updates
- Labels showing period = 2π/B, amplitude = |A|, etc.

---

## Implementation Phases

### Phase 1 — Foundation
- [ ] Topic index page (`pages/trigonometry.html`) with all 8 topic cards
- [ ] Angles & Radians page — converter + arc visualiser

### Phase 2 — Core Visualisations (Priority)
- [ ] Unit Circle page — full interactive draggable explorer
- [ ] Sine & Cosine page — animated wave unrolled from circle

### Phase 3 — Complete Coverage
- [ ] All Six Functions, Trig Identities, Inverse Functions pages

### Phase 4 — Advanced
- [ ] A·sin(Bx + C) + D graph explorer
- [ ] Draggable triangle for Law of Sines & Cosines
- [ ] 3D unit sphere visualisation
