
export default class GridClass {
  constructor() {
    this.grid = document.querySelector('#grid');
  }

  init() {
    console.log('bang')
    addEventListener('keypress', (event) => {
      if (event.key === 'g') {
        this.toggle();
      }
    });
  }

  toggle() {
    if (this.grid.classList.contains('hidden')) {
      this.grid.classList.remove('hidden');
    } else {
      this.grid.classList.add('hidden');
    }
  }
}
