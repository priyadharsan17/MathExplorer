/**
 * progress.js — Lightweight progress tracker for MathExplorer
 *
 * Stores per-topic state in localStorage under keys:
 *   mathexplorer_<topicKey>_visited   → "true"
 *   mathexplorer_<topicKey>_practiced → JSON { score: <0-100>, ts: <epoch> }
 *
 * Usage on a topic page:
 *   <script src="../../js/progress.js"></script>
 *   <script>Progress.markVisited('linear-equations');</script>
 *
 * Usage on the category index page:
 *   <script src="../js/progress.js"></script>
 *   <script>Progress.applyBadges();</script>
 */
const Progress = (function () {
  'use strict';

  const PREFIX = 'mathexplorer_';

  function _visitedKey(topicKey)   { return PREFIX + topicKey + '_visited'; }
  function _practicedKey(topicKey) { return PREFIX + topicKey + '_practiced'; }

  // ── Writers ────────────────────────────────────────────────────────────────

  /** Called on page-load of a topic page. */
  function markVisited(topicKey) {
    try { localStorage.setItem(_visitedKey(topicKey), 'true'); } catch (_) {}
  }

  /** Called by practice.js when the user finishes a question set. */
  function markPracticed(topicKey, score) {
    try {
      localStorage.setItem(_practicedKey(topicKey), JSON.stringify({ score: score, ts: Date.now() }));
    } catch (_) {}
  }

  // ── Readers ────────────────────────────────────────────────────────────────

  function isVisited(topicKey) {
    try { return localStorage.getItem(_visitedKey(topicKey)) === 'true'; } catch (_) { return false; }
  }

  function isPracticed(topicKey) {
    try { return localStorage.getItem(_practicedKey(topicKey)) !== null; } catch (_) { return false; }
  }

  function getPracticedScore(topicKey) {
    try {
      const raw = localStorage.getItem(_practicedKey(topicKey));
      return raw ? JSON.parse(raw).score : null;
    } catch (_) { return null; }
  }

  /** Returns an object keyed by topicKey with { visited, practiced, score }. */
  function getAll(topicKeys) {
    const result = {};
    topicKeys.forEach(key => {
      result[key] = {
        visited:   isVisited(key),
        practiced: isPracticed(key),
        score:     getPracticedScore(key),
      };
    });
    return result;
  }

  // ── DOM helper: apply progress badges on category pages ───────────────────

  /**
   * Reads all `.topic-card[data-topic]` elements on the current page and
   * injects a small progress indicator if the topic has been visited/practiced.
   * Topic cards must have a `data-topic="topicKey"` attribute.
   */
  function applyBadges() {
    const cards = document.querySelectorAll('.topic-card[data-topic]');
    cards.forEach(card => {
      const key = card.getAttribute('data-topic');
      if (!key) return;
      const visited   = isVisited(key);
      const practiced = isPracticed(key);
      const score     = getPracticedScore(key);
      if (!visited && !practiced) return;

      // Remove any existing badge
      const existing = card.querySelector('.progress-badge');
      if (existing) existing.remove();

      const badge = document.createElement('span');
      badge.className = 'progress-badge';
      if (practiced) {
        badge.classList.add(score === 100 ? 'pb-perfect' : score >= 75 ? 'pb-good' : 'pb-retry');
        badge.title = `Practiced · ${score}%`;
        badge.textContent = score === 100 ? '★' : '✓';
      } else {
        badge.classList.add('pb-visited');
        badge.title = 'Visited';
        badge.textContent = '●';
      }
      card.appendChild(badge);
    });
  }

  // ── Inject badge styles once ───────────────────────────────────────────────
  (function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .topic-card { position: relative; }
      .progress-badge {
        position: absolute; top: 10px; right: 10px;
        width: 22px; height: 22px; border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-size: 0.65rem; font-weight: 800; line-height: 1;
        pointer-events: none;
      }
      .pb-visited  { background: rgba(79,142,247,0.15);  color: #4f8ef7; border: 1px solid rgba(79,142,247,0.3); }
      .pb-retry    { background: rgba(249,123,64,0.15);  color: #f97b40; border: 1px solid rgba(249,123,64,0.3); }
      .pb-good     { background: rgba(79,142,247,0.15);  color: #4f8ef7; border: 1px solid rgba(79,142,247,0.3); }
      .pb-perfect  { background: rgba(52,212,200,0.15);  color: #34d4c8; border: 1px solid rgba(52,212,200,0.3); }
    `;
    document.head.appendChild(style);
  })();

  return { markVisited, markPracticed, isVisited, isPracticed, getPracticedScore, getAll, applyBadges };
})();
