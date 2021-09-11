(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-open')
      refs.modal.classList.toggle('is-hidden');
    }
  })();

  (() => {
    const menuNavLink = document.querySelector('[data-menu-link]');
    const menuBtnRef = document.querySelector('[data-menu-close]');
    const mobileMenuRef = document.querySelector('[data-menu]');
    menuNavLink.addEventListener('click', () => {
      mobileMenuRef.classList.toggle('is-hidden');
      menuBtnRef.classList.toggle('is-open');
    });
  })();