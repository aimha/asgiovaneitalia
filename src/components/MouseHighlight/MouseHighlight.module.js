// ============================================================
// ROLE: MouseHighlight mousemove tracking + glow rendering
// DEPENDS ON: none
// USED BY: MouseHighlight.jsx
// KEY DECISIONS: Uses requestAnimationFrame throttling to prevent jank; listener only active on desktop (>=1020px)
// GOTCHAS: Hidden via CSS display:none under 1020px, but JS listener is also disabled below that width
// LAST UPDATED: 2026-06-21 — added rAF throttling, conditional listener, cached container ref
// ============================================================

export class MouseHighlightClass {
  constructor(mousecontainer, mousehighlight) {
    this.container = document.getElementsByClassName(mousecontainer)[0];
    this.highLight = document.getElementsByClassName(mousehighlight)[0];
    this.appContainer = document.querySelector('.app-container');
    this.rafPending = false;
    this.boundMouseMove = null;
    this.boundResize = null;
  }

  init() {
    this.boundMouseMove = (e) => this.handleMouseMove(e);
    this.boundResize = () => this.handleResize();

    if (window.innerWidth >= 1020) {
      document.addEventListener('mousemove', this.boundMouseMove);
    }
    window.addEventListener('resize', this.boundResize);
  }

  handleMouseMove(e) {
    if (this.rafPending) return;
    this.rafPending = true;

    requestAnimationFrame(() => {
      const containerScroll = this.appContainer.scrollTop;
      const x = e.clientX - 30;
      const y = e.clientY - 30;

      this.highLight.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      this.highLight.style.backgroundColor = containerScroll >= 1080 ? '#000000' : '#ffffff';

      this.rafPending = false;
    });
  }

  handleResize() {
    if (window.innerWidth >= 1020) {
      document.addEventListener('mousemove', this.boundMouseMove);
    } else {
      document.removeEventListener('mousemove', this.boundMouseMove);
    }
  }
}
