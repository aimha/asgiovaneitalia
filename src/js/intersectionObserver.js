// INTERSECTION OBSERVER CLASS

export default class IntersectionObsClass {
  constructor(target = [], options = {}) {
    // get target elements
    this.target = target;
    // create intersection event
    this.event = new Event('intersect');

    // default options
    this.options = {
      ...{
        threshold: .25,
        rootMargin: '0px 0px -50px 0px',
        logging: false,
      },
      ...options
    }

    // create new intersection observer
    this.observer = new IntersectionObserver( list => {
      list.forEach( (el) => {
        // if element is intersecting dispatch "intersect" event
        if (el.isIntersecting) {
          // dispatch event
          el.target.dispatchEvent(this.event);
          // remove element from observed list
          this.observer.unobserve(el.target);
          // logging
          if (this.options.logging) {
            console.log('Event dispatched', this.event);
            console.log('Element removed.', el.target);
          } 
        }
      });
    },
    this.options
    );

    this.target.forEach(el => {
      this.observer.observe(el);
    });
  }
}
