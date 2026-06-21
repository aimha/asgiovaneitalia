// ============================================================
// ROLE: Shared scroll-triggered intersection animation factory — DRY helper for page section entrance animations
// DEPENDS ON: ./animation, ./cubicBezier
// USED BY: All PageComponents/*.module.js
// KEY DECISIONS: Todo
// GOTCHAS: Todo
// LAST UPDATED: 2026-06-21 — extracted from duplicated module patterns
// ============================================================

import { AnimationClass } from './animation';
import { cubicBezier } from './cubicBezier';

export function createScrollAnimation(root, styles, options) {
  const tl = new AnimationClass({
    duration: options.duration ?? 500,
    initialDelay: options.initialDelay ?? 125,
    stagger: options.stagger ?? 125,
    easing: options.easing ?? cubicBezier.celebratoryEaseOut,
  });

  root.addEventListener('intersect', (e) => {
    const list = options.selectors.flatMap((sel) => {
      if (sel.all) {
        return [...e.target.querySelectorAll(sel.name)];
      }
      const el = e.target.querySelector(sel.name);
      return el ? [el] : [];
    });

    const keyframes = options.keyframes ?? [
      { opacity: 0, transform: 'translateY(20px)' },
      { opacity: 1, transform: 'translateY(0)' },
    ];

    tl.animateElement(list, keyframes);
  });

  return tl;
}
