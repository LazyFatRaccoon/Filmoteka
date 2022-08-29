import API from "./apiService/movieAPI";
import { Notify } from "notiflix";
import { notiflixLoading, notiflixLoadingRemove } from './loading';
import IframeLightbox from 'iframe-lightbox';


const gallery = document.querySelector('.films__list');
const btnTrailer = document.querySelector('.onTrailer');
const modalWindow = document.querySelector('.modal');
const btnClose = document.querySelector('.modal__close-btn');

gallery.addEventListener('click', getTrailer);
btnTrailer.addEventListener('click', createTrailer);
btnClose.addEventListener('click', clearTrailer);

async function getTrailer(event) {
    const liItem = event.path.filter(a => a.nodeName === 'LI')[0]
    idFilm = liItem.dataset.id
    try { 
        const data = await API.getModifiedSingleMovie(`${idFilm}`);
        const checkSite = data.trailers[0].site;
        if (checkSite === "YouTube") {
            const filmKey = data.trailers[0].key;
            localStorage.setItem("ID", filmKey);
        }
        else {
        Notify.failure('Sorry, but there is no trailer for this film');
        }
    }
    catch(error) {
        console.log(error);
    };
};


function createTrailer() {
    const filmKey = localStorage.getItem("ID");
    const renderTrailer = 
     `<iframe
      id="trailer"
      src="https://www.youtube.com/embed/${filmKey}"
      width="200"
      height="200"
      frameborder="0"
      allowfullscreen
      allow="autoplay; encrypted-media"
     >
     </iframe>`
    notiflixLoading();
    modalWindow.insertAdjacentHTML('afterbegin', renderTrailer);
    btnTrailer.removeEventListener('click', createTrailer);
    notiflixLoadingRemove();
}
