import { limit } from 'firebase/firestore';
import API from './apiService/movieAPI';
import { loadList } from './modalBtn';
import { notiflixLoading, notiflixLoadingRemove } from './loading';

import { addToWatchedList, addToQueueList } from './modalBtn';
import { cardAddIcon } from './cardAddIcon';


export const refs = {
  img: document.querySelector('.modal__preview-img'),
//   discTitle: document.querySelector('.discription__title'),
//   rait: document.querySelector('.mvi__rait'),
//   watch: document.querySelector('.mvi__watch'),
//   pop: document.querySelector('.mvi__pop'),
//   mviName: document.querySelector('.mvi__name'),
//   mviGenre: document.querySelector('.mvi__genre'),
//   discText: document.querySelector('.discription__about-text'),
  backdrop: document.querySelector('.backdrop'),
  body: document.querySelector('body'),
  gallery: document.querySelector('.films__list'),
  
//   closeBtn: document.querySelector('.modal__close-btn'),
  modal: document.querySelector('.modal'),
};
let btnW = '';
let btnQ = '';

document.addEventListener('click', function (e) {
  if (
    e.target.classList.contains('films__item') ||
    e.target.closest('.films__item')
  )
    openCart(e);

    if (
        e.target.classList.contains('modal__close-btn') ||
        e.target.closest('.modal__close-btn')
      )
        closeModal(e);
});

refs.backdrop.addEventListener('click', onBackdropCloseModal);

let serchId = 0;

function openCart(e) {

  const liItem = e.path.filter(a => a.nodeName === 'LI')[0];


  notiflixLoading();
  serchId = liItem.dataset.id;
  onOpenModal(serchId);
  return serchId;
}

function onOpenModal(serchId) {
  insertMarkup(serchId);
  refs.backdrop.classList.remove('isHidden');
  refs.body.classList.add('scroll');
  document.addEventListener('keydown', onEscClose);
  notiflixLoadingRemove();
}

function onEscClose(e) {
  if (e.code === 'Escape') closeModal();
  document.removeEventListener('keydown', onEscClose);
}

function closeModal() {
    cardAddIcon();

  refs.backdrop.classList.add('isHidden');
  refs.body.classList.remove('scroll');
  clearMarkup();

}

function onBackdropCloseModal(e) {
  if (e.currentTarget === e.target) {
    closeModal();
  }
}

function createPoster(posterLink) {
  const url = 'https://image.tmdb.org/t/p/w500';
  const poster = `/camera.16990362.jpg`;
  const a = posterLink ? url + posterLink : poster;
  return a;
}
let watchedList = '';

async function insertMarkup(idForSearch) {
  const serchMove = await API.getMovieById(idForSearch);
  const {
    original_title,
    poster_path,
    vote_average,
    vote_count,
    popularity,
    overview,
    id,
  } = serchMove;
  const genre = serchMove.genres.reduce((acc, a) => [...acc, a.name], []);

  refs.backdrop.classList.remove('isHidden');

  const status = checkStatus(idForSearch);

  const marckupWatchText = status.watched
    ? 'remove from watched'
    : 'add to watched';
  const marckupqueueText = status.queue
    ? 'remove from queue'
    : 'add to queue';

  const markup = `
<button class="modal__close-btn">
  <svg class="modal__close-btn-svg" width="30" height="30">
    <use href="/Filmoteka/symbol-defs.a103b832.svg#icon-close"></use>
  </svg>
</button>
<div class="modal__preview">
  <img src="${createPoster(poster_path)}" />
</div>
<div class="modal__discription">
  <h2 class="discription__title">${original_title}</h2>
  <ul class="discription__mvi">
    <li class="mvi">
      <p class="mvi__key">Vote / Votes</p>
      <p class="mvi__val">
        <span class="mvi__rait">${vote_average.toFixed(2)}</span
        ><span class="mvi__slash">/</span
        ><span class="mvi__watch">${vote_count}</span>
      </p>
    </li>
    <li class="mvi">
      <p class="mvi__key">Popularity</p>
      <p class="mvi__val mvi__pop">${popularity.toFixed(1)}</p>
    </li>
    <li class="mvi">
      <p class="mvi__key">Original Title</p>
      <p class="mvi__val mvi__name">${original_title}</p>
    </li>
    <li class="mvi">
      <p class="mvi__key">Genre</p>
      <p class="mvi__val mvi__genre">${genre.join(', ')}</p>
    </li>
  </ul>
  <h3 class="discription__about">About</h3>
  <p class="discription__about-text">${overview}</p>
  <div class="button">
    <button class="button__add add-btn__watched" id=${serchId}>
      ${marckupWatchText}
    </button>
    <button class="button__add add-btn__queue" id=${serchId}>
      ${marckupqueueText}
    </button>
  </div>
</div>`;
  refs.modal.insertAdjacentHTML('afterbegin', markup);

  btnW = document.querySelector('.add-btn__watched');
  btnQ = document.querySelector('.add-btn__queue');

  // marckupBtn(idForSearch)

  const watchStatus = status.watched ? 'disabl' : 'y';
  const queueStatus = status.queue ? 'disabl' : 'y';

  btnW.classList.add(watchStatus);
  btnQ.classList.add(queueStatus);

    btnW.addEventListener("click", function(e) {
    
    addToWatchedList(e)
})
    btnQ.addEventListener("click", function(e) {
   
       addToQueueList(e)
})
}

function clearMarkup() {
  
    const watchedList = document.querySelector('.add-btn__watched')
    const queueList = document.querySelector('.add-btn__queue')

  refs.modal.innerHTML = '';
  // watchedList.innerHTML = '';
  // watchedList.classList.remove('disabl');
  // queueList.innerHTML = '';
  // queueList.classList.remove('disabl');
}

function checkStatus(id) {
  const storageList = loadList('moveList');

  let chooseFilm = -1;

  for (let i = 0; i < storageList.length; i += 1) {
    chooseFilm = i;
    if (Number(storageList[i].id) === Number(id)) {
      break;
    } else {
      chooseFilm = -1;
    }
  }
  const watched = chooseFilm < 0 ? false : storageList[chooseFilm].watched;
  const queue = chooseFilm < 0 ? false : storageList[chooseFilm].queue;
  return { watched, queue };
}
