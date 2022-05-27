const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
const tabContent = document.querySelectorAll('[data-tab="content"] section');
const classActive = 'active';

function activeTab(index) {
  tabContent.forEach((section) => {
    section.classList.remove(classActive);
  });
  const classDirection = tabContent[index].dataset.animation;
  tabContent[index].classList.add(classActive, classDirection);
}

export default function initTabNav() {
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(classActive);

    tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
