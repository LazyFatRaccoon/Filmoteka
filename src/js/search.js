import { Notify } from "notiflix";

const submitForm = document.querySelector('.header__form');
const inputArea = document.querySelector('.header__input');

submitForm.addEventListener('submit', onSearch);


async function onSearch(event) {
    event.preventDefault();
}