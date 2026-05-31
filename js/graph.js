/**
 * graph.js — Shared Canvas utilities for MathExplorer
 *
 * Usage:
 *   <script src="../../js/graph.js"></script>
 *   then call Graph.init(canvas, drawFn), Graph.drawBackground(...), etc.
 */
const Graph = (function () {
  'use strict';

  /**
   * Convert math coordinates (x, y) to canvas pixel coordinates.
   * @param {number} x - Math x value
   * @param {number} y - Math y value
   * @param {number} W  - Canvas width in px
   * @param {number} H  - Canvas height in px
   * @param {number} range - Half-width of visible axis (e.g. 10 → axis from -10 to 10)
   * @returns {[number, number]} [canvasPx, canvasPy]
   */
  function toCanvas(x, y, W, H, range) {
    return [
      W / 2 + (x / range) * (W / 2),
      H / 2 - (y / range) * (H / 2)
    ];
  }

  /**
   * Fill dark background and draw subtle grid lines.
   */
  function drawBackground(ctx, W, H, range) {
    ctx.fillStyle = '#0d0d14';
    ctx.fillRect(0, 0, W, H);

    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 1;
    for (let i = -range; i <= range; i++) {
      const [gx] = toCanvas(i, 0, W, H, range);
      const [, gy] = toCanvas(0, i, W, H, range);
      ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, H); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
    }
  }

  /**
   * Draw x/y axes with numeric tick labels.
   */
  function drawAxes(ctx, W, H, range) {
    const [axX] = toCanvas(0, 0, W, H, range);
    const [, axY] = toCanvas(0, 0, W, H, range);

    ctx.strokeStyle = 'rgba(255,255,255,0.22)';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(axX, 0); ctx.lineTo(axX, H); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, axY); ctx.lineTo(W, axY); ctx.stroke();

    ctx.fillStyle = 'rgba(255,255,255,0.28)';
    ctx.font = `${Math.max(10, W * 0.012)}px Inter, sans-serif`;
    const labelStep = range <= 5 ? 1 : range <= 10 ? 2 : 5;
    for (let i = -range + labelStep; i <= range - labelStep; i += labelStep) {
      if (i === 0) continue;
      const [lx] = toCanvas(i, 0, W, H, range);
      ctx.textAlign = 'center';
      ctx.fillText(i, lx, axY + 16);
      const [, ly] = toCanvas(0, i, W, H, range);
      ctx.textAlign = 'right';
      ctx.fillText(i, axX - 6, ly + 4);
    }
  }

  /**
   * Plot a function y = fn(x) as a continuous curve.
   * Handles discontinuities by breaking the path on large vertical jumps.
   *
   * @param {CanvasRenderingContext2D} ctx
   * @param {Function} fn         - Math function: x → y
   * @param {number}   W, H       - Canvas dimensions
   * @param {number}   range      - Axis half-range
   * @param {string}   [color]    - Stroke colour
   * @param {string}   [glowColor]- Optional shadow/glow rgba string
   * @param {number}   [lineWidth]
   * @param {number}   [steps]    - Sampling resolution
   */
  function plot(ctx, fn, W, H, range, color = '#4f8ef7', glowColor = null, lineWidth = 2.5, steps = 600) {
    const xStart = -(range + 0.5), xEnd = range + 0.5;
    const dx = (xEnd - xStart) / steps;

    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    if (glowColor) { ctx.shadowColor = glowColor; ctx.shadowBlur = 12; }

    ctx.beginPath();
    let started = false;
    let prevPy = null;

    for (let i = 0; i <= steps; i++) {
      const xv = xStart + i * dx;
      let yv;
      try { yv = fn(xv); } catch (e) { started = false; continue; }
      if (!isFinite(yv) || isNaN(yv)) { started = false; continue; }

      const [px, py] = toCanvas(xv, yv, W, H, range);

      // Break path at discontinuities (large vertical jump)
      if (started && prevPy !== null && Math.abs(py - prevPy) > H * 1.2) {
        ctx.stroke();
        ctx.beginPath();
        started = false;
      }

      if (!started) { ctx.moveTo(px, py); started = true; }
      else ctx.lineTo(px, py);
      prevPy = py;
    }
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  /**
   * Draw a filled dot at math coordinates (x, y).
   */
  function dot(ctx, x, y, W, H, range, color = '#4f8ef7', radius = 5, glowColor = null) {
    const [cx, cy] = toCanvas(x, y, W, H, range);
    if (glowColor) { ctx.shadowColor = glowColor; ctx.shadowBlur = 10; }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  /**
   * Draw a vertical dashed line at x = xVal (asymptote / boundary marker).
   */
  function dashedVLine(ctx, xVal, W, H, range, color = 'rgba(249,123,64,0.55)') {
    const [px] = toCanvas(xVal, 0, W, H, range);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 4]);
    ctx.beginPath(); ctx.moveTo(px, 0); ctx.lineTo(px, H); ctx.stroke();
    ctx.setLineDash([]);
  }

  /**
   * Draw a horizontal dashed line at y = yVal (asymptote marker).
   */
  function dashedHLine(ctx, yVal, W, H, range, color = 'rgba(249,123,64,0.55)') {
    const [, py] = toCanvas(0, yVal, W, H, range);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 4]);
    ctx.beginPath(); ctx.moveTo(0, py); ctx.lineTo(W, py); ctx.stroke();
    ctx.setLineDash([]);
  }

  /**
   * Initialise a canvas: size it to its container, call drawFn, re-draw on window resize.
   * @param {HTMLCanvasElement} canvas
   * @param {Function} drawFn - Called after every resize
   * @param {number} [aspectRatio=0.48] - height = width * aspectRatio
   * @returns {Function} The resize handler (call it to force a redraw)
   */
  function init(canvas, drawFn, aspectRatio = 0.48) {
    function resize() {
      const w = canvas.parentElement.clientWidth;
      canvas.width  = w;
      canvas.height = Math.round(w * aspectRatio);
      drawFn();
    }
    window.addEventListener('resize', resize);
    resize();
    return resize;
  }

  return { toCanvas, drawBackground, drawAxes, plot, dot, dashedVLine, dashedHLine, init };
})();
