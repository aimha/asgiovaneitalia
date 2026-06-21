// ============================================================
// ROLE: ParallaxClass — image parallax effect on scroll
// DEPENDS ON: none
// USED BY: Hero.module.js (parallax)
// KEY DECISIONS: TODO
// GOTCHAS: TODO
// LAST UPDATED: 2026-06-21 — added file header
// ============================================================

// Image Parallax CLASS

export class ParallaxClass {
  constructor(imgsArray) {
    this.imgs = [...imgsArray];
  }

  init() {
    this.imgs.forEach((el) => {
      const scrollPosition = window.pageYOffset;
      const parentOffset = el.parentElement.offsetTop;
      const elementOffset = el.offsetTop + parentOffset;
      const speed = 0.25;
  
      const translateY = (scrollPosition - elementOffset) * speed;
      el.style.transform = `translateY(${translateY}px)`;
    });
  }
}
