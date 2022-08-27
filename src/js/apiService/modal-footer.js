import { devolopers } from './devolopers.js';

const refs = {
    openModalBtn: document.querySelector(".footer_link"),
    closeModalBtn: document.querySelector(".modal-close-btn"),
    Background: document.querySelector(".backdrop-footer"),
    modal: document.querySelector(".modal-footer"),
    list: document.querySelector(".list-developer")
  };

  // refs.openModalBtn.addEventListener("click", toggleModal);
  // refs.closeModalBtn.addEventListener("click", toggleModal);
  // refs.Background.addEventListener("click", escapeBackground);

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

// const devolopers = [
//   { name: "Raccoon", image: "./images/Raccoon3.webp", work: "Tim-Lid", media:"https://github.com/LazyFatRaccoon" },
//   { name: "Станіслав Тищенко", image: "./images/Stanislav-Tishchenko.webp", work: "Tim-Lid", media:"https://github.com/Stanislav2022" },
//   { name: "Олександо Горжій", image: "./images/Raccoon3.webp", work: "Tim-Lid", media:"" },
//   { name: "Андрій Бачинский", image: "./images/Andriy-Bachynskyi.webp", work: "Tim-Lid", media:"https://github.com/Bachynckyi" },
//   { name: "Євгеній Медяник", image: "./images/Raccoon3.webp", work: "Tim-Lid", media:"" },
//   { name: "Олексадр Кравцов", image: "./images/Oleksandr-Kravtsov.webp", work: "Tim-Lid", media:"https://github.com/Kravtsov9983" },
//   { name: "Олександр Толочко", image: "./images/Oleksandr-Tolochko.webp", work: "Tim-Lid", media:"https://github.com/Alex-T-T" },
//   { name: "Володимир Болгов", image: "./images/Volodymyr-Bolgov.webp", work: "Tim-Lid", media:"https://github.com/VladymyrBolgov" },
//   { name: "Станіслав Завадський", image:  "./images/Stanislav-Zavadskyi.webp", work:"Tim-Lid", media:"https://github.com/uncle-Stas" },
// ] ;

function createDiv(array) {
    return array.reduce((acc, item) => acc + `<li>
<img src="${item.image}" alt="${item.name}" >
<div class="box-item">
    <p class="developer-name">${item.name}</p>
    <p class="developer-work">${item.work}</p>
</div>
  <li class="box-list">
    <a class="footer-link" href=${item.media} target="_blank">
    <svg class="svg" width="30" height="30">
    <use href="./images/symbol-defs.svg#icon-github-icon"></use>
    </svg>
    </a>
  </li>
</li>`, "")
}


refs.list.insertAdjacentHTML("beforeend", createDiv(devolopers) )

// devolopers.forEach(function (name, image, work, media) {
  
// })

// const createListDeveloper = (devolopers) => `<li>
// <img rsc="${devolopers.image}" alt="${devolopers.name}">
// <div class="box-item">
//     <p class="developer-name">${devolopers.name}</p>
//     <p class="developer-work">${devolopers.work}</p>
// </div>
//   <li class="box-list">
//     <a class="footer-link" href=${devolopers.media} target="_blank">
//     <svg class="svg" width="30" height="30">
//     <use href="./images/symbol-defs.svg#icon-github-icon"></use>
//     </svg>
//     </a>
//   </li>
// </li>`;

// const generatorContent = (array) => array.raduce((acc, item) => acc + createListDeveloper(item), "");

// const insertContent = (array) => {
//   const result = generatorContent(array);
//   list.insertAdjacentHTML("beforeend", result)
// }
