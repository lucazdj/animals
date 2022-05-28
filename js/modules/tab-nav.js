export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.classActive = 'active';
  }

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.classActive);
    });
    const classDirection = this.tabContent[index].dataset.animation;
    this.tabContent[index].classList.add(this.classActive, classDirection);
  }

  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
