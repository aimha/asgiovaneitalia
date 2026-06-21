// ============================================================
// ROLE: Membership intersection animation triggers
// DEPENDS ON: ../../../js/scrollAnimation
// USED BY: Membership.jsx
// KEY DECISIONS: TODO
// GOTCHAS: TODO
// LAST UPDATED: 2026-06-21 — refactored to use shared createScrollAnimation factory
// ============================================================

// JS CLASS

// imports
import { createScrollAnimation } from '../../../js/scrollAnimation';

export class MembershipClass {
	constructor(_root, _styles) {
    this.root = _root;
    this.styles = _styles;

    createScrollAnimation(this.root, this.styles, {
      duration: 500,
      initialDelay: 250,
      stagger: 125,
      selectors: [
        { name: `.${this.styles.Title}` },
        { name: `.${this.styles.SubTitle}` },
        { name: `.${this.styles.Body}`, all: true },
        { name: `.${this.styles.Cta}` },
      ],
    });
	}

  init() {
    // animation handled by createScrollAnimation
  }
}
