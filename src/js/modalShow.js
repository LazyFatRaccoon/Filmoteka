import { limit } from 'firebase/firestore';
import API from './apiService/movieAPI';
import { loadList } from './modalBtn';
import { notiflixLoading, notiflixLoadingRemove } from './loading';
import { addToWatchedList, addToQueueList } from './modalBtn';
import { cardAddIcon } from './cardAddIcon';
import { async } from '@firebase/util';

export const refs = {
  img: document.querySelector('.modal__preview-img'),
  backdrop: document.querySelector('.backdrop'),
  body: document.querySelector('body'),
  modal: document.querySelector('.modal'),
  modal: document.querySelector('.modal'),

};

document.addEventListener('click', modalEventListener);

function modalEventListener(e) {
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
}

function openCart(e) {
  refs.backdrop.addEventListener('click', onBackdropCloseModal);

  const liItem = e.path.filter(a => a.nodeName === 'LI')[0];

  notiflixLoading();
  const serchId = liItem.dataset.id;
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

  document.removeEventListener('keydown', onEscClose);
  refs.backdrop.removeEventListener('click', onBackdropCloseModal);
  refs.backdrop.classList.add('isHidden');
  refs.body.classList.remove('scroll');
  const btnW = document.querySelector('.add-btn__watched');
  const btnQ = document.querySelector('.add-btn__queue');

  btnW.removeEventListener("click", addToWatchedList)
  btnQ.removeEventListener("click", addToQueueList)
  clearMarkup();

}

function onBackdropCloseModal(e) {
  if (e.currentTarget === e.target) {
    closeModal();
  }
}

function createPoster(posterLink) {
  const url = 'https://image.tmdb.org/t/p/w500';

  const poster = `/Filmoteka/camera.29a7bb66.jpg`;
  return posterLink ? url + posterLink : poster;
}

async function insertMarkup(serchId) {
  const serchMove = await API.getModifiedSingleMovie(serchId);

  const {
    original_title,
    poster_path,
    vote_average,
    vote_count,
    popularity,
    overview,
    id,
    watched,
    queue,
    genres,
  } = serchMove;


  refs.backdrop.classList.remove('isHidden');

  const marckupWatchText = watched

    ? 'remove from watched'
    : 'add to watched';
  const marckupqueueText = queue
    ? 'remove from queue'
    : 'add to queue';

  const markup = `
  <button class="modal__close-btn">
    <svg class="modal__close-btn-svg" width="30" height="30">

      <use href="/Filmoteka/symbol-defs.a103b832.svg#icon-close"></use>


  </button>
  <div class="modal__preview">
    <img src="${createPoster(poster_path)}" loading="lazy" class="modal__preview-img"/>
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

        <p class="mvi__val mvi__genre">${genres.join(', ')}</p>

      </li>
    </ul>
    <h3 class="discription__about">About</h3>
    <p class="discription__about-text">${overview}</p>
    <div class="button">

      <button class="button__add add-btn__watched" id=${id}>
        ${marckupWatchText}
      </button>
      <button class="button__add add-btn__queue" id=${id}>

        ${marckupqueueText}
      </button>
    </div>
  </div>`;
  refs.modal.insertAdjacentHTML('afterbegin', markup);

  const btnW = document.querySelector('.add-btn__watched');
  const btnQ = document.querySelector('.add-btn__queue');

  const watchStatus = watched ? 'disabl' : 'y';
  const queueStatus = queue ? 'disabl' : 'y';

  btnW.classList.add(watchStatus);
  btnQ.classList.add(queueStatus);


  btnW.addEventListener("click", addToWatchedList)
  btnQ.addEventListener("click", addToQueueList)

}

function clearMarkup() {
  refs.modal.innerHTML = '';
}















// ===========================================================

// async function checkStatus(id) {
//   const move = await API.getModifiedSingleMovie(id)
//   const watchedList = loadList('watchedList');
//   const queueList = loadList('queueList');

//   const watchedStatus = watchedList.includes(Number(id))
//   const queueStatus = queueList.includes(Number(id))

//   const watched = watchedStatus ? move.watched : false;
//   const queue = queueStatus ? move.queue : false;

//   return { watched, queue }
// }


// function checkStatus(id) {
//   const storageList = loadList('moveList');

//   let chooseFilm = -1;

//   for (let i = 0; i < storageList.length; i += 1) {
//     chooseFilm = i;
//     if (Number(storageList[i].id) === Number(id)) {
//       break;
//     } else {
//       chooseFilm = -1;
//     }
//   }
//   const watched = chooseFilm < 0 ? false : storageList[chooseFilm].watched;
//   const queue = chooseFilm < 0 ? false : storageList[chooseFilm].queue;
//   return { watched, queue };
// }

