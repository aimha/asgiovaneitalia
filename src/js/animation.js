// ============================================================
// ROLE: Web Animations API wrapper supporting staggered animations and callbacks
// DEPENDS ON: native Web Animations API
// USED BY: All .module.js component classes
// GOTCHAS: delay is mutated per-element; method chaining supported
// LAST UPDATED: 2026-03-19 - Removed all comments (bulk cleanup)
// ============================================================
export default class AnimationClass {
  constructor(defaults = {}) {
    this.defaults = {
      ...{
        duration: 500,
        iterations: 1,
        easing: 'linear',
        delay: 0,
        fill: 'forwards',
        stagger: 0,
        initialDelay: 0,
        clearProps: false,
        callback: () => {},
      },
      ...defaults,
    }
  }

  animateElement(target, customProps = [], optns = {}) {
    const options = { ...this.defaults, ...optns }

    target.forEach((el, index) => {
      options.delay = index * options.stagger + options.initialDelay

      const a = el.animate(customProps, options)

      a.onfinish = () => {
        if (!options.clearProps) {
          a.commitStyles()
        }

        options.callback()
      }
    })

    return this
  }
}
