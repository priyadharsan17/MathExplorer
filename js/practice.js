/**
 * practice.js — Practice problems engine for MathExplorer
 *
 * Usage on a topic page:
 *   <section class="content-section" id="practice-section"></section>
 *   <script src="../../js/practice.js"></script>
 *   <script>Practice.render('linear-equations', 'practice-section');</script>
 */
const Practice = (function () {
  'use strict';

  // ── Question bank ──────────────────────────────────────────────────────────
  // Each question: { q, options: [{text, correct}], hint, explanation }
  const QUESTIONS = {
    'linear-equations': [
      {
        q: 'What is the slope of the line \\(y = -3x + 7\\)?',
        options: [
          { text: '7',  correct: false },
          { text: '-3', correct: true  },
          { text: '3',  correct: false },
          { text: '-7', correct: false },
        ],
        hint: 'In slope-intercept form \\(y = mx + b\\), the slope is the coefficient of \\(x\\).',
        explanation: 'The equation is already in \\(y = mx + b\\) form. The coefficient of \\(x\\) is \\(-3\\), so the slope \\(m = -3\\).',
      },
      {
        q: 'Solve for \\(x\\): \\(2x - 5 = 11\\)',
        options: [
          { text: '3',  correct: false },
          { text: '6',  correct: false },
          { text: '8',  correct: true  },
          { text: '-3', correct: false },
        ],
        hint: 'Add 5 to both sides first, then divide by 2.',
        explanation: '\\(2x - 5 = 11\\) → \\(2x = 16\\) → \\(x = 8\\).',
      },
      {
        q: 'Which form shows slope and y-intercept most directly?',
        options: [
          { text: 'Standard form \\(ax + by = c\\)',                correct: false },
          { text: 'Slope-intercept form \\(y = mx + b\\)',          correct: true  },
          { text: 'Point-slope form \\(y - y_1 = m(x - x_1)\\)',   correct: false },
          { text: 'Factored form',                                   correct: false },
        ],
        hint: 'Think about which form has \\(m\\) and \\(b\\) written explicitly.',
        explanation: 'Slope-intercept form \\(y = mx + b\\) directly shows \\(m\\) (slope) and \\(b\\) (y-intercept) as coefficients.',
      },
      {
        q: 'What is the x-intercept of \\(y = 4x - 8\\)?',
        options: [
          { text: '\\(x = -8\\)', correct: false },
          { text: '\\(x = 2\\)',  correct: true  },
          { text: '\\(x = 4\\)',  correct: false },
          { text: '\\(x = 8\\)',  correct: false },
        ],
        hint: 'Set \\(y = 0\\) and solve for \\(x\\).',
        explanation: 'Set \\(y = 0\\): \\(0 = 4x - 8\\) → \\(4x = 8\\) → \\(x = 2\\).',
      },
    ],

    'quadratic-equations': [
      {
        q: 'For \\(x^2 + 5x + 6 = 0\\), what are the roots?',
        options: [
          { text: '\\(x = 2, x = 3\\)',   correct: false },
          { text: '\\(x = -2, x = -3\\)', correct: true  },
          { text: '\\(x = 1, x = 6\\)',   correct: false },
          { text: '\\(x = -1, x = -6\\)', correct: false },
        ],
        hint: 'Factor the quadratic. Find \\(p, q\\) such that \\(pq = 6\\) and \\(p + q = 5\\).',
        explanation: '\\(x^2 + 5x + 6 = (x + 2)(x + 3)\\). Setting each factor to zero gives \\(x = -2\\) and \\(x = -3\\).',
      },
      {
        q: 'What does the discriminant \\(\\Delta = b^2 - 4ac\\) tell you?',
        options: [
          { text: 'The vertex of the parabola',                                     correct: false },
          { text: 'Whether the parabola opens up or down',                           correct: false },
          { text: 'The number and type of roots (real, repeated, or complex)',       correct: true  },
          { text: 'The y-intercept of the parabola',                                correct: false },
        ],
        hint: 'Consider what happens when \\(\\Delta > 0\\), \\(\\Delta = 0\\), or \\(\\Delta < 0\\).',
        explanation: '\\(\\Delta > 0\\): two distinct real roots. \\(\\Delta = 0\\): one repeated real root. \\(\\Delta < 0\\): no real roots (two complex roots).',
      },
      {
        q: 'Where is the vertex of \\(y = 2(x - 3)^2 + 1\\)?',
        options: [
          { text: '\\((-3, 1)\\)', correct: false },
          { text: '\\((3, 1)\\)',  correct: true  },
          { text: '\\((2, 1)\\)',  correct: false },
          { text: '\\((3, -1)\\)', correct: false },
        ],
        hint: 'In vertex form \\(a(x - h)^2 + k\\), the vertex is \\((h, k)\\).',
        explanation: 'The equation is in vertex form with \\(h = 3\\) and \\(k = 1\\). Vertex is \\((3, 1)\\).',
      },
      {
        q: 'Use the quadratic formula: solve \\(x^2 - 4x + 1 = 0\\)',
        options: [
          { text: '\\(x = 2 \\pm \\sqrt{3}\\)',  correct: true  },
          { text: '\\(x = 4 \\pm \\sqrt{3}\\)',  correct: false },
          { text: '\\(x = 2 \\pm \\sqrt{5}\\)',  correct: false },
          { text: '\\(x = -2 \\pm \\sqrt{3}\\)', correct: false },
        ],
        hint: 'Apply \\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\) with \\(a=1, b=-4, c=1\\).',
        explanation: '\\(\\Delta = 16 - 4 = 12\\). \\(x = \\frac{4 \\pm \\sqrt{12}}{2} = \\frac{4 \\pm 2\\sqrt{3}}{2} = 2 \\pm \\sqrt{3}\\).',
      },
    ],

    'polynomials': [
      {
        q: 'What is the degree of \\(4x^3 - 2x + 7\\)?',
        options: [
          { text: '1', correct: false },
          { text: '2', correct: false },
          { text: '3', correct: true  },
          { text: '7', correct: false },
        ],
        hint: 'The degree is the highest exponent of the variable.',
        explanation: 'The term with the highest exponent is \\(4x^3\\), so the degree is 3.',
      },
      {
        q: 'For a polynomial with positive leading coefficient and even degree, what is the end behaviour?',
        options: [
          { text: 'Falls left, rises right',  correct: false },
          { text: 'Rises left, falls right',  correct: false },
          { text: 'Falls both directions',    correct: false },
          { text: 'Rises both directions',    correct: true  },
        ],
        hint: 'Think about what \\(x^2\\) looks like as \\(x \\to \\pm\\infty\\).',
        explanation: 'Even degree and positive leading coefficient: as \\(x \\to \\pm\\infty\\), \\(y \\to +\\infty\\) — rises in both directions.',
      },
      {
        q: 'How many turning points can a degree-4 polynomial have at most?',
        options: [
          { text: '2', correct: false },
          { text: '3', correct: true  },
          { text: '4', correct: false },
          { text: '5', correct: false },
        ],
        hint: 'A degree-\\(n\\) polynomial has at most \\(n - 1\\) turning points.',
        explanation: 'A degree-\\(n\\) polynomial has at most \\(n - 1\\) turning points. For degree 4, that is \\(4 - 1 = 3\\).',
      },
      {
        q: 'What is the y-intercept of \\(f(x) = 3x^4 - x^2 + 5\\)?',
        options: [
          { text: '\\(-1\\)', correct: false },
          { text: '\\(3\\)',  correct: false },
          { text: '\\(5\\)',  correct: true  },
          { text: '\\(7\\)',  correct: false },
        ],
        hint: 'Substitute \\(x = 0\\) into the polynomial.',
        explanation: '\\(f(0) = 3(0) - 0 + 5 = 5\\). The y-intercept is always the constant term.',
      },
    ],

    'factoring': [
      {
        q: 'Factor completely: \\(x^2 - 9\\)',
        options: [
          { text: '\\((x - 9)(x + 1)\\)',  correct: false },
          { text: '\\((x - 3)^2\\)',        correct: false },
          { text: '\\((x + 3)(x - 3)\\)',  correct: true  },
          { text: '\\((x + 9)(x - 1)\\)',  correct: false },
        ],
        hint: 'This is a difference of squares: \\(a^2 - b^2 = (a+b)(a-b)\\).',
        explanation: '\\(x^2 - 9 = x^2 - 3^2 = (x + 3)(x - 3)\\).',
      },
      {
        q: 'Which pair \\((p, q)\\) factors \\(x^2 + 7x + 12\\)?',
        options: [
          { text: '\\(p = 4, q = 3\\)',   correct: true  },
          { text: '\\(p = 6, q = 2\\)',   correct: false },
          { text: '\\(p = -4, q = -3\\)', correct: false },
          { text: '\\(p = 12, q = 1\\)',  correct: false },
        ],
        hint: 'Find \\(p, q\\) with \\(pq = 12\\) and \\(p + q = 7\\).',
        explanation: '\\(4 \\times 3 = 12\\) and \\(4 + 3 = 7\\) ✓. So \\(x^2 + 7x + 12 = (x + 4)(x + 3)\\).',
      },
      {
        q: 'Recognise the pattern: \\(x^2 + 10x + 25\\)',
        options: [
          { text: 'Difference of squares',       correct: false },
          { text: 'Perfect square trinomial',    correct: true  },
          { text: 'Sum of cubes',                correct: false },
          { text: 'Irreducible over the reals',  correct: false },
        ],
        hint: 'Check if it equals \\((x + k)^2\\) for some \\(k\\).',
        explanation: '\\(x^2 + 10x + 25 = (x + 5)^2\\). Since \\(10 = 2 \\cdot 5\\) and \\(25 = 5^2\\), this is a perfect square trinomial.',
      },
      {
        q: 'What does the discriminant \\(b^2 - 4ac < 0\\) imply about factoring?',
        options: [
          { text: 'Two integer factor pairs exist',        correct: false },
          { text: 'The trinomial is a perfect square',    correct: false },
          { text: 'No real factors exist',                correct: true  },
          { text: 'The GCF is greater than 1',            correct: false },
        ],
        hint: 'The discriminant determines whether the parabola crosses the x-axis.',
        explanation: 'If \\(\\Delta < 0\\) the parabola never touches the x-axis — the quadratic has no real roots and cannot be factored over the reals.',
      },
    ],

    'functions': [
      {
        q: 'Which of these is NOT a function?',
        options: [
          { text: '\\(f(x) = x^2\\)',         correct: false },
          { text: '\\(y^2 = x\\) (full curve)', correct: true  },
          { text: '\\(f(x) = \\sqrt{x}\\)',    correct: false },
          { text: '\\(f(x) = |x|\\)',          correct: false },
        ],
        hint: 'Apply the vertical line test.',
        explanation: '\\(y^2 = x\\) gives two y-values for each positive \\(x\\) (e.g. \\(x = 4 \\Rightarrow y = \\pm 2\\)), failing the vertical line test.',
      },
      {
        q: 'What is the domain of \\(f(x) = \\sqrt{x - 4}\\)?',
        options: [
          { text: 'All reals',      correct: false },
          { text: '\\(x \\geq 4\\)', correct: true  },
          { text: '\\(x > 4\\)',    correct: false },
          { text: '\\(x \\leq 4\\)', correct: false },
        ],
        hint: 'The expression under a square root must be ≥ 0.',
        explanation: '\\(x - 4 \\geq 0 \\Rightarrow x \\geq 4\\). The domain is \\([4, +\\infty)\\).',
      },
      {
        q: 'Describe the transformation: \\(g(x) = f(x - 2) + 3\\)',
        options: [
          { text: 'Shift left 2, down 3',  correct: false },
          { text: 'Shift right 2, up 3',   correct: true  },
          { text: 'Shift left 2, up 3',    correct: false },
          { text: 'Shift right 2, down 3', correct: false },
        ],
        hint: 'Horizontal shifts are opposite the sign inside; vertical shifts follow the sign outside.',
        explanation: '\\(f(x - 2)\\) shifts right 2 (opposite of -2). \\(+3\\) shifts up 3.',
      },
      {
        q: 'What is the vertical asymptote of \\(f(x) = \\frac{1}{x - 5}\\)?',
        options: [
          { text: '\\(y = 5\\)',  correct: false },
          { text: '\\(x = 0\\)',  correct: false },
          { text: '\\(x = 5\\)',  correct: true  },
          { text: '\\(x = -5\\)', correct: false },
        ],
        hint: 'A vertical asymptote occurs where the denominator equals zero.',
        explanation: 'Setting \\(x - 5 = 0\\) gives \\(x = 5\\). The function is undefined (asymptote) there.',
      },
    ],

    'systems': [
      {
        q: 'When does a system of two linear equations have no solution?',
        options: [
          { text: 'When the lines have the same slope and different intercepts', correct: true  },
          { text: 'When the lines are identical',                                correct: false },
          { text: 'When the lines intersect at the origin',                     correct: false },
          { text: 'When the coefficients are all equal',                        correct: false },
        ],
        hint: 'Think geometrically — what does "no solution" mean for two lines?',
        explanation: 'Parallel lines (same slope, different y-intercepts) never intersect, so the system has no solution.',
      },
      {
        q: 'Solve by substitution: \\(y = x + 2\\) and \\(y = 3x - 4\\)',
        options: [
          { text: '\\((2, 4)\\)',  correct: false },
          { text: '\\((3, 5)\\)',  correct: true  },
          { text: '\\((1, 3)\\)',  correct: false },
          { text: '\\((4, 8)\\)',  correct: false },
        ],
        hint: 'Set both expressions equal: \\(x + 2 = 3x - 4\\).',
        explanation: '\\(x + 2 = 3x - 4 \\Rightarrow 6 = 2x \\Rightarrow x = 3\\). Then \\(y = 3 + 2 = 5\\).',
      },
      {
        q: 'What is the determinant condition for a unique solution in a 2×2 system?',
        options: [
          { text: '\\(D = 0\\)',  correct: false },
          { text: '\\(D > 0\\)',  correct: false },
          { text: '\\(D \\neq 0\\)', correct: true },
          { text: '\\(D < 0\\)',  correct: false },
        ],
        hint: 'The determinant \\(D = a_1 b_2 - a_2 b_1\\).',
        explanation: 'A unique solution exists exactly when \\(D \\neq 0\\). If \\(D = 0\\) the lines are parallel or identical.',
      },
      {
        q: 'Eliminate \\(y\\) from: \\(x + y = 5\\) and \\(2x - y = 1\\)',
        options: [
          { text: '\\(3x = 6 \\Rightarrow x = 2\\)', correct: true  },
          { text: '\\(3x = 4 \\Rightarrow x = \\frac{4}{3}\\)', correct: false },
          { text: '\\(x = 6\\)', correct: false },
          { text: '\\(x = 1\\)', correct: false },
        ],
        hint: 'Add the two equations together.',
        explanation: 'Adding: \\((x + y) + (2x - y) = 5 + 1 \\Rightarrow 3x = 6 \\Rightarrow x = 2\\). Then \\(y = 3\\).',
      },
    ],

    'inequalities': [
      {
        q: 'Solve: \\(-3x > 12\\)',
        options: [
          { text: '\\(x > -4\\)',  correct: false },
          { text: '\\(x > 4\\)',   correct: false },
          { text: '\\(x < -4\\)',  correct: true  },
          { text: '\\(x < 4\\)',   correct: false },
        ],
        hint: 'Dividing by a negative number flips the inequality sign.',
        explanation: '\\(-3x > 12\\) → divide by \\(-3\\) (flip sign) → \\(x < -4\\).',
      },
      {
        q: 'Which interval represents \\(x \\geq -2\\)?',
        options: [
          { text: '\\((-\\infty, -2)\\)', correct: false },
          { text: '\\([-2, +\\infty)\\)', correct: true  },
          { text: '\\((-2, +\\infty)\\)', correct: false },
          { text: '\\((-\\infty, -2]\\)', correct: false },
        ],
        hint: 'Square bracket = included; round bracket = excluded.',
        explanation: '\\(\\geq\\) means \\(-2\\) is included, so we use \\([\\). The set extends to \\(+\\infty\\), giving \\([-2, +\\infty)\\).',
      },
      {
        q: 'For \\(x^2 - 4 < 0\\), what is the solution?',
        options: [
          { text: '\\(x < -2\\) or \\(x > 2\\)', correct: false },
          { text: '\\(-2 < x < 2\\)',              correct: true  },
          { text: '\\(x > 2\\)',                   correct: false },
          { text: 'No solution',                   correct: false },
        ],
        hint: 'Factor: \\(x^2 - 4 = (x-2)(x+2)\\). The parabola opens upward.',
        explanation: 'Roots at \\(x = \\pm 2\\). Since the parabola opens upward, \\(x^2 - 4 < 0\\) between the roots: \\(-2 < x < 2\\).',
      },
      {
        q: 'If \\(a < b\\) and \\(c < 0\\), which is true?',
        options: [
          { text: '\\(ac < bc\\)',  correct: false },
          { text: '\\(ac = bc\\)',  correct: false },
          { text: '\\(ac > bc\\)',  correct: true  },
          { text: 'Cannot be determined', correct: false },
        ],
        hint: 'Multiplying both sides by a negative number reverses the inequality.',
        explanation: 'Multiplying \\(a < b\\) by \\(c < 0\\) reverses the sign: \\(ac > bc\\).',
      },
    ],

    'matrices': [
      {
        q: 'What is \\( \\begin{bmatrix}1&0\\\\0&1\\end{bmatrix} \\begin{bmatrix}3&7\\\\-2&5\\end{bmatrix} \\)?',
        options: [
          { text: '\\(\\begin{bmatrix}3&0\\\\0&5\\end{bmatrix}\\)',  correct: false },
          { text: '\\(\\begin{bmatrix}3&7\\\\-2&5\\end{bmatrix}\\)', correct: true  },
          { text: '\\(\\begin{bmatrix}0&0\\\\0&0\\end{bmatrix}\\)',  correct: false },
          { text: '\\(\\begin{bmatrix}1&7\\\\-2&1\\end{bmatrix}\\)', correct: false },
        ],
        hint: 'The identity matrix \\(I\\) leaves any matrix unchanged.',
        explanation: 'Multiplying by the identity matrix \\(I\\) always returns the original matrix: \\(IA = A\\).',
      },
      {
        q: 'What is \\(\\det\\begin{bmatrix}4&2\\\\3&1\\end{bmatrix}\\)?',
        options: [
          { text: '10',  correct: false },
          { text: '-2',  correct: true  },
          { text: '2',   correct: false },
          { text: '14',  correct: false },
        ],
        hint: 'For a 2×2 matrix: \\(\\det = ad - bc\\).',
        explanation: '\\(\\det = 4 \\times 1 - 2 \\times 3 = 4 - 6 = -2\\).',
      },
      {
        q: 'A matrix has determinant 0. What does this mean geometrically?',
        options: [
          { text: 'The transformation doubles all areas',   correct: false },
          { text: 'The transformation collapses the plane to a line or point', correct: true },
          { text: 'The matrix is its own inverse',         correct: false },
          { text: 'The matrix only performs rotations',    correct: false },
        ],
        hint: 'The determinant is the area scale factor.',
        explanation: 'If \\(\\det = 0\\), the area scale factor is 0. The transformation collapses 2D space into a 1D line or single point (it is singular).',
      },
      {
        q: 'Is matrix multiplication commutative in general?',
        options: [
          { text: 'Yes, always',                  correct: false },
          { text: 'Yes, for square matrices only', correct: false },
          { text: 'No, \\(AB \\neq BA\\) in general', correct: true },
          { text: 'Only when both matrices are diagonal', correct: false },
        ],
        hint: 'Try a simple example: let \\(A = \\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}\\) and \\(B = \\begin{bmatrix}0&0\\\\1&0\\end{bmatrix}\\).',
        explanation: 'Matrix multiplication is not commutative in general. \\(AB\\) and \\(BA\\) can give different results — order matters.',
      },
    ],

    // ── History of Mathematics question banks ──────────────────────────────

    'zero': [
      {
        q: 'Who wrote <em>Brahmasphutasiddhanta</em> (628 CE), the first text to define arithmetic rules for zero as a standalone number?',
        options: [
          { text: 'Aryabhata',     correct: false },
          { text: 'Brahmagupta',   correct: true  },
          { text: 'Al-Khwārizmī', correct: false },
          { text: 'Fibonacci',     correct: false },
        ],
        hint: 'He was a 7th-century Indian mathematician who also gave rules for negative numbers.',
        explanation: 'Brahmagupta (598–668 CE) wrote <em>Brahmasphutasiddhanta</em> in 628 CE — the first text to treat zero as a number in its own right, with rules for addition, subtraction, and multiplication by zero.',
      },
      {
        q: 'What did Babylonian scribes use in their place-value system instead of a true zero symbol?',
        options: [
          { text: 'A small circle (○)',         correct: false },
          { text: 'An empty space or gap',       correct: true  },
          { text: 'A dot (·)',                   correct: false },
          { text: 'The letter O',                correct: false },
        ],
        hint: 'The Babylonian system was place-value, but the placeholder was implicit.',
        explanation: 'Babylonians left an empty space to indicate a missing place value — a practical workaround, but not zero as a number. This caused ambiguity; a later cuneiform symbol (two slanted wedges) served as a placeholder but was never used at the end of a numeral.',
      },
      {
        q: 'Why did medieval European scholars resist accepting zero as a number?',
        options: [
          { text: 'They already had their own zero symbol',       correct: false },
          { text: 'Roman numerals had no place for it',           correct: false },
          { text: 'It seemed philosophically absurd that "nothing" could be a number', correct: true  },
          { text: 'The Church banned its use',                    correct: false },
        ],
        hint: 'The objection was largely philosophical — Aristotle\'s mathematics had no concept of "nothing."',
        explanation: 'In the Aristotelian tradition, a number measured a <em>quantity of something</em>. "Nothing" could not be a quantity. The philosophical objection — "how can nothing be a number?" — delayed adoption of zero in Europe for centuries after it was standard in India and the Islamic world.',
      },
      {
        q: 'What is the result of \\(0^0\\) in most mathematical contexts, and why is it noteworthy?',
        options: [
          { text: 'Undefined always',          correct: false },
          { text: '0',                         correct: false },
          { text: '1 (by convention in combinatorics and power series)', correct: true  },
          { text: '∞',                         correct: false },
        ],
        hint: 'The empty product convention is relevant here.',
        explanation: '\\(0^0\\) is technically indeterminate as a limit, but by convention — especially in combinatorics and power series — it equals 1. This ensures formulas like the binomial theorem \\((x+y)^n = \\sum_{k=0}^n \\binom{n}{k} x^{n-k} y^k\\) work correctly when \\(x=0\\) or \\(y=0\\).',
      },
    ],

    'algebra-history': [
      {
        q: 'What does the word "algebra" derive from?',
        options: [
          { text: 'Greek "algos" (pain)',              correct: false },
          { text: 'Arabic "al-jabr" (reunion of broken parts)', correct: true  },
          { text: 'Latin "algorismus"',                correct: false },
          { text: 'Persian "jabr" (force)',            correct: false },
        ],
        hint: 'The word comes from the title of Al-Khwārizmī\'s 9th-century treatise.',
        explanation: '"Al-jabr" (الجبر) means the operation of moving a subtracted term to the other side of an equation — "completing" it. It appears in the title of Al-Khwārizmī\'s <em>Kitāb al-mukhtaṣar fī ḥisāb al-jabr wal-muqābala</em> (c. 830 CE). Fibonacci\'s Latin translation brought the word to Europe as "algebra."',
      },
      {
        q: 'Who introduced the systematic use of letters to represent unknown quantities in algebra (c. 1591)?',
        options: [
          { text: 'Al-Khwārizmī',   correct: false },
          { text: 'Diophantus',      correct: false },
          { text: 'François Viète',  correct: true  },
          { text: 'René Descartes',  correct: false },
        ],
        hint: 'This French mathematician called his system "logistica speciosa" — working with species (types) rather than numbers.',
        explanation: 'François Viète (1540–1603) introduced the systematic use of letters — vowels for unknowns, consonants for known quantities. Descartes later standardised the convention of using \\(x, y, z\\) for unknowns and \\(a, b, c\\) for constants, which is what we use today.',
      },
      {
        q: 'Who published <em>Ars Magna</em> (1545), containing the general solution to the cubic and quartic equations?',
        options: [
          { text: 'Fibonacci',        correct: false },
          { text: 'Gerolamo Cardano', correct: true  },
          { text: 'Niccolò Tartaglia', correct: false },
          { text: 'Rafael Bombelli',  correct: false },
        ],
        hint: 'He published Tartaglia\'s cubic formula in this landmark text, despite a promise of secrecy.',
        explanation: 'Cardano\'s <em>Ars Magna</em> (1545) is a landmark in algebra — the first major European work beyond what the ancients knew. It included Tartaglia\'s cubic solution and Ludovico Ferrari\'s quartic solution. The dispute over credit between Cardano and Tartaglia became one of history\'s most famous mathematical feuds.',
      },
      {
        q: 'The Fundamental Theorem of Algebra states that every non-constant polynomial of degree \\(n\\) has exactly:',
        options: [
          { text: 'At most \\(n\\) real roots',                        correct: false },
          { text: 'Exactly \\(n\\) roots in the complex numbers',      correct: true  },
          { text: 'At least one rational root',                         correct: false },
          { text: '\\(n\\) positive roots',                            correct: false },
        ],
        hint: 'Gauss proved this in his 1799 doctoral thesis.',
        explanation: 'The Fundamental Theorem of Algebra (proved by Gauss, 1799) states that every polynomial of degree \\(n\\) with complex coefficients has exactly \\(n\\) complex roots (counting multiplicity). This is why complex numbers were ultimately accepted — they "complete" algebra.',
      },
    ],

    'calculus-history': [
      {
        q: 'Which calculus dispute dominated mathematics in the early 18th century?',
        options: [
          { text: 'Who invented logarithms — Napier or Bürgi?',                   correct: false },
          { text: 'Whether calculus should use infinitesimals or limits',          correct: false },
          { text: 'Priority for discovering calculus — Newton or Leibniz?',        correct: true  },
          { text: 'Whether the integral is more fundamental than the derivative',  correct: false },
        ],
        hint: 'It split European mathematics into two camps and poisoned the field for a generation.',
        explanation: 'Newton developed his "fluxions" method around 1666 but published late. Leibniz developed his calculus independently in 1675 and published in 1684. The Royal Society (stacked with Newton\'s allies) investigated in 1712 and found in Newton\'s favour — but the conclusion was that Leibniz had plagiarised. Modern historians agree both discovered calculus independently.',
      },
      {
        q: 'What did Leibniz contribute that we still use today?',
        options: [
          { text: 'The notation \\(f\'(x)\\) and \\(\\dot{x}\\)',     correct: false },
          { text: 'The notation \\(\\frac{dy}{dx}\\) and \\(\\int\\)', correct: true  },
          { text: 'The power series expansion of \\(\\sin x\\)',        correct: false },
          { text: 'The \\(\\varepsilon\\text{-}\\delta\\) definition of a limit', correct: false },
        ],
        hint: 'The "long s" for summation and the fraction-like derivative notation.',
        explanation: 'Leibniz introduced \\(\\int\\) (from "summa") for the integral and \\(\\frac{dy}{dx}\\) for the derivative in the 1680s. Newton used dot notation (\\(\\dot{x}\\)) for fluxions. Leibniz\'s notation won out because it is more flexible — it clearly shows what you are differentiating with respect to, making the chain rule and substitution easy to write.',
      },
      {
        q: 'The Fundamental Theorem of Calculus states (informally):',
        options: [
          { text: 'Every continuous function has a maximum and a minimum',        correct: false },
          { text: 'Differentiation and integration are inverse operations',        correct: true  },
          { text: 'All power series converge on their interval of convergence',   correct: false },
          { text: 'Every bounded sequence has a convergent subsequence',          correct: false },
        ],
        hint: 'The theorem has two parts — one about antiderivatives, one about evaluating definite integrals.',
        explanation: 'The Fundamental Theorem of Calculus connects differentiation and integration: Part 1 says the derivative of an antiderivative returns the original function; Part 2 says \\(\\int_a^b f(x)\\,dx = F(b) - F(a)\\) where \\(F\\) is any antiderivative. Newton and Leibniz both understood this connection — it is the deepest insight of calculus.',
      },
      {
        q: 'Who first gave a rigorous \\(\\varepsilon\\text{-}\\delta\\) definition of the limit, resolving the logical controversy over infinitesimals?',
        options: [
          { text: 'Isaac Newton',      correct: false },
          { text: 'Gottfried Leibniz', correct: false },
          { text: 'Augustin-Louis Cauchy', correct: true  },
          { text: 'Leonhard Euler',    correct: false },
        ],
        hint: 'He published <em>Cours d\'analyse</em> in 1821.',
        explanation: 'Cauchy (1789–1857) provided the first rigorous foundation for calculus by replacing infinitesimals with limits defined using \\(\\varepsilon\\) and \\(\\delta\\). Weierstrass later formalised this fully. This ended the philosophical controversy that had surrounded calculus since its invention — whether "infinitely small quantities" were logically coherent.',
      },
    ],

    'counting': [
      {
        q: 'The Lebombo Bone (~43,000 BCE) is significant because it is:',
        options: [
          { text: 'The earliest known written language',          correct: false },
          { text: 'Possibly the earliest known tally — a bone with 29 notches', correct: true  },
          { text: 'The first place-value number system',          correct: false },
          { text: 'An ancient Babylonian multiplication table',   correct: false },
        ],
        hint: 'It was found in Swaziland and may relate to a lunar calendar.',
        explanation: 'The Lebombo Bone, discovered in the Lebombo Mountains of Swaziland, is a baboon fibula with 29 notches — possibly the earliest evidence of deliberate counting or a lunar calendar. It predates writing by 35,000 years. The Ishango Bone (~20,000 BCE) found in the DRC shows more complex patterns.',
      },
      {
        q: 'Which ancient civilisation invented the first positional (place-value) number system?',
        options: [
          { text: 'Ancient Egypt',    correct: false },
          { text: 'Ancient Greece',   correct: false },
          { text: 'Ancient Babylonia', correct: true },
          { text: 'Ancient China',    correct: false },
        ],
        hint: 'Their system was base-60 and used two symbols in a positional arrangement.',
        explanation: 'The Babylonians (c. 2000 BCE) developed the first positional number system — base 60 (sexagesimal). Position determined value. This is why we still have 60 seconds in a minute, 60 minutes in an hour, and 360 degrees in a circle: these are Babylonian conventions that have persisted for 4,000 years.',
      },
      {
        q: 'What base did the Mayan civilisation use for their number system?',
        options: [
          { text: 'Base 10',  correct: false },
          { text: 'Base 12',  correct: false },
          { text: 'Base 20 (vigesimal)', correct: true },
          { text: 'Base 60',  correct: false },
        ],
        hint: 'Think about counting on fingers <em>and</em> toes.',
        explanation: 'The Maya used a base-20 (vigesimal) system — probably because they counted on both fingers and toes. Their calendar system was exceptionally sophisticated, and they independently developed a concept of zero (a shell glyph) around 350 BCE, centuries before it appeared in India.',
      },
      {
        q: 'Hindu-Arabic numerals (0–9) reached Europe primarily through which route?',
        options: [
          { text: 'Direct trade with India via the Silk Road',       correct: false },
          { text: 'Leonardo Fibonacci\'s <em>Liber Abaci</em> (1202), which introduced the system from Islamic scholars', correct: true },
          { text: 'Ancient Roman adoption from Carthage',            correct: false },
          { text: 'Greek philosophers who visited Babylon',          correct: false },
        ],
        hint: 'Fibonacci learned the system in North Africa and promoted it in his 1202 book.',
        explanation: 'The Hindu-Arabic numeral system was transmitted to Europe largely via Islamic scholars, and popularised by Fibonacci\'s <em>Liber Abaci</em> (1202). He demonstrated its practical superiority for commercial arithmetic over Roman numerals. However, the system was resisted for centuries — Italian merchants were sometimes banned from using it, as numerals could be easily forged.',
      },
    ],

    'euclidean-geometry': [
      {
        q: 'How many postulates does Euclid\'s <em>Elements</em> open with?',
        options: [
          { text: '3',  correct: false },
          { text: '5',  correct: true  },
          { text: '7',  correct: false },
          { text: '10', correct: false },
        ],
        hint: 'The fifth is the famous one that troubled mathematicians for 2,000 years.',
        explanation: 'Euclid\'s <em>Elements</em> begins with 5 postulates (and 5 "common notions"). The first four are brief and uncontroversial; the fifth — the parallel postulate — is much longer and seemed to many to require proof from the others. The 2,000-year effort to prove it from the first four ultimately led to the discovery of non-Euclidean geometry.',
      },
      {
        q: 'Which postulate was the subject of 2,000 years of failed proof attempts?',
        options: [
          { text: 'Postulate 1: draw a straight line between any two points', correct: false },
          { text: 'Postulate 2: extend a line segment indefinitely',           correct: false },
          { text: 'Postulate 5: the parallel postulate',                       correct: true  },
          { text: 'Postulate 3: draw a circle given centre and radius',        correct: false },
        ],
        hint: 'Its equivalent: given a line and a point not on it, exactly one parallel line passes through the point.',
        explanation: 'Euclid\'s 5th postulate says: if a line crosses two other lines such that the interior angles on one side sum to less than 180°, the two lines meet on that side. Unlike the other four, it seemed like it should be provable. In the 1820s, Bolyai and Lobachevsky showed it is genuinely independent — you can consistently deny it and get different, equally valid geometries.',
      },
      {
        q: 'Euclid\'s proof that there are infinitely many primes uses which strategy?',
        options: [
          { text: 'Direct construction — he lists them all',       correct: false },
          { text: 'Mathematical induction',                         correct: false },
          { text: 'Proof by contradiction — assume finitely many, then construct a new one', correct: true },
          { text: 'The Sieve of Eratosthenes',                      correct: false },
        ],
        hint: 'Suppose \\(p_1, p_2, \\ldots, p_n\\) are all the primes. Consider \\(N = p_1 p_2 \\cdots p_n + 1\\).',
        explanation: 'Assume the primes are finite: \\(p_1, \\ldots, p_n\\). Form \\(N = p_1 p_2 \\cdots p_n + 1\\). Then \\(N\\) is not divisible by any \\(p_i\\) (remainder 1 each time), so either \\(N\\) is prime or has a prime factor not in our list — contradiction. Therefore infinitely many primes exist.',
      },
      {
        q: 'The Euler characteristic for a connected planar graph states \\(V - E + F = \\,?\\)',
        options: [
          { text: '0', correct: false },
          { text: '1', correct: false },
          { text: '2', correct: true  },
          { text: '4', correct: false },
        ],
        hint: 'Check with a cube: 8 vertices, 12 edges, 6 faces.',
        explanation: 'For any connected planar graph: \\(V - E + F = 2\\). For a cube: \\(8 - 12 + 6 = 2\\). For a tetrahedron: \\(4 - 6 + 4 = 2\\). This topological invariant — discovered by Euler in 1752 — is independent of how the graph is drawn, and connects graph theory to topology.',
      },
    ],

    'trigonometry-history': [
      {
        q: 'Who compiled the first known trigonometric table — a table of chords — around 150 BCE?',
        options: [
          { text: 'Ptolemy',      correct: false },
          { text: 'Hipparchus',   correct: true  },
          { text: 'Aryabhata',    correct: false },
          { text: 'Al-Battānī',   correct: false },
        ],
        hint: 'He is also called the "father of astronomy."',
        explanation: 'Hipparchus of Nicaea (c. 190–120 BCE) compiled the first known table of chords — a precursor to the modern sine table. He needed it for astronomical calculations. His work was later expanded by Ptolemy into the <em>Almagest</em>, which dominated astronomy for 1,400 years.',
      },
      {
        q: 'Aryabhata\'s key innovation over Greek trigonometry was to work with:',
        options: [
          { text: 'Full chords of a circle',        correct: false },
          { text: 'Half-chords (equivalent to the modern sine)', correct: true  },
          { text: 'The tangent function',            correct: false },
          { text: 'Radian measure',                  correct: false },
        ],
        hint: 'His word "jya" (literally "chord") referred to half of a full chord — the direct precursor of "sine."',
        explanation: 'Where Hipparchus worked with full chords, Aryabhata (499 CE) worked with half-chords (jya = ज्या) — which are exactly equal to what we call \\(R\\sin\\theta\\) today. This conceptual shift, from chord to half-chord, is how the modern sine function was born in 5th-century India.',
      },
      {
        q: 'The English word "sine" arrived through a mistranslation of which Arabic word?',
        options: [
          { text: '"jayb" (meaning bay or cove)', correct: true  },
          { text: '"matar" (meaning rain)',        correct: false },
          { text: '"sabr" (meaning patience)',     correct: false },
          { text: '"watar" (meaning string)',      correct: false },
        ],
        hint: 'The Arabic transliterators used a word that looked like "bosom" — which Latin translators rendered as "sinus."',
        explanation: 'Aryabhata\'s "jya" was transliterated into Arabic as "jiba" — a meaningless phonetic equivalent. Arabic scribes wrote it as "jayb" (a real Arabic word meaning bay or cove). When 12th-century Latin translators rendered "jayb" as "sinus" (Latin for bay, bosom, or fold), it became "sine" in English. The word thus has nothing to do with the mathematics it describes.',
      },
      {
        q: 'Which addition formula is correct?',
        options: [
          { text: '\\(\\sin(A+B) = \\sin A \\cos B - \\cos A \\sin B\\)',  correct: false },
          { text: '\\(\\sin(A+B) = \\sin A \\cos B + \\cos A \\sin B\\)',  correct: true  },
          { text: '\\(\\sin(A+B) = \\cos A \\cos B + \\sin A \\sin B\\)',  correct: false },
          { text: '\\(\\sin(A+B) = \\tan A + \\tan B\\)',                   correct: false },
        ],
        hint: 'Remember: sin of a sum uses both sin·cos products.',
        explanation: '\\(\\sin(A+B) = \\sin A \\cos B + \\cos A \\sin B\\). This identity was known to Ptolemy (as a chord identity) and to Indian mathematicians. It underpins all of trigonometry — every multiple-angle formula, every product-to-sum identity, and the connection \\(e^{i\\theta} = \\cos\\theta + i\\sin\\theta\\) all follow from it.',
      },
    ],

    'probability-history': [
      {
        q: 'What problem in 1654 prompted Pascal and Fermat to develop the foundations of probability theory?',
        options: [
          { text: 'Predicting comet orbits',                 correct: false },
          { text: 'The Problem of Points — how to fairly divide stakes in an unfinished game', correct: true  },
          { text: 'Calculating life expectancy for insurance', correct: false },
          { text: 'How to shuffle cards fairly',             correct: false },
        ],
        hint: 'The chevalier de Méré asked about a dice-gambling dispute.',
        explanation: 'The chevalier de Méré posed the Problem of Points to Pascal: if a game of chance is interrupted before it ends, how should the pot be divided fairly based on each player\'s current score? Pascal and Fermat\'s letters solving this problem (1654) introduced expected value and combinatorial probability — founding probability theory.',
      },
      {
        q: 'Jacob Bernoulli\'s Law of Large Numbers (1713) states that:',
        options: [
          { text: 'Large samples always contain more variation',          correct: false },
          { text: 'The product of two probabilities is less than either', correct: false },
          { text: 'As trial count increases, the sample frequency converges to the true probability', correct: true  },
          { text: 'All probability distributions are approximately normal for large n', correct: false },
        ],
        hint: 'Think about flipping a fair coin 10 times vs 10,000 times.',
        explanation: 'The Law of Large Numbers says: if you repeat an experiment independently many times, the proportion of times each outcome occurs converges to its true probability. This is why casinos always profit in the long run — the house edge compounds over millions of bets even if individual outcomes are random.',
      },
      {
        q: 'Bayes\' theorem relates:',
        options: [
          { text: 'The sum of probabilities in a sample space',                     correct: false },
          { text: 'The probability of an event given prior and new evidence',        correct: true  },
          { text: 'The standard deviation to the mean',                              correct: false },
          { text: 'Joint probability to marginal probability',                       correct: false },
        ],
        hint: '\\(P(A|B) = \\frac{P(B|A)P(A)}{P(B)}\\)',
        explanation: 'Bayes\' theorem: \\(P(A|B) = \\frac{P(B|A)P(A)}{P(B)}\\). It tells you how to update your belief in \\(A\\) given new evidence \\(B\\). Published posthumously by Thomas Bayes in 1763, it underpins Bayesian statistics, machine learning, medical diagnosis, and spam filters.',
      },
      {
        q: 'What did Florence Nightingale\'s polar area diagrams (1858) demonstrate?',
        options: [
          { text: 'That cholera was spread by contaminated water',                     correct: false },
          { text: 'That more British soldiers in the Crimea died from preventable disease than from wounds', correct: true  },
          { text: 'That the normal distribution applied to human heights',             correct: false },
          { text: 'That mortality rates had declined over the previous century',       correct: false },
        ],
        hint: 'Her "rose diagram" compared causes of death in different sectors of a circle.',
        explanation: 'Nightingale\'s 1858 "rose diagram" (a polar area chart) showed visually that the vast majority of British soldiers in the Crimean War died from preventable disease (blue sector) rather than wounds (red) or other causes (black). The visualisation persuaded the government to reform military hospitals — one of the first times statistical data directly changed public policy.',
      },
    ],

    'non-euclidean': [
      {
        q: 'Which of Euclid\'s postulates was found to be independent of the other four?',
        options: [
          { text: 'Postulate 1 (draw a line between any two points)', correct: false },
          { text: 'Postulate 3 (draw a circle given centre and radius)', correct: false },
          { text: 'Postulate 5 — the parallel postulate',               correct: true  },
          { text: 'Postulate 4 (all right angles are equal)',            correct: false },
        ],
        hint: 'Its equivalent: through a point not on a line, exactly one parallel can be drawn.',
        explanation: 'For 2,000 years, mathematicians tried to prove the 5th postulate from the first four — assuming it must be derivable. Gauss, Bolyai, and Lobachevsky independently showed in the 1820s–1830s that denying the 5th postulate yields a consistent geometry (hyperbolic geometry), proving it is genuinely independent.',
      },
      {
        q: 'Who privately developed hyperbolic geometry but kept it secret for decades, fearing it would "raise a howl"?',
        options: [
          { text: 'János Bolyai',          correct: false },
          { text: 'Nikolai Lobachevsky',   correct: false },
          { text: 'Carl Friedrich Gauss',  correct: true  },
          { text: 'Bernhard Riemann',      correct: false },
        ],
        hint: 'He is often called the "prince of mathematics."',
        explanation: 'Gauss had developed hyperbolic geometry privately by around 1817 but never published, writing in letters that he feared the "howl from the Boeotians" — meaning ridicule from people attached to Euclidean orthodoxy. Bolyai and Lobachevsky independently published in the 1830s. When Gauss saw Bolyai\'s work, he said he could not praise it — because it was what he had already done.',
      },
      {
        q: 'In hyperbolic geometry, the sum of angles in a triangle is:',
        options: [
          { text: 'Greater than 180°', correct: false },
          { text: 'Exactly 180°',      correct: false },
          { text: 'Less than 180°',    correct: true  },
          { text: 'Exactly 90°',       correct: false },
        ],
        hint: 'Hyperbolic space curves "away" from itself — like a saddle.',
        explanation: 'In hyperbolic (negatively curved) geometry, the angle sum of any triangle is <em>less</em> than 180°. In Euclidean (flat) geometry, it is exactly 180°. In elliptic (positively curved) geometry — like the surface of a sphere — it is <em>more</em> than 180°. The angle deficit or excess is proportional to the area of the triangle.',
      },
      {
        q: 'Einstein\'s General Relativity (1915) describes gravity as curvature of spacetime using which mathematical framework?',
        options: [
          { text: 'Euclidean geometry',             correct: false },
          { text: 'Hyperbolic geometry (Bolyai–Lobachevsky)', correct: false },
          { text: 'Riemannian geometry',             correct: true  },
          { text: 'Projective geometry',             correct: false },
        ],
        hint: 'Riemann\'s 1854 lecture generalised geometry to curved spaces of any dimension.',
        explanation: 'Einstein used Bernhard Riemann\'s differential geometry — developed in 1854 for purely abstract reasons — as the mathematical language of General Relativity. Riemann\'s framework describes how to measure distances and curvature in spaces of any dimension. Without it, General Relativity could not be written down. GPS satellites must correct for relativistic effects predicted by this theory.',
      },
    ],

    'complex-numbers-history': [
      {
        q: 'Who was the first to establish workable arithmetic rules for square roots of negative numbers?',
        options: [
          { text: 'Gerolamo Cardano', correct: false },
          { text: 'Rafael Bombelli',  correct: true  },
          { text: 'René Descartes',   correct: false },
          { text: 'Leonhard Euler',   correct: false },
        ],
        hint: 'He published <em>Algebra</em> (1572), working through examples with \\(\\sqrt{-1}\\) step by step.',
        explanation: 'Cardano encountered \\(\\sqrt{-15}\\) in 1545 but called it "sophistic" (useless). Bombelli (1526–1572) was the first to actually <em>compute</em> with such expressions, establishing that \\(\\sqrt{-1} \\cdot \\sqrt{-1} = -1\\) and deriving correct real answers via intermediate complex calculations. This made complex numbers a legitimate tool.',
      },
      {
        q: 'Who coined the pejorative term "imaginary numbers" (as an insult — they seemed impossible)?',
        options: [
          { text: 'Gerolamo Cardano', correct: false },
          { text: 'Rafael Bombelli',  correct: false },
          { text: 'René Descartes',   correct: true  },
          { text: 'Leonhard Euler',   correct: false },
        ],
        hint: 'He also invented the coordinate system named after him.',
        explanation: 'Descartes (1637) used the term "imaginary" in <em>La Géométrie</em> as a put-down — these "impossible" roots were imaginary in the sense of being fictitious. The name stuck, which is unfortunate: complex numbers are no less real than any other mathematical object. Gauss preferred the term "lateral numbers."',
      },
      {
        q: 'Euler\'s formula \\(e^{i\\theta} = \\cos\\theta + i\\sin\\theta\\) is profound because it:',
        options: [
          { text: 'Proves that \\(\\pi\\) is irrational',                 correct: false },
          { text: 'Connects the exponential function to circular rotation via complex numbers', correct: true  },
          { text: 'Shows that \\(i^2 = 1\\)',                              correct: false },
          { text: 'Defines \\(e\\) as the base of natural logarithms',    correct: false },
        ],
        hint: 'Setting \\(\\theta = \\pi\\) gives the most famous equation in mathematics.',
        explanation: 'Euler\'s formula reveals that multiplying by \\(e^{i\\theta}\\) rotates a complex number by angle \\(\\theta\\) in the complex plane. Exponentials and trigonometry — two apparently unrelated mathematical worlds — turn out to be two faces of the same complex function. Setting \\(\\theta = \\pi\\): \\(e^{i\\pi} + 1 = 0\\), linking \\(e\\), \\(i\\), \\(\\pi\\), 1, and 0.',
      },
      {
        q: 'Complex numbers are used in AC electrical engineering because:',
        options: [
          { text: 'They make multiplication easier',                              correct: false },
          { text: 'Resistance, inductance, and capacitance can be combined as impedance \\(Z = R + iX\\)', correct: true  },
          { text: 'All voltages are naturally complex-valued',                    correct: false },
          { text: 'Euler\'s formula describes DC circuits',                       correct: false },
        ],
        hint: 'Phase differences between voltage and current are naturally represented as complex rotations.',
        explanation: 'In AC circuits, voltage and current oscillate sinusoidally. Inductors and capacitors cause phase shifts — voltage and current are no longer in sync. Representing these as complex exponentials \\(e^{i\\omega t}\\) turns calculus (differential equations) into algebra (multiply by \\(i\\omega\\)). Impedance \\(Z = R + i(\\omega L - 1/\\omega C)\\) combines resistance \\(R\\), inductive reactance \\(\\omega L\\), and capacitive reactance \\(1/\\omega C\\) into a single complex number.',
      },
    ],

    'graph-theory-history': [
      {
        q: 'What was the Königsberg Bridge Problem (1736)?',
        options: [
          { text: 'Finding the shortest route through all 7 bridges',                              correct: false },
          { text: 'Can you walk across all 7 bridges exactly once and return to your starting point?', correct: true  },
          { text: 'Counting the number of possible walking routes through the city',               correct: false },
          { text: 'Building a new bridge to connect all parts of the city',                        correct: false },
        ],
        hint: 'It\'s about an Eulerian circuit — traversing every edge exactly once.',
        explanation: 'The puzzle asked whether you could walk through Königsberg crossing each of its 7 bridges exactly once and return to your starting point (an Eulerian circuit). Euler proved it is impossible and, in doing so, invented graph theory — replacing the physical city with an abstract graph of vertices (land masses) and edges (bridges).',
      },
      {
        q: 'Euler proved the Königsberg bridge walk is impossible because:',
        options: [
          { text: 'The bridges were too far apart',          correct: false },
          { text: 'The graph was not connected',             correct: false },
          { text: 'Every land mass (vertex) had an odd number of bridges (odd degree)', correct: true  },
          { text: 'The city had too many islands',           correct: false },
        ],
        hint: 'An Eulerian circuit requires every vertex to be entered and exited equally often.',
        explanation: 'For an Eulerian circuit to exist, every vertex must have <em>even</em> degree (so you can always leave when you arrive). The Königsberg graph has vertices of degree 3, 3, 5, and 3 — all odd. Since no vertex has even degree, an Eulerian circuit is impossible — no matter what route you try.',
      },
      {
        q: 'For a connected graph to have an Eulerian circuit, the condition is:',
        options: [
          { text: 'All vertices have degree 1',   correct: false },
          { text: 'All vertices have even degree', correct: true  },
          { text: 'All vertices have odd degree',  correct: false },
          { text: 'The graph has no cycles',       correct: false },
        ],
        hint: 'Euler proved this general condition in 1736.',
        explanation: 'Euler\'s theorem: a connected graph has an Eulerian circuit if and only if every vertex has even degree. If exactly two vertices have odd degree, an Eulerian <em>path</em> (not a circuit) exists, starting at one odd vertex and ending at the other. This is the first theorem of graph theory — proved in 1736.',
      },
      {
        q: 'The Four Colour Theorem (every planar map needs at most 4 colours) was conjectured in 1852 and first proved in 1976 using:',
        options: [
          { text: 'A short elegant proof by hand',                    correct: false },
          { text: 'A proof requiring computer verification of 1,936 special cases', correct: true  },
          { text: 'A probabilistic argument',                         correct: false },
          { text: 'Euler\'s characteristic formula',                  correct: false },
        ],
        hint: 'Appel and Haken\'s proof sparked debate about whether computer-aided proofs "count" as mathematics.',
        explanation: 'Appel and Haken (1976) proved the Four Colour Theorem by reducing it to 1,936 unavoidable configurations, each checked by computer. It was the first major mathematical theorem proved with substantial computer assistance. The proof sparked an ongoing philosophical debate: if a proof requires a computer to verify thousands of cases, does a human actually understand why the theorem is true?',
      },
    ],

    'logic-foundations': [
      {
        q: 'Cantor\'s diagonal argument proved that the real numbers are:',
        options: [
          { text: 'Countably infinite — like the natural numbers',                 correct: false },
          { text: 'Uncountably infinite — a strictly larger infinity than ℕ',      correct: true  },
          { text: 'Finite — there are only finitely many computable reals',        correct: false },
          { text: 'The same size as the rationals',                                correct: false },
        ],
        hint: 'He showed any proposed list of real numbers is necessarily incomplete.',
        explanation: 'Cantor\'s diagonal argument (1891): assume the reals in [0,1] can be listed. Construct a new real by changing the \\(n\\)th digit of the \\(n\\)th number on the list. This new real differs from every number on the list — so the list was incomplete. Therefore the reals cannot be listed: \\(|\\mathbb{R}| > |\\mathbb{N}|\\).',
      },
      {
        q: 'Russell\'s Paradox (1901) concerns:',
        options: [
          { text: 'Whether a set can contain all other sets',                              correct: false },
          { text: 'The set \\(R\\) of all sets that do not contain themselves — \\(R \\in R\\) iff \\(R \\notin R\\)', correct: true  },
          { text: 'Whether zero should be counted as a natural number',                    correct: false },
          { text: 'The cardinality of the empty set',                                      correct: false },
        ],
        hint: 'Think of the "barber who shaves all those who do not shave themselves."',
        explanation: 'Define \\(R = \\{x : x \\notin x\\}\\). If \\(R \\in R\\), then by definition \\(R \\notin R\\). If \\(R \\notin R\\), then by definition \\(R \\in R\\). Either way, contradiction. This shows naive set theory (any property defines a set) is logically inconsistent — and motivated axiomatic set theory (ZF).',
      },
      {
        q: 'Gödel\'s First Incompleteness Theorem (1931) states that in any consistent formal system powerful enough to express arithmetic:',
        options: [
          { text: 'All true statements are provable',                                  correct: false },
          { text: 'The system is free of contradictions',                              correct: false },
          { text: 'There exist true statements that cannot be proved within the system', correct: true  },
          { text: 'The axioms are sufficient to decide all questions',                 correct: false },
        ],
        hint: 'Gödel constructed a statement that says "This statement is not provable."',
        explanation: 'Gödel showed that in any consistent formal system strong enough for arithmetic, you can construct a true statement \\(G\\) that says "I am not provable in this system." If \\(G\\) were provable, it would be false (contradiction). So \\(G\\) is unprovable — but also true. The system is <em>incomplete</em>: not all truths are provable. This refuted Hilbert\'s Programme.',
      },
      {
        q: 'Which proof technique did Cantor (uncountability), Gödel (incompleteness), and Turing (Halting Problem) all use?',
        options: [
          { text: 'Proof by induction',         correct: false },
          { text: 'Proof by exhaustion',        correct: false },
          { text: 'Diagonalisation',            correct: true  },
          { text: 'The pigeonhole principle',   correct: false },
        ],
        hint: 'In each case, a new object is constructed by differing from every element of a list at the corresponding diagonal position.',
        explanation: 'Diagonalisation constructs a new object by making it differ from every item in a given list at the corresponding position. Cantor: a new real differing from the \\(n\\)th real at the \\(n\\)th decimal place. Gödel: a statement encoding its own non-provability. Turing: a program that does the opposite of what any proposed halting-detector says. The same abstract technique underlies all three.',
      },
    ],

    'modern-math': [
      {
        q: 'Who wrote what is considered the first computer program (1843)?',
        options: [
          { text: 'Charles Babbage',  correct: false },
          { text: 'Alan Turing',      correct: false },
          { text: 'Ada Lovelace',     correct: true  },
          { text: 'Claude Shannon',   correct: false },
        ],
        hint: 'She translated and annotated an Italian article on Babbage\'s Analytical Engine — and added Note G.',
        explanation: 'In 1843, Ada Lovelace published a translation of an article on Babbage\'s Analytical Engine with her own notes — including Note G, which contains an algorithm for computing Bernoulli numbers. It is generally recognised as the first computer program. She also articulated the principle of general-purpose computing: the Engine could manipulate any symbols, not just numbers.',
      },
      {
        q: 'What does Shannon\'s entropy formula \\(H = -\\sum_i p_i \\log_2 p_i\\) measure?',
        options: [
          { text: 'The speed at which information is transmitted',      correct: false },
          { text: 'The average number of bits needed to encode a message from a source', correct: true  },
          { text: 'The number of errors per unit time',                  correct: false },
          { text: 'The energy required to process information',          correct: false },
        ],
        hint: 'For a fair coin, \\(H = 1\\) bit. For a die, \\(H \\approx 2.58\\) bits.',
        explanation: 'Shannon entropy \\(H\\) is the average information content per symbol — the minimum average number of bits required to encode messages from a given source. A source with all outcomes equally likely has maximum entropy; a source that always produces the same symbol has zero entropy. It is the theoretical limit for lossless compression.',
      },
      {
        q: 'RSA cryptography\'s security relies on the computational difficulty of:',
        options: [
          { text: 'Computing large modular exponentiations',                      correct: false },
          { text: 'Factoring large integers into their prime components',         correct: true  },
          { text: 'Solving large systems of linear equations',                    correct: false },
          { text: 'Finding discrete logarithms in elliptic curve groups',         correct: false },
        ],
        hint: 'Multiplying two 1024-bit primes takes milliseconds; recovering the primes from their product is (as far as we know) infeasible.',
        explanation: 'RSA\'s trapdoor: computing \\(n = pq\\) for large primes \\(p, q\\) is easy; finding \\(p\\) and \\(q\\) from \\(n\\) alone is believed to be computationally infeasible. All currently known classical factoring algorithms for a 2048-bit \\(n\\) would take longer than the age of the universe on any classical computer.',
      },
      {
        q: 'Turing\'s 1936 paper "On Computable Numbers" introduced the Turing machine in order to:',
        options: [
          { text: 'Design a practical mechanical calculator',                     correct: false },
          { text: 'Answer Hilbert\'s Entscheidungsproblem — is there an algorithm that decides all mathematical statements?', correct: true  },
          { text: 'Prove that all mathematical truths are provable',              correct: false },
          { text: 'Design the first electronic stored-program computer',          correct: false },
        ],
        hint: 'The answer was no — not all mathematical questions can be algorithmically decided.',
        explanation: 'Turing defined the Turing machine to give a precise mathematical definition of "algorithm" and "computation." With this definition, he proved that the Halting Problem is undecidable — no algorithm can determine whether an arbitrary program halts. This answered Hilbert\'s Entscheidungsproblem negatively: there is no algorithm that decides all mathematical statements. The theoretical computer was born as a tool for a logic problem.',
      },
    ],
  };

  // ── CSS injected once ──────────────────────────────────────────────────────
  let _stylesInjected = false;
  function injectStyles() {
    if (_stylesInjected) return;
    _stylesInjected = true;
    const style = document.createElement('style');
    style.textContent = `
      .practice-wrap { display: flex; flex-direction: column; gap: 0; }

      .pq-card {
        padding: 20px 0; border-bottom: 1px solid var(--border);
        display: flex; flex-direction: column; gap: 12px;
      }
      .pq-card:last-child { border-bottom: none; }

      .pq-num {
        display: inline-flex; align-items: center; justify-content: center;
        width: 26px; height: 26px; border-radius: 50%; flex-shrink: 0;
        font-size: 0.72rem; font-weight: 800;
        background: rgba(79,142,247,0.1); color: var(--accent-blue);
        border: 1px solid rgba(79,142,247,0.2);
      }
      .pq-header { display: flex; gap: 10px; align-items: flex-start; }
      .pq-text { font-size: 0.925rem; color: var(--text-primary); line-height: 1.6; padding-top: 3px; }

      .pq-options { display: flex; flex-direction: column; gap: 7px; padding-left: 36px; }
      .pq-option {
        display: flex; align-items: flex-start; gap: 10px; padding: 10px 14px;
        border: 1px solid var(--border); border-radius: var(--radius-md);
        cursor: pointer; background: rgba(255,255,255,0.025);
        transition: border-color 0.15s, background 0.15s;
        font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;
        text-align: left; width: 100%;
      }
      .pq-option:hover:not(:disabled) { border-color: rgba(79,142,247,0.4); background: rgba(79,142,247,0.05); color: var(--text-primary); }
      .pq-option.correct  { border-color: rgba(52,212,200,0.6); background: rgba(52,212,200,0.08); color: var(--text-primary); }
      .pq-option.wrong    { border-color: rgba(249,123,64,0.5); background: rgba(249,123,64,0.06); color: var(--text-secondary); }
      .pq-option:disabled { cursor: default; }
      .pq-opt-marker {
        width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0;
        border: 2px solid rgba(255,255,255,0.15); margin-top: 1px;
        display: flex; align-items: center; justify-content: center;
        font-size: 0.65rem; font-weight: 800;
      }
      .pq-option.correct .pq-opt-marker { border-color: #34d4c8; background: rgba(52,212,200,0.15); color: #34d4c8; }
      .pq-option.wrong   .pq-opt-marker { border-color: #f97b40; background: rgba(249,123,64,0.1); color: #f97b40; }

      .pq-actions { display: flex; gap: 10px; padding-left: 36px; align-items: center; }
      .pq-hint-btn {
        font-size: 0.78rem; font-weight: 600; padding: 5px 14px;
        border: 1px solid var(--border); border-radius: var(--radius-md);
        background: transparent; color: var(--text-muted); cursor: pointer;
        transition: var(--transition);
      }
      .pq-hint-btn:hover { border-color: rgba(155,109,248,0.4); color: #9b6df8; }
      .pq-hint { font-size: 0.82rem; color: #9b6df8; padding-left: 36px; display: none; }
      .pq-hint.visible { display: block; }
      .pq-explanation {
        font-size: 0.82rem; padding: 10px 14px; margin-left: 36px;
        border-left: 3px solid rgba(52,212,200,0.4);
        background: rgba(52,212,200,0.05); border-radius: 0 var(--radius-md) var(--radius-md) 0;
        color: var(--text-secondary); display: none; line-height: 1.6;
      }
      .pq-explanation.visible { display: block; }

      .practice-score {
        display: flex; align-items: center; gap: 14px; margin-top: 20px;
        padding: 14px 18px; border-radius: var(--radius-md);
        background: rgba(79,142,247,0.06); border: 1px solid rgba(79,142,247,0.15);
      }
      .score-label { font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.07em; color: var(--text-muted); }
      .score-value { font-size: 1.3rem; font-weight: 800; font-family: var(--font-mono); }
      .score-value.perfect { color: var(--accent-teal); }
      .score-value.good    { color: var(--accent-blue); }
      .score-value.retry   { color: var(--accent-orange); }
      .score-msg { font-size: 0.82rem; color: var(--text-muted); }
      .practice-reset-btn {
        margin-left: auto; font-size: 0.78rem; font-weight: 600; padding: 6px 16px;
        border: 1px solid var(--border); border-radius: var(--radius-md);
        background: transparent; color: var(--text-muted); cursor: pointer; transition: var(--transition);
      }
      .practice-reset-btn:hover { border-color: var(--border-hover); color: var(--text-primary); }
    `;
    document.head.appendChild(style);
  }

  // ── Render engine ──────────────────────────────────────────────────────────
  function render(topicKey, containerId) {
    injectStyles();
    const container = document.getElementById(containerId);
    if (!container) return;
    const questions = QUESTIONS[topicKey];
    if (!questions) { container.innerHTML = '<p style="color:var(--text-muted);">No practice questions available.</p>'; return; }

    // Add section heading if not present
    if (!container.querySelector('h2')) {
      const h2 = document.createElement('h2');
      h2.textContent = 'Practice Problems';
      container.prepend(h2);
    }

    const wrap = document.createElement('div');
    wrap.className = 'practice-wrap';

    let answered = 0;
    let correct  = 0;
    const total  = questions.length;

    const scoreEl = document.createElement('div');
    scoreEl.className = 'practice-score';
    scoreEl.style.display = 'none';

    questions.forEach((q, qi) => {
      const card = document.createElement('div');
      card.className = 'pq-card';

      // Header
      const header = document.createElement('div');
      header.className = 'pq-header';
      header.innerHTML = `<span class="pq-num">${qi + 1}</span><span class="pq-text">${q.q}</span>`;
      card.appendChild(header);

      // Options
      const optWrap = document.createElement('div');
      optWrap.className = 'pq-options';
      let questionAnswered = false;

      q.options.forEach((opt, oi) => {
        const btn = document.createElement('button');
        btn.className = 'pq-option';
        btn.innerHTML = `<span class="pq-opt-marker"></span><span>${opt.text}</span>`;
        btn.addEventListener('click', () => {
          if (questionAnswered) return;
          questionAnswered = true;
          answered++;
          optWrap.querySelectorAll('.pq-option').forEach(b => {
            b.disabled = true;
            const isCorrect = q.options[Array.from(optWrap.querySelectorAll('.pq-option')).indexOf(b)].correct;
            if (isCorrect) {
              b.classList.add('correct');
              b.querySelector('.pq-opt-marker').textContent = '✓';
            } else if (b === btn) {
              b.classList.add('wrong');
              b.querySelector('.pq-opt-marker').textContent = '✕';
            }
          });
          if (opt.correct) correct++;
          expEl.classList.add('visible');
          hintEl.classList.remove('visible');
          hintBtn.style.display = 'none';
          if (answered === total) showScore();
          if (typeof MathJax !== 'undefined') MathJax.typesetPromise([expEl]).catch(() => {});
        });
        optWrap.appendChild(btn);
      });
      card.appendChild(optWrap);

      // Actions row
      const actions = document.createElement('div');
      actions.className = 'pq-actions';
      const hintBtn = document.createElement('button');
      hintBtn.className = 'pq-hint-btn';
      hintBtn.textContent = 'Show hint';
      const hintEl = document.createElement('div');
      hintEl.className = 'pq-hint';
      hintEl.innerHTML = '💡 ' + q.hint;
      hintBtn.addEventListener('click', () => {
        hintEl.classList.toggle('visible');
        hintBtn.textContent = hintEl.classList.contains('visible') ? 'Hide hint' : 'Show hint';
        if (hintEl.classList.contains('visible') && typeof MathJax !== 'undefined')
          MathJax.typesetPromise([hintEl]).catch(() => {});
      });
      actions.appendChild(hintBtn);
      card.appendChild(actions);
      card.appendChild(hintEl);

      // Explanation (shown after answering)
      const expEl = document.createElement('div');
      expEl.className = 'pq-explanation';
      expEl.innerHTML = q.explanation;
      card.appendChild(expEl);

      wrap.appendChild(card);
    });

    // Score panel
    function showScore() {
      scoreEl.style.display = 'flex';
      const pct = Math.round((correct / total) * 100);
      const cls = pct === 100 ? 'perfect' : pct >= 75 ? 'good' : 'retry';
      const msg = pct === 100 ? 'Perfect score! 🎉' : pct >= 75 ? 'Great work!' : 'Keep practising — you\'ve got this!';
      scoreEl.innerHTML = `
        <div><div class="score-label">Score</div>
        <div class="score-value ${cls}">${correct} / ${total}</div></div>
        <div class="score-msg">${msg}</div>
        <button class="practice-reset-btn">Try again</button>
      `;
      scoreEl.querySelector('.practice-reset-btn').addEventListener('click', () => {
        container.innerHTML = '';
        if (typeof MathJax !== 'undefined') MathJax.typesetPromise([container]).catch(() => {});
        render(topicKey, containerId);
        if (typeof MathJax !== 'undefined')
          setTimeout(() => MathJax.typesetPromise([container]).catch(() => {}), 100);
      });
      if (typeof Progress !== 'undefined') Progress.markPracticed(topicKey, pct);
      if (typeof MathJax !== 'undefined') MathJax.typesetPromise([scoreEl]).catch(() => {});
    }

    container.appendChild(wrap);
    container.appendChild(scoreEl);

    // Typeset all questions
    if (typeof MathJax !== 'undefined') {
      MathJax.typesetPromise([wrap]).catch(() => {});
    }
  }

  return { render };
})();
