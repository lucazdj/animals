export default class Modal {
  constructor(btnOpen, btnClose, container) {
    this.btnOpen = document.querySelector(btnOpen);
    this.btnClose = document.querySelector(btnClose);
    this.containerModal = document.querySelector(container);
    this.classActive = 'active';

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutModal = this.clickOutModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle(this.classActive);
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  addModalEvents() {
    this.btnOpen.addEventListener('click', this.eventToggleModal);
    this.btnClose.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickOutModal);
  }

  clickOutModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }

  init() {
    if (this.btnOpen && this.btnClose && this.containerModal) {
      this.addModalEvents();
    }
    return this;
  }
}
