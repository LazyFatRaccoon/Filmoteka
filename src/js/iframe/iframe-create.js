import API from "../apiService/movieAPI";
import { Notify } from "notiflix";


const gallery = document.querySelector('.films__list');
const modalWindow = document.querySelector('.modal__preview');

gallery.addEventListener('click', getTrailer);


async function getTrailer(event) {
    const liItem = event.path.filter(a => a.nodeName === 'LI')[0]
    idFilm = liItem.dataset.id
    try { 
        const data = await API.getModifiedSingleMovie(`${idFilm}`);
        const checkSite = data.trailers[0].site;
        if (checkSite === "YouTube") {
            const filmKey = data.trailers[0].key;
            const ref = `<a 
            class="iframe-lightbox-link"
            href="https://www.youtube.com/embed/${filmKey}?autoplay=0">YouTube
            </a>`;

            modalWindow.insertAdjacentHTML('beforeend', ref);
            [].forEach.call(document.getElementsByClassName("iframe-lightbox-link"), function(el) {
              el.lightbox = new IframeLightbox(el);
            });
        }
        else {
        Notify.failure('Sorry, but there is no trailer for this film');
        }
    }
    catch(error) {
        console.log(error);
    };
};