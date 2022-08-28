import { devolopers } from './devolopers.js';

const refs = {
    openModalBtn: document.querySelector(".footer_link"),
    closeModalBtn: document.querySelector(".modal-close-btn"),
    Background: document.querySelector(".backdrop-footer"),
    modal: document.querySelector(".modal-footer"),
    list: document.querySelector(".list-developer"),
    body: document.querySelector("body")
};

  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.Background.addEventListener("click", escapeBackground);

  function toggleModal() {
    refs.modal.classList.toggle("open-footer");
    refs.Background.classList.toggle("open-footer");
    return
}

window.addEventListener("keydown", keypressCounter)

function keypressCounter(event) {
  const { code } = event;
  if (code === "Escape" && refs.modal.classList.contains("open-footer")) {
    refs.modal.classList.toggle("open-footer");
    refs.Background.classList.toggle("open-footer");
    return
 }
}

function escapeBackground() {
  if (refs.modal.classList.contains("open-footer")) {
    refs.modal.classList.toggle("open-footer");
    refs.Background.classList.toggle("open-footer");
    return
  }
}


function createDiv(array) {
    return array.reduce((acc, item) => acc + `<div class="developer-list">
<img class="developer-foto" src="${item.image}" alt="${item.name}" >
<div class="developer-diskription" >
<div class="box-item">
    <p class="developer-name">${item.name}</p>
    <p class="developer-work">${item.work}</p>
    
  </li>
</div>
<div class="git-hub">
<li class="box-list">
    <a class="footer-link" href=${item.media} target="_blank">
    <img class="footer-logo" src="https://icones.pro/wp-content/uploads/2021/06/icone-github-orange.png" alt="GIT HUB" >
    </a>
</div>
</div>
</div>`, "")
}

refs.list.insertAdjacentHTML("beforeend", createDiv(devolopers));