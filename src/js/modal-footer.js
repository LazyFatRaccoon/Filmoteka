import { devolopers } from './devolopers.js';

const refs = {
    openModalBtn: document.querySelector(".footer_link"),
    closeModalBtn: document.querySelector(".modal-close-btn"),
    Background: document.querySelector(".backdrop-footer"),
    modal: document.querySelector(".modal-footer"),
    list: document.querySelector(".list-developer"),
    body: document.body
};

  
  refs.openModalBtn.addEventListener("click", toggleModal);
  

  // refs.modal.classList.remove("open-footer");
  // refs.Background.classList.remove("open-footer");


function disableScroll() {
    refs.body.classList.add("disable-scroll")
}
  
function enableScroll() {
    refs.body.classList.remove("disable-scroll")
  }

  function toggleModal() {
    refs.modal.classList.toggle("open-footer");
    refs.Background.classList.toggle("open-footer");
    disableScroll()
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.Background.addEventListener("click", escapeBackground);
    if (!refs.modal.classList.contains("open-footer")) {
      enableScroll()
      refs.closeModalBtn.removeEventListener("click", toggleModal);
      refs.Background.removeEventListener("click", escapeBackground);
    }
    return
}

window.addEventListener("keydown", keypressCounter)

function keypressCounter(event) {
  const { code } = event;
  if (code === "Escape" && refs.modal.classList.contains("open-footer")) {
    refs.modal.classList.toggle("open-footer");
    refs.Background.classList.toggle("open-footer");
    enableScroll()
      refs.closeModalBtn.removeEventListener("click", toggleModal);
      refs.Background.removeEventListener("click", escapeBackground);
    return
 }
}

function escapeBackground() {
  if (refs.modal.classList.contains("open-footer")) {
    refs.modal.classList.toggle("open-footer");
    refs.Background.classList.toggle("open-footer");
    enableScroll()
      refs.closeModalBtn.removeEventListener("click", toggleModal);
      refs.Background.removeEventListener("click", escapeBackground);
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