export default class AccordionList {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.classActive = 'active';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.classActive);
    item.nextElementSibling.classList.toggle(classActive);
  }

  addAccordionEvent() {
    accordionList.forEach(((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    }));
  }

  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
