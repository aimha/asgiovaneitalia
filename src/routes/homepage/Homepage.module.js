// ============================================================
// ROLE: Homepage scroll/snap behavior via NativeScroller + IntersectionObserver
// DEPENDS ON: ../../js/intersectionObserver
// USED BY: Homepage.jsx
// KEY DECISIONS: TODO
// GOTCHAS: TODO
// LAST UPDATED: 2026-06-21 — added file header
// ============================================================

// HOMEPAGE CLASS

// imports
import { IntersectionObsClass } from '../../js/intersectionObserver';

export class HomepageClass {
  constructor() {
    this.slides = document.querySelectorAll('.slide');
    this.intObs = new IntersectionObsClass(this.slides, {
      threshold: .125,
      rootMargin: '0px 0px -375px 0px',
      logging: false,
    });
  }

  init() {
  }
}
