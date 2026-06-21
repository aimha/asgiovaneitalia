// ============================================================
// ROLE: Activities intersection animation triggers
// DEPENDS ON: ../../../js/scrollAnimation
// USED BY: Activities.jsx
// KEY DECISIONS: TODO
// GOTCHAS: TODO
// LAST UPDATED: 2026-06-21 — refactored to use shared createScrollAnimation factory
// ============================================================

// JS CLASS

// imports
import { createScrollAnimation } from '../../../js/scrollAnimation';

export class ActivitiesClass {
	constructor(_root, _styles) {
    this.root = _root;
    this.styles = _styles;

    createScrollAnimation(this.root, this.styles, {
      duration: 500,
      initialDelay: 125,
      stagger: 125,
      selectors: [
        { name: `.${this.styles.Title}` },
        { name: `.${this.styles.Card}`, all: true },
        { name: `.${this.styles.CardTitle}`, all: true },
        { name: `.${this.styles.CardBody}`, all: true },
      ],
    });
	}

  init() {
    // animation handled by createScrollAnimation
  }
}
