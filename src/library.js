
import './js/loaderGIF-library';
import './js/foter-scrolltop';
import './js/modalBtn';
import './js/modalShow';
import './js/modal-footer';



import API from './js/apiService/movieAPI'
import {initPagination} from './js/pagination-try'

let watchedList = JSON.parse(localStorage.getItem('wathedList')) || [];
let queueList =  JSON.parse(localStorage.getItem('queueList')) || [];

const watchedBtn = document.querySelector('#watchedBtn')
const queueBtn = document.querySelector('#queueBtn')
const emptyGallery = document.querySelector('.empty')
const pagination = document.querySelector('#pagination')
const galleryLibrary = document.querySelector('.films__list')

if (document.title === 'Filmoteka-library') galleryRender(queueList);

queueBtn.addEventListener('click', function(){
    if (queueBtn.classList.contains('selected')) return;
    queueBtn.classList.add('selected')
    watchedBtn.classList.remove('selected')

    queueList = JSON.parse(localStorage.getItem('queueList')) || []; 
    galleryRender(queueList)
})

watchedBtn.addEventListener('click', function(){
    if (watchedBtn.classList.contains('selected')) return;
    watchedBtn.classList.add('selected')
    queueBtn.classList.remove('selected')
    watchedList = JSON.parse(localStorage.getItem('watchedList')) || [];
    galleryRender(watchedList)
})



function galleryRender(moviesList) {
    (moviesList.length === 0) ? emptyGallery.classList.remove("hide") : emptyGallery.classList.add("hide");
    (moviesList.length === 0) ? pagination.classList.add("hide") : pagination.classList.remove("hide");
    (moviesList.length === 0) ? galleryLibrary.classList.add("hide") : galleryLibrary.classList.remove("hide");

    let page = 1; 
    initPagination({
      page,
      itemsPerPage: 20,
      totalItems: moviesList.length,
      data: 'library',
      firstTime: true,
      list: moviesList,
    });
  }
