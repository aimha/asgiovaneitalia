// JS CLASS

// imports
import AnimationClass from "../../../js/animation";

export default class AboutClass {
	constructor(_root, _styles) {
    this.root = _root;
    this.styles = _styles;

    this.tl_elements = new AnimationClass({
      duration: 500,
      initialDelay: 250,
      stagger: 250,
      easing: 'cubic-bezier(0, 0, 0.3, 1)'
    });
	}

	init() {
    this.root.addEventListener('intersect', (e) => {
      const list = [
        e.target.querySelector(`.${this.styles.Title}`),
        e.target.querySelector(`.${this.styles.SubTitle}`),
        ...e.target.querySelectorAll(`.${this.styles.Body}`),
      ];

      this.tl_elements.animateElement(
        list,
        [
          {opacity: 0, transform: 'translateY(20px)'},
          {opacity: 1, transform: 'translateY(0)'}
        ]
      );
    });
	}
}
