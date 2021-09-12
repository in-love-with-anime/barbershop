(() => {
    const refs = {
      modal: document.querySelector('[data-modal]'),
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      mobileMenu: document.querySelector('[data-menu-links]'),
    };

    function toggleModal() {
        refs.modal.classList.toggle('is-open')
        refs.modal.classList.toggle('is-hidden');
    }

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    refs.mobileMenu.addEventListener('click', toggleModal);
})();
