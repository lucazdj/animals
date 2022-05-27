import outsideClick from './outside-click.js';

export default function initDropdownMenu() {

  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  const classActive = 'active';

  dropdownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle(classActive);
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove(classActive);
    });
  }
}

