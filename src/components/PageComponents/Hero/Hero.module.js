// JS CLASS

// imports
import AnimationClass from "../../../js/animation";

export default class HeroClass {
	constructor(_root, _styles) {
    this.root = _root;
    this.styles = _styles;

    this.cta = this.root.querySelector(`.${this.styles.Cta}`);

    this.tl_bg = new AnimationClass({
      duration: 1500,
      initialDelay: 125,
      stagger: 0,
      easing: 'cubic-bezier(0, 0, 0.3, 1)'
    });

    this.tl_elements = new AnimationClass({
      duration: 500,
      initialDelay: 500,
      stagger: 250,
      easing: 'cubic-bezier(0, 0, 0.3, 1)'
    });
	}

	init() {

    this.scollHandler();

    this.root.addEventListener('intersect', (e) => {
      const list = [
        e.target.querySelector(`.${this.styles.Title}`),
        e.target.querySelector(`.${this.styles.Claim}`),
        e.target.querySelector(`.${this.styles.Cta}`),
      ];

      // this.tl_bg.animateElement(
      //   [this.root],
      //   [
      //     {opacity: 0},
      //     {opacity: 1}
      //   ]
      // );

      // this.tl_elements.animateElement(
      //   list,
      //   [
      //     {opacity: 0, transform: 'translateY(20px)'},
      //     {opacity: 1, transform: 'translateY(0)'}
      //   ]
      // );
    });
  }

  scollHandler() {
    this.cta.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector('#about');
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
}
