// ============================================================
// ROLE: Homepage logic - initializes IntersectionObserver for slide animations
// DEPENDS ON: IntersectionObsClass
// USED BY: Homepage.jsx
// KEY DECISIONS: threshold 0.125 and rootMargin -375px tuned for viewport trigger point
// LAST UPDATED: 2026-03-19 - Removed all comments (bulk cleanup)
// ============================================================
import IntersectionObsClass from '../../js/intersectionObserver'

export default class HomepageClass {
  constructor() {
    this.slides = document.querySelectorAll('.slide')
    this.intObs = new IntersectionObsClass(this.slides, {
      threshold: 0.125,
      rootMargin: '0px 0px -375px 0px',
      logging: false,
    })
  }

  init() {}
}
