(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelectorAll('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  for (let button of refs.openModalBtn) {
    button.addEventListener("click", toggleleModal);
  }

  for (let button of refs.closeModalBtn) {
    button.addEventListener("click", toggleleModal);
  }

  function toggleleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle('is-hidden');
  }
})();
