(() => {
    const refs = {
      openBtnModal: document.querySelector("[data-modal-open]"),
      closeBtnModal: document.querySelector("[data-modal-close]"),
      backdrop: document.querySelector("[data-backdrop]"),
      modal: document.querySelector("[data-modal]"),
    };
    refs.openBtnModal.addEventListener("click", toggleModal);
    refs.closeBtnModal.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("effect");
      refs.backdrop.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();