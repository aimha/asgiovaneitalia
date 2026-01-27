// JS CLASS

// imports
import AnimationClass from '../../js/animation.js';

export default class GalleryClass {
  constructor(root, styles, setActiveIndex) {
    this.root = root;
    this.styles = styles;
    this.setActiveIndex = setActiveIndex;
    this.modal = document.querySelector(`.${styles.Modal}`);

    this.tl_modal = new AnimationClass({
      duration: 250,
      initialDelay: 0,
      stagger: 0,
      easing: 'cubic-bezier(0, 0, 0.3, 1)'
    });
  }

  init() {
    this.clickHandler();
  }

  clickHandler() {
    document.addEventListener('click', (e) => {
      if (e.target.matches(`.${this.styles.GalleryEl}`)) {
        this.setActiveIndex(e.target.dataset.index);
        this.modal.classList.remove(`${this.styles.Modal__Hidden}`);

        this.tl_modal.animateElement(
          [this.modal],
          [
            {opacity: 0},
            {opacity: 1}
          ]
        );
      }

      if (
        e.target.matches(`.${this.styles.Modal}`) &&
        !this.modal.classList.contains(`${this.styles.Modal__Hidden}`)
      ) {
        this.tl_modal.animateElement(
          [this.modal],
          [
            {opacity: 1},
            {opacity: 0}
          ],
          {
            callback: () => {
              this.modal.classList.add(`${this.styles.Modal__Hidden}`);
            }
          }
        );
      }
    });
  }
}
