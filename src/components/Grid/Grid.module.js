// ============================================================
// ROLE: Grid toggle logic — keypress listener
// DEPENDS ON: none
// USED BY: Grid.jsx
// KEY DECISIONS: TODO
// GOTCHAS: TODO
// LAST UPDATED: 2026-06-21 — added file header
// ============================================================

export class GridClass {
  constructor() {
    this.grid = document.querySelector('#grid');
  }

  init() {
    addEventListener('keypress', (event) => {
      if (event.key === 'g') {
        this.toggle();
      }
    });
  }

  toggle() {
    if (this.grid.classList.contains('hidden')) {
      this.grid.classList.remove('hidden');
    } else {
      this.grid.classList.add('hidden');
    }
  }
}
