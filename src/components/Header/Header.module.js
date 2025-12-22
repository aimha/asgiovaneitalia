// JS CLASS

// imports
import AnimationClass from "../../js/animation";
import cubicBezier from "../../js/cubicBezier";

export default class HeaderClass {
	constructor(_root, _styles) {
		this.root = _root;
    this.styles = _styles;

		this.overlay = document.querySelector(`.${this.styles.MenuOverlay}`);

		this.links = document.querySelectorAll(`.${this.styles.MenuEl}`);

		this.menuClose = document.querySelector(`.${this.styles.MenuClose}`);

		this.tl_elements = new AnimationClass({
			duration: 250,
			initialDelay: 75,
			stagger: 125,
			easing: cubicBezier.celebratoryEaseOut
		});
	}

	init() {
		this.handleClick();
	}

	handleClick() {
		const openMenu = `${this.styles.ToggleIcon}`;
		const closeMenu = `${this.styles.MenuCloseIcon}`;
		const menuLinks = `${this.styles.MenuEl}`;

		document.addEventListener("click", (event) => {
			if(event.target.classList.contains(openMenu)) {
				this.overlay.classList.remove(`${this.styles.MenuOverlay__hidden}`);

				this.tl_elements.animateElement(
					[this.overlay],
					[
						{opacity: 0},
						{opacity: 1}
					]
				);

				this.tl_elements.animateElement(
					[...this.links, this.menuClose],
					[
						{opacity: 0, transform: `translateY(20px)`},
							{opacity: 1, transform: `translateY(0px)`},
					],
					{
						initialDelay: 250,
					}
				);
			}

			if(event.target.classList.contains(closeMenu)) {
				this.tl_elements.animateElement(
					[...this.links, this.menuClose],
					[
						{opacity: 1, transform: `translateY(0px)`},
							{opacity: 0, transform: `translateY(10px)`},
					],
					{
						initialDelay: 0,
						stagger: 0,
						duration: 125,
					}
				);

				this.tl_elements.animateElement(
					[this.overlay],
					[
						{opacity: 1},
						{opacity: 0},
					],
					{
						duration: 500,
						initialDelay: 125,
						callback: () => {
							this.overlay.classList.add(`${this.styles.MenuOverlay__hidden}`);
						}
					}
				);
			}

			if(event.target.classList.contains(menuLinks)) {
				const targetElem = document.querySelector("#" + event.target.dataset.target);

				this.tl_elements.animateElement(
					[...this.links, this.menuClose],
					[
						{opacity: 1, transform: `translateY(0px)`},
							{opacity: 0, transform: `translateY(10px)`},
					],
					{
						initialDelay: 0,
						stagger: 0,
						duration: 125,
					}
				);

				this.tl_elements.animateElement(
					[this.overlay],
					[
						{opacity: 1},
						{opacity: 0},
					],
					{
						duration: 500,
						initialDelay: 125,
						callback: () => {
							this.overlay.classList.add(`${this.styles.MenuOverlay__hidden}`);

							targetElem.scrollIntoView({ behavior: "smooth"});
						}
					}
				);

			}
		})
	}

}
