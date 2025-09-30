// HOMEPAGE CLASS

// imports
import IntersectionObsClass from "../../js/intersectionObserver";

export default class HomepageClass {
  constructor() {
    this.slides = document.querySelectorAll('.slide');
    this.intObs = new IntersectionObsClass(this.slides, {
      threshold: .125,
      rootMargin: '0px 0px -375px 0px',
      logging: false,
    });
  }

  init() {
  }
}
