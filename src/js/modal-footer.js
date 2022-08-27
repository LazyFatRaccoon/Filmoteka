const refs = {
  openModalBtn: document.querySelector(".footer_link"),
  closeModalBtn: document.querySelector(".modal-close-btn"),
  modal: document.querySelector("[data-modal]"),
  Background: document.querySelector(".backdrop-footer"),
  modal: document.querySelector(".modal-footer"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
refs.Background.addEventListener("click", escapeBackground)

function toggleModal() {
  refs.modal.classList.toggle("is-hidden-footer");
  refs.Background.classList.toggle("is-hidden-footer");
  return
}

window.addEventListener("keydown", keypressCounter)

function keypressCounter(event) {
const { code } = event;
if (code === "Escape" &&! refs.modal.classList.contains("is-hidden-footer")) {
  refs.modal.classList.toggle("is-hidden-footer");
  refs.Background.classList.toggle("is-hidden-footer");
  return
}
}

function escapeBackground() {
if (!refs.modal.classList.contains("is-hidden-footer")) {
  refs.modal.classList.toggle("is-hidden-footer");
  refs.Background.classList.toggle("is-hidden-footer");
  return
}
} 