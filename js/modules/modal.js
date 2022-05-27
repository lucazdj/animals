export default function initModal() {
  const btnOpen = document.querySelector('[data-modal="open"]');
  const btnClose = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');
  const classActive = 'active';

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle(classActive);
  }

  if (btnOpen && btnClose && containerModal) {
    btnOpen.addEventListener('click', toggleModal);
    btnClose.addEventListener('click', toggleModal);

    containerModal.addEventListener('click', (event) => {
      if (event.target === containerModal) {
        toggleModal(event);
      }
    });
  }
}
