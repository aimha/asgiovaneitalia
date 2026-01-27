// JS CLASS

export default class GalleryClass {
  constructor(root, styles, setActiveIndex) {
    this.root = root;
    this.styles = styles;
    this.setActiveIndex = setActiveIndex;
    this.modal = document.querySelector(`.${styles.Modal}`);
  }

  init() {
    this.clickHandler();
  }

  clickHandler() {
    document.addEventListener('click', (e) => {
      if (e.target.matches(`.${this.styles.GalleryEl}`)) {
        this.setActiveIndex(e.target.dataset.index);
        this.modal.classList.remove(`${this.styles.Modal__Hidden}`);
      }

      if (
        e.target.matches(`.${this.styles.Modal}`) &&
        !this.modal.classList.contains(`${this.styles.Modal__Hidden}`)
      ) {
        this.modal.classList.add(`${this.styles.Modal__Hidden}`);
      }
    });
  }
}
