// ============================================================
// ROLE: AnimationClass — wrapper for Web Animations API element.animate()
// DEPENDS ON: none
// USED BY: All *.module.js animation consumers
// KEY DECISIONS: TODO
// GOTCHAS: TODO
// LAST UPDATED: 2026-06-21 — added file header
// ============================================================

// ANIMATION CLASS

export class AnimationClass {
  constructor(defaults = {}) {
    // sub defaults if user defined
    this.defaults = {
      ...{
        duration: 500,
        iterations: 1,
        easing: 'linear',
        delay: 0,
        fill: "forwards",
        stagger: 0,
        initialDelay: 0,
        clearProps: false,
        callback: () => {}
      },
      ...defaults
    }
  }

  animateElement(target, customProps = [], optns = {}) {
    // merge with defaults
    const options = { ...this.defaults, ...optns};

    // loop through elements
    target.forEach((el, index) => {
      // calc stagger
      options.delay = index * options.stagger + options.initialDelay;
      // animate
      const a = el.animate(customProps, options);
      // callback
      a.onfinish = (e) => {
        // clearprops
        if (!options.clearProps) {
          a.commitStyles();
        }
        // custom callback
        options.callback();
      };
    });

    return this;
  }
}
