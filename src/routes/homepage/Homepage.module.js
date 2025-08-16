// HOMEPAGE CLASS

// imports
import AnimationClass from "../../js/animation";
import cubicBezier from "../../js/cubicBezier";

export default class HomepageClass {
  constructor(title, paragraph) {
    this.title = document.querySelector(`.${title}`);
    this.paragraph = document.querySelectorAll(`.${paragraph}`);

    this.tl = new AnimationClass(
      {
        duration: 400,
        easing: cubicBezier.celebratoryEaseOut,
        stagger: 125,
        initialDelay: 250
      }
    );
  }

  init() {
    console.log('Homepage ok!');
  }
}
