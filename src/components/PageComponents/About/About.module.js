// JS CLASS

// imports
import AnimationClass from "../../../js/animation";

export default class AboutClass {
	constructor(_root, _styles) {
    this.root = _root;
    this.styles = _styles;

    this.tl_elements = new AnimationClass({
      duration: 500,
      initialDelay: 0,
      stagger: 250,
      easing: 'cubic-bezier(0, 0, 0.3, 1)'
    });
	}

	init() {
    this.root.addEventListener('intersect', (e) => {
      
    });
	}
}
