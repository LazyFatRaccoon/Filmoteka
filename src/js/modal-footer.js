 const refs = {
    openModalBtn: document.querySelector(".footer_link"),
    closeModalBtn: document.querySelector(".modal-close-btn"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-footer");
}