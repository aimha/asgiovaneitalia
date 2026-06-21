// ============================================================
// ROLE: Membership intersection animation triggers
// DEPENDS ON: ../../../js/animation, ../../../js/cubicBezier
// USED BY: Membership.jsx
// KEY DECISIONS: TODO
// GOTCHAS: TODO
// LAST UPDATED: 2026-06-21 — added file header
// ============================================================

// JS CLASS

// imports
import { AnimationClass } from '../../../js/animation';
import { cubicBezier } from '../../../js/cubicBezier';

export class MembershipClass {
	constructor(_root, _styles) {
    this.root = _root;
    this.styles = _styles;

    this.tl_elements = new AnimationClass({
      duration: 500,
      initialDelay: 250,
      stagger: 125,
      easing: cubicBezier.celebratoryEaseOut
    });
	}

  init() {
    this.root.addEventListener('intersect', (e) => {
      const list = [
        e.target.querySelector(`.${this.styles.Title}`),
        e.target.querySelector(`.${this.styles.SubTitle}`),
        ...e.target.querySelectorAll(`.${this.styles.Body}`),
        e.target.querySelector(`.${this.styles.Cta}`),
      ];

      this.tl_elements.animateElement(
        list,
        [
          {opacity: 0, transform: 'translateY(20px)'},
          {opacity: 1, transform: 'translateY(0)'}
        ]
      );
    });
  }
}
