// ============================================================
// ROLE: Activities section scroll-triggered animations
// DEPENDS ON: AnimationClass
// USED BY: Activities.jsx
// LAST UPDATED: 2026-03-19 - Removed all comments (bulk cleanup)
// ============================================================
import AnimationClass from '../../../js/animation'

export default class ActivitiesClass {
  constructor(_root, _styles) {
    this.root = _root
    this.styles = _styles

    this.tl_elements = new AnimationClass({
      duration: 500,
      initialDelay: 125,
      stagger: 125,
      easing: 'cubic-bezier(0, 0, 0.3, 1)',
    })
  }

  init() {
    this.root.addEventListener('intersect', e => {
      const list = [
        e.target.querySelector(`.${this.styles.Title}`),
        ...e.target.querySelectorAll(`.${this.styles.Card}`),
        ...e.target.querySelectorAll(`.${this.styles.CardTitle}`),
        ...e.target.querySelectorAll(`.${this.styles.CardBody}`),
      ]

      this.tl_elements.animateElement(list, [
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ])
    })
  }
}
