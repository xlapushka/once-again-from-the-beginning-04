(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleleModal);
  refs.closeModalBtn.addEventListener('click', toggleleModal);

  function toggleleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
