// HOMEPAGE CLASS

// imports
import IntersectionObsClass from "../../js/intersectionObserver";

export default class HomepageClass {
  constructor() {
    this.slides = document.querySelectorAll('.slide');
    this.intObs = new IntersectionObsClass(this.slides, {logging: false});
  }

  init() {
  }
}
