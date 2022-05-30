import outsideClick from './outside-click.js';

export default class MobileMenu {
  constructor(button, list, events) {
    this.btnMenu = document.querySelector(button);
    this.listMenu = document.querySelector(list);
    this.classActive = 'active';
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.listMenu.classList.add(this.classActive);
    this.btnMenu.classList.add(this.classActive);
    outsideClick(this.listMenu, this.events, () => {
      this.listMenu.classList.remove(this.classActive);
      this.btnMenu.classList.remove(this.classActive);
    });
  }

  addMobileMenuEvents() {
    this.events.forEach((event) => this.btnMenu.addEventListener(event, this.openMenu));
  }

  init() {
    if (this.btnMenu && this.listMenu) {
      this.addMobileMenuEvents();
    }
    return this;
  }
}
