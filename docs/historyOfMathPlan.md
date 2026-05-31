# History of Mathematics — Exploration Plan

## Overview

The History of Mathematics section tells the human story behind the numbers — who invented each branch of mathematics, what real-world problem forced them to do so, and how those ideas spread and transformed the world. Each topic is a narrative-first page: a timeline, a portrait of the key thinker(s), the original problem that motivated the work, and a short "why it matters today" panel.

This section complements the technical Algebra, Calculus, and Trigonometry sections by giving every concept a face and a reason.

---

## Libraries & Tools

| Purpose | Library |
|---|---|
| Formula rendering | [MathJax 3](https://www.mathjax.org/) (CDN) |
| Timelines | CSS-only vertical/horizontal timeline (no JS library) |
| Interactive quotes | Expandable `<details>` cards, CSS transitions |
| Illustrations | SVG portraits / decorative glyphs inline |
| Styling | Shared `css/style.css` + new `css/history.css` (amber/gold accent `#f0b429`) |

---

## Topics & Status

| # | Topic | Page | Status | Key Figure(s) |
|---|---|---|---|---|
| 1 | The Origin of Numbers & Counting | `pages/history/counting.html` | 🔲 Planned | Prehistoric humans, Babylonians, Egyptians |
| 2 | Euclidean Geometry | `pages/history/euclidean-geometry.html` | 🔲 Planned | Euclid of Alexandria |
| 3 | Algebra — Al-Khwārizmī & the Art of Solving | `pages/history/algebra-history.html` | 🔲 Planned | Al-Khwārizmī, Diophantus |
| 4 | Trigonometry — Mapping the Heavens | `pages/history/trigonometry-history.html` | 🔲 Planned | Hipparchus, Aryabhata, Al-Battānī |
| 5 | The Birth of Zero | `pages/history/zero.html` | 🔲 Planned | Brahmagupta, Fibonacci (spread to Europe) |
| 6 | Calculus — Newton vs Leibniz | `pages/history/calculus-history.html` | 🔲 Planned | Isaac Newton, Gottfried Wilhelm Leibniz |
| 7 | Probability & Statistics | `pages/history/probability-history.html` | 🔲 Planned | Blaise Pascal, Pierre de Fermat, Carl Friedrich Gauss |
| 8 | Non-Euclidean Geometry & Curved Space | `pages/history/non-euclidean.html` | 🔲 Planned | Gauss, Bolyai, Lobachevsky, Riemann |
| 9 | Complex Numbers & Imaginary Roots | `pages/history/complex-numbers-history.html` | 🔲 Planned | Cardano, Euler, Gauss |
| 10 | Graph Theory & the Birth of Discrete Math | `pages/history/graph-theory-history.html` | 🔲 Planned | Leonhard Euler |
| 11 | The Foundations Crisis & Mathematical Logic | `pages/history/logic-foundations.html` | 🔲 Planned | Cantor, Hilbert, Gödel, Russell |
| 12 | Computers, Cryptography & Modern Math | `pages/history/modern-math.html` | 🔲 Planned | Turing, von Neumann, Lovelace |

---

## Topic Detail — Story Framework

Every topic page follows this narrative structure:

```
1. Navbar  (shared)
2. Breadcrumb — Home > History of Mathematics > Topic Name
3. Hero — topic name, era badge (e.g. "~300 BCE"), one-line tagline
4. "The Problem" — what real challenge forced this invention (before the math existed)
5. "The Person" — short biography card: born, died, where, motivation
6. "The Breakthrough" — the key idea in plain language + one essential formula/diagram
7. Timeline — visual milestones for this branch from first idea to modern form
8. "How It Spread" — which civilisations picked it up, translated it, extended it
9. "Why It Still Matters" — one modern application box (engineering, computing, science)
10. Quote — a famous direct quote from the inventor (if available)
11. Practice — 3–4 comprehension questions (multiple choice, same practice.js engine)
12. Related Topics — links to the maths topic page AND adjacent history pages
13. Footer  (shared)
```

---

## Individual Topic Plans

---

### 1. The Origin of Numbers & Counting

**Era:** ~35,000 BCE – 2,000 BCE

**The Problem:** Early humans needed to track animals hunted, days elapsed, and goods traded — long before writing existed.

**Key Insight:** A tally is just a one-to-one correspondence. Grouping tallies in fives or tens leads naturally to positional notation.

**Story Arc:**
- Lebombo Bone (~43,000 BCE): oldest known tally stick, found in Swaziland
- Ishango Bone (~20,000 BCE): evidence of counting by doubling and prime-like groupings
- Babylonian base-60 system (~3,000 BCE): why we still use 60 seconds and 360 degrees
- Egyptian unit fractions (~1,650 BCE) — Rhind Papyrus
- Evolution toward Hindu-Arabic numerals (the digits 0–9 used today)

**Interactive Element:** Side-by-side numeral converter — type a number, see it rendered in Egyptian hieroglyphic, Babylonian cuneiform, Roman, and modern Hindu-Arabic notation (SVG glyphs).

---

### 2. Euclidean Geometry

**Era:** ~300 BCE

**The Problem:** Ancient Greek and Egyptian surveyors needed to re-measure land after the Nile flooded each year, and philosophers demanded proofs — not just rules.

**Key Figure:** Euclid of Alexandria (~300 BCE) — wrote *Elements*, 13 books that codified all known geometry from five postulates alone.

**Story Arc:**
- Egyptian rope-stretchers and the 3-4-5 right triangle
- Thales and Pythagoras as precursors
- Euclid's five postulates — the revolutionary idea that all geometry follows from five assumptions
- Euclid's proof of the infinitude of primes (Book IX, Proposition 20)
- *Elements* as the second-most-printed book in history after the Bible
- The parallel postulate controversy that eventually produced Non-Euclidean Geometry

**Interactive Element:** "Build a Proof" — step through Euclid's proof that the angles of a triangle sum to 180°, one logical step at a time (animated Canvas diagram).

---

### 3. Algebra — Al-Khwārizmī & the Art of Solving

**Era:** ~820 CE

**The Problem:** Islamic scholars needed a systematic way to solve problems of inheritance (dividing estates according to Quranic law), land surveying, and trade calculations — problems that required finding an unknown quantity.

**Key Figure:** Muḥammad ibn Mūsā al-Khwārizmī (~780–850 CE) — mathematician in the House of Wisdom, Baghdad. His book *Al-Kitāb al-mukhtaṣar fī ḥisāb al-jabr wal-muqābala* gave us the word **algebra** (from *al-jabr*) and his name gave us the word **algorithm**.

**Story Arc:**
- Diophantus of Alexandria (~250 CE): "father of algebra", syncopated notation, *Arithmetica*
- The House of Wisdom — the greatest intellectual centre of the 9th century
- Al-Khwārizmī's two operations: *al-jabr* (restoration) and *al-muqābala* (balancing)
- Geometric proofs of quadratic solutions — completing the square drawn as a literal square
- Transmission to Europe: Fibonacci's *Liber Abaci* (1202), then Cardano's *Ars Magna* (1545)
- Symbolic algebra: Viète (1591) introduces letters; Descartes standardises x, y, z (1637)

**Interactive Element:** Geometric "completing the square" animation — watch the algebraic steps correspond to rearranging area tiles on a canvas.

---

### 4. Trigonometry — Mapping the Heavens

**Era:** ~150 BCE – 600 CE

**The Problem:** Astronomers needed to predict planetary positions, calculate the size of the Earth, and navigate by the stars. All of this required relating angles to distances — with no pocket calculator.

**Key Figures:**
- **Hipparchus of Nicaea** (~150 BCE) — compiled the first trigonometric table (chords, not sines)
- **Ptolemy** (~150 CE) — *Almagest*, extended Hipparchus; chord table to 0.5° precision
- **Aryabhata** (476–550 CE) — introduced the *sine* (jyā) and *cosine* (kojyā); half-chord instead of full chord
- **Al-Battānī** (~858–929 CE) — introduced tangent and cotangent; improved Ptolemy's tables

**Story Arc:**
- The chord vs. sine distinction — why half-chords are more natural
- Aryabhata's sine table in *Aryabhatiya* (499 CE)
- Islamic scholars transmit and extend Greek and Indian work
- Regiomontanus writes the first European trig textbook (1464)
- Napier's logarithms (1614) transform trig computation

**Interactive Element:** Animated chord-to-sine diagram — shows the geometric relationship between Hipparchus's chord definition and the modern sine definition as the radius shrinks.

---

### 5. The Birth of Zero

**Era:** ~628 CE (formal treatment), ~300 BCE (placeholder use)

**The Problem:** Positional number systems (Babylonian, Indian) required a symbol for an empty place-value column. More profoundly: mathematicians needed zero as an actual *number* — one that could be added, subtracted, and defined in arithmetic.

**Key Figure:** **Brahmagupta** (598–668 CE) — Indian mathematician who in *Brāhmasphuṭasiddhānta* (628 CE) gave the first formal rules for arithmetic with zero: \(a + 0 = a\), \(a - 0 = a\), \(a \times 0 = 0\). He also attempted \(0 \div 0 = 0\) (later corrected).

**Story Arc:**
- Babylonian placeholder zero (~300 BCE): a gap, not a number
- Mayan zero (~350 CE): independently invented, used in calendar calculations
- Brahmagupta's arithmetic of zero as a number in its own right
- Al-Khwārizmī transmits the Indian numeral system (including zero) westward
- Fibonacci brings Hindu-Arabic numerals (with zero) to Europe in *Liber Abaci* (1202)
- The Church's resistance: "infidel numbers" and the banning of zero in Florence (1299)
- Zero in calculus: limits approaching zero, the concept of infinitesimals

**Interactive Element:** Place-value explorer — build the same number in Babylonian, Mayan, and Hindu-Arabic systems side by side; highlight where zero appears in each.

---

### 6. Calculus — Newton vs Leibniz

**Era:** 1665–1684 CE

**The Problem (Newton):** How do you calculate the instantaneous velocity of a cannonball at a single moment in time? How do you find the maximum range of a projectile, or describe how planets orbit under gravity?

**The Problem (Leibniz):** How do you find the area under an arbitrary curve, and how does that relate to the slope of the curve?

**Key Figures:**
- **Isaac Newton** (1643–1727) — invented *fluxions* (his term for derivatives) during the plague years 1665–66; applied calculus to derive his law of universal gravitation
- **Gottfried Wilhelm Leibniz** (1646–1716) — independently invented calculus ~1675; introduced the notation \(\frac{dy}{dx}\) and \(\int\) that we still use today

**Story Arc:**
- Ancient precursors: Archimedes' method of exhaustion (~250 BCE) for areas
- Kepler's area law (1609) — forerunner of integration
- The plague years: Newton isolated at Woolsthorpe Manor, 1665–66
- Leibniz's notation breakthrough — why \(\frac{dy}{dx}\) is more useful than Newton's dot notation
- The priority dispute (1699–1716): the Royal Society controversy, nationalism vs. mathematics
- The reconciliation: both inventors, different approaches, same mathematics
- Impact: Bernoulli brothers, Euler, and the explosive growth of 18th-century physics

**Interactive Element:** Side-by-side notation comparator — the same calculus problem (find the max of a parabola) solved once in Newton's fluxion notation and once in Leibniz's notation.

---

### 7. Probability & Statistics

**Era:** 1654 CE (formal probability), ~1800 CE (statistics)

**The Problem:** A French nobleman, the Chevalier de Méré, was losing money at dice and asked Blaise Pascal why. Their exchange with Fermat produced the foundations of probability theory.

**Key Figures:**
- **Blaise Pascal** (1623–1662) & **Pierre de Fermat** (1607–1665) — the famous 1654 correspondence; Pascal's Triangle; the concept of expected value
- **Jacob Bernoulli** (1655–1705) — Law of Large Numbers (*Ars Conjectandi*, posthumous 1713)
- **Abraham de Moivre** (1667–1754) — the normal distribution, forerunner of the bell curve
- **Carl Friedrich Gauss** (1777–1855) — least squares, Gaussian distribution, error analysis
- **Florence Nightingale** (1820–1910) — polar area chart, using statistics to save lives in the Crimea

**Story Arc:**
- The gambling problem that started it all
- Pascal's Triangle and the connection to combinations
- From gambling to insurance: life tables, annuities
- Gauss fitting orbits of asteroids — least squares born from astronomy
- Nightingale's visualisations — the first great use of statistics to change public policy
- Fisher, hypothesis testing, and 20th-century statistics

**Interactive Element:** Dice probability simulator — roll N dice, watch the frequency histogram build toward the normal distribution as N increases (Canvas animation).

---

### 8. Non-Euclidean Geometry & Curved Space

**Era:** 1830s CE

**The Problem:** For 2,000 years mathematicians tried to *prove* Euclid's 5th postulate (the parallel postulate) from the other four, suspecting it wasn't truly independent. When they failed, they instead assumed it was *false* — and found a perfectly consistent geometry.

**Key Figures:**
- **Carl Friedrich Gauss** (~1816) — discovered non-Euclidean geometry privately; too cautious to publish
- **János Bolyai** (1802–1860) — published hyperbolic geometry (1832), declaring he had "created a new universe from nothing"
- **Nikolai Lobachevsky** (1792–1856) — published independently (1830); hyperbolic geometry
- **Bernhard Riemann** (1826–1866) — generalised to *n* dimensions; spherical geometry; the geometry Einstein would use

**Story Arc:**
- 2,000 years of failed proofs of the parallel postulate
- The realisation: the 5th postulate is *independent* — you can deny it and still have geometry
- Two types of non-Euclidean geometry: hyperbolic (saddle-shaped) and elliptic (sphere-like)
- Riemann's 1854 lecture — the most consequential lecture in the history of mathematics
- Einstein's General Relativity (1915): spacetime is a Riemannian manifold; gravity is curvature

**Interactive Element:** Parallel lines on three surfaces — toggle between flat (Euclidean), spherical, and hyperbolic; watch two parallel lines that converge, diverge, or stay parallel depending on curvature.

---

### 9. Complex Numbers & Imaginary Roots

**Era:** 1545 CE

**The Problem:** Solving cubic equations sometimes requires taking the square root of a negative number — even when the final answer is real. Italian algebraists couldn't avoid this awkward intermediate step.

**Key Figures:**
- **Gerolamo Cardano** (1501–1576) — published the cubic formula in *Ars Magna* (1545); called square roots of negatives "sophistic" but used them anyway
- **Rafael Bombelli** (1526–1572) — established rules for arithmetic with imaginaries
- **René Descartes** (1596–1650) — coined the dismissive term *imaginary number* (it stuck)
- **Leonhard Euler** (1707–1783) — introduced *i* for \(\sqrt{-1}\); wrote \(e^{i\pi} + 1 = 0\)
- **Carl Friedrich Gauss** (1777–1855) — proved the Fundamental Theorem of Algebra; gave complex numbers geometric meaning as the complex plane

**Story Arc:**
- Cardano's cubic and the unavoidable intermediate imaginaries
- Bombelli's bold arithmetic: \(i \times i = -1\)
- The complex plane: Argand (1806) and Gauss visualise complex numbers as 2D vectors
- Euler's identity — the most beautiful equation in mathematics
- Applications: AC electrical engineering (Steinmetz, 1893), quantum mechanics (wave functions)

**Interactive Element:** Complex plane explorer — plot a complex number as a vector, multiply it by \(i\) and watch it rotate 90°; animate Euler's formula \(e^{i\theta}\) tracing the unit circle.

---

### 10. Graph Theory & the Birth of Discrete Math

**Era:** 1736 CE

**The Problem:** The citizens of Königsberg (modern Kaliningrad) wondered whether it was possible to walk through the city crossing each of its seven bridges exactly once and return to the start.

**Key Figure:** **Leonhard Euler** (1707–1783) — proved it was *impossible*, and in doing so invented graph theory. His 1736 paper *Solutio problematis ad geometriam situs pertinentis* introduced the concept of a graph (vertices and edges) and the notion of an Eulerian path.

**Story Arc:**
- The Seven Bridges of Königsberg — the problem and the city
- Euler's insight: abstract away the land masses into vertices; bridges into edges
- The Euler characteristic \(V - E + F = 2\) (for connected planar graphs)
- Four colour theorem (posed 1852, proved 1976 by computer)
- From puzzles to power grids: network flow, routing algorithms, the internet
- Erdős and the explosion of 20th-century combinatorics

**Interactive Element:** Königsberg bridge explorer — interactive graph of the original seven bridges; click to trace a path; the tool tells you if you've repeated a bridge or achieved an Eulerian circuit (would require adding/removing an edge).

---

### 11. The Foundations Crisis & Mathematical Logic

**Era:** 1870s–1930s CE

**The Problem:** As mathematics grew more abstract, paradoxes emerged. Georg Cantor showed that some infinities are larger than others — a claim so disturbing it drove him to mental illness and provoked furious opposition. Then Bertrand Russell found a fatal contradiction in the very foundations of set theory.

**Key Figures:**
- **Georg Cantor** (1845–1918) — invented set theory; proved \(|\mathbb{R}| > |\mathbb{N}|\) via the diagonal argument; described different "sizes" of infinity (ℵ₀, ℵ₁, …)
- **Bertrand Russell** (1872–1970) — Russell's Paradox (1901): "the set of all sets that don't contain themselves"
- **David Hilbert** (1862–1943) — proposed the Hilbert Programme: formalise all mathematics; prove it consistent and complete
- **Kurt Gödel** (1906–1978) — Incompleteness Theorems (1931): *any* consistent formal system powerful enough to describe arithmetic contains true statements it cannot prove

**Story Arc:**
- Cantor's diagonal argument — elegant, simple, world-changing
- The paradoxes: Russell's, Burali-Forti's
- Hilbert's optimism and his famous 23 problems (1900)
- Gödel's bombshell: mathematics cannot fully know itself
- Turing's Halting Problem (1936) as a computational echo of Gödel
- The legacy: modern logic, type theory, proof assistants (Lean, Coq)

**Interactive Element:** Cantor's diagonal argument, step by step — animated visualisation showing how to construct a real number not in any countable list.

---

### 12. Computers, Cryptography & Modern Math

**Era:** 1840s CE – present

**The Problem:** As science demanded ever more calculation — astronomical tables, ballistics, codebreaking in wartime — human "computers" became a bottleneck. Could a machine calculate?

**Key Figures:**
- **Ada Lovelace** (1815–1852) — wrote the first algorithm intended for a machine (Babbage's Analytical Engine, 1843)
- **Charles Babbage** (1791–1871) — designed the Difference Engine and Analytical Engine
- **Alan Turing** (1912–1954) — formalised the concept of computation (Turing Machine, 1936); broke the Enigma cipher; proposed the Turing Test
- **John von Neumann** (1903–1957) — von Neumann architecture: the stored-program computer
- **Claude Shannon** (1916–2001) — information theory (1948); a bit is a mathematical unit of information

**Story Arc:**
- Babbage's unrealised dream — a mechanical computer with 25,000 parts
- Lovelace's vision: the machine could do anything that could be expressed as operations on symbols
- WWII codebreaking: Bletchley Park, Enigma, and the birth of the computer
- Von Neumann architecture and the modern CPU
- Shannon's *A Mathematical Theory of Communication* — the foundation of the internet, compression, and cryptography
- Public-key cryptography (RSA, 1977): number theory in everyday life

**Interactive Element:** Caesar cipher → RSA walkthrough — interactive panel showing simple substitution cipher, then the modular arithmetic behind RSA key generation (small numbers so the maths is visible).

---

## Phases

### Phase 1 — Category Shell & First Three Topics ✅ COMPLETE
- [x] Create `pages/history.html` (category index, 12 topic cards, amber/gold accent)
- [x] Create `css/history.css` (timeline component, portrait card, era badge, quote block)
- [x] Topic 6: Calculus — Newton vs Leibniz (`pages/history/calculus-history.html`)
- [x] Topic 3: Algebra — Al-Khwārizmī (`pages/history/algebra-history.html`)
- [x] Topic 5: The Birth of Zero (`pages/history/zero.html`)
- [x] Add `--history-color` / `--history-glow` / `.card-history` to `css/style.css`
- [x] Add History card + nav link to `index.html`
- [x] Add History nav link to `pages/algebra.html`, `calculus.html`, `trigonometry.html`
- [x] Add History nav link to all 8 `pages/algebra/*.html` topic pages

### Phase 2 — Ancient Origins ✅ COMPLETE
- [x] Topic 1: The Origin of Numbers & Counting (`pages/history/counting.html`)
- [x] Topic 2: Euclidean Geometry (`pages/history/euclidean-geometry.html`)
- [x] Topic 4: Trigonometry — Mapping the Heavens (`pages/history/trigonometry-history.html`)

### Phase 3 — Modern Branches ✅ COMPLETE
- [x] Topic 7: Probability & Statistics (`pages/history/probability-history.html`)
- [x] Topic 8: Non-Euclidean Geometry (`pages/history/non-euclidean.html`)
- [x] Topic 9: Complex Numbers (`pages/history/complex-numbers-history.html`)
- [x] Topic 10: Graph Theory (`pages/history/graph-theory-history.html`)

### Phase 4 — Foundations & Computing ✅ COMPLETE
- [x] Topic 11: The Foundations Crisis (`pages/history/logic-foundations.html`)
- [x] Topic 12: Computers, Cryptography & Modern Math (`pages/history/modern-math.html`)

### Phase 5 — Polish ✅ COMPLETE
- [x] Practice questions via `practice.js` on all 12 history pages
- [x] Progress tracking via `progress.js` on history category page
- [x] "Did you know?" random-fact panel on the category index
- [x] Cross-links between history pages and the corresponding maths topic pages (all 8 algebra topic pages link to algebra-history.html)

---

## Design Notes

- **Accent colour:** Amber/gold `#f0b429` (distinct from blue=algebra, purple=calculus, teal=trig)
- **Era badges:** Pill-shaped tag showing century/era (e.g. `~300 BCE`, `1654 CE`) — amber background, positioned on the hero card
- **Portrait cards:** Styled `<figure>` with name, dates, nationality — uses a decorative SVG silhouette if no illustration is available
- **Timeline component:** Vertical CSS timeline with alternating left/right cards for desktop; single-column for mobile
- **Quote block:** Styled `<blockquote>` with large opening quote mark, italic text, attribution line
- **"The Problem" card:** Distinct callout box — sets the scene before any mathematics appears; intentionally written for a non-mathematician
- **Cross-category links:** Each history page links to the corresponding live maths topic (e.g. History of Algebra → Algebra → Linear Equations)
