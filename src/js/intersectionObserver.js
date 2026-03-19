// ============================================================
// ROLE: Intersection Observer wrapper that dispatches custom 'intersect' events
// DEPENDS ON: native IntersectionObserver API
// USED BY: HomepageClass
// GOTCHAS: One-time observation - element unobserved after first intersection
// LAST UPDATED: 2026-03-19 - Removed all comments (bulk cleanup)
// ============================================================
export default class IntersectionObsClass {
  constructor(target = [], options = {}) {
    this.target = target

    this.event = new Event('intersect')

    this.options = {
      ...{
        threshold: 0.25,
        rootMargin: '0px 0px -50px 0px',
        logging: false,
      },
      ...options,
    }

    this.observer = new IntersectionObserver(list => {
      list.forEach(el => {
        if (el.isIntersecting) {
          el.target.dispatchEvent(this.event)

          this.observer.unobserve(el.target)

          if (this.options.logging) {
            console.log('Event dispatched', this.event)
            console.log('Element removed.', el.target)
          }
        }
      })
    }, this.options)

    this.target.forEach(el => {
      this.observer.observe(el)
    })
  }
}
