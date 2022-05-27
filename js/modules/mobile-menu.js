import outsideClick from './outside-click.js';

export default function iniMenuMobile() {
  const btnMenu = document.querySelector('[data-menu="button"]');
  const listMenu = document.querySelector('[data-menu="list"]');
  const classActive = 'active';
  const events = ['click', 'touchstart'];

  if (btnMenu) {

    function openMenu(event) {
      listMenu.classList.add(classActive);
      btnMenu.classList.add(classActive);
      outsideClick(listMenu, events, () => {
        listMenu.classList.remove(classActive);
        btnMenu.classList.remove(classActive);
      })
    }

    events.forEach((event) => btnMenu.addEventListener(event, openMenu));
  }
}