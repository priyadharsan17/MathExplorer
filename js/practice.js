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
