// ============================================================
// ROLE: History intersection animation triggers
// DEPENDS ON: ../../../js/scrollAnimation
// USED BY: History.jsx
// KEY DECISIONS: TODO
// GOTCHAS: TODO
// LAST UPDATED: 2026-06-21 — refactored to use shared createScrollAnimation factory
// ============================================================

// JS CLASS

// imports
import { createScrollAnimation } from '../../../js/scrollAnimation';

export class HistoryClass {
	constructor(_root, _styles) {
    this.root = _root;
    this.styles = _styles;

    createScrollAnimation(this.root, this.styles, {
      duration: 500,
      initialDelay: 125,
      stagger: 125,
      selectors: [
        { name: `.${this.styles.Title}` },
        { name: `.${this.styles.Body}` },
        { name: `.${this.styles.DatesTitle}` },
        { name: `.${this.styles.DatesItem}`, all: true },
      ],
    });
	}

  init() {
    // animation handled by createScrollAnimation
  }
}
