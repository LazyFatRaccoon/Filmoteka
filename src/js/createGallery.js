import API from './apiService/movieAPI';
import { initPagination } from './pagination-try';
import { scrollTopTop } from './foter-scrolltop';

if (document.title === 'Filmoteka') consoleModifiedPopular();

async function consoleModifiedPopular() {
  const data = await API.getModifiedMoviesList(1);
  const { page, results, total_results } = data;
  

  initPagination({
    page,
    itemsPerPage: results.length,
    totalItems: total_results,
    data: 'popular',
    firstTime: true,
  });
}

function createGenresFilmArray(genresArray) {
  if (genresArray.length !== 0) {
    let genresFilm = [];
    const genresName = genresArray.reduce((acc, item) => {
      genresFilm.push(` ${item}`);
    }, 0);
    if (genresFilm.length > 2) {
      genresFilm.push(' Other');
      genresFilm.splice(2, genresFilm.length - 3);
    }
    return genresFilm;
  }
  return `No genre`;
}
function createYearFilm(year) {
  if (year) {
    return year;
  }
  return `N/A`;
}
function createPosterFilm(posterLink) {
  if (posterLink) {
    return `https://image.tmdb.org/t/p/w600_and_h900_bestv2${posterLink}`;
  }
  return `/Filmoteka/camera.29a7bb66.jpg`;
}
function createRating(ratind) {
  if (ratind) {
    return ratind.toFixed(1);
  }
  return `0.0`;
}

const filmsListEl = document.querySelector('.films__list');

export function createGallery(filmsArry) {
  filmsListEl.innerHTML = '';
  
  const result = filmsArry.reduce(
    (acc, item) =>
      (acc += `
            <li class="films__item" data-id="${item.id}">
              <img class="films__img" loading="lazy" src="${createPosterFilm(
                item.poster_path
              )}" alt="${item.overview}" />
                <div class="films__decor">
                  <h2 class="films__title">${item.title}</h2>
                  <div class="films__description"> 
                   <p class="films__description-text">${createGenresFilmArray(
                     item.genre_ids ?? item.genres
                   )} | ${createYearFilm(String(item.release_date).slice(0, 4))}</p>
                   <p class="films__description-rating">${createRating(
                     item.vote_average
                   )}</p>
                  </div>
                ${createSvg(item.watched, item.queue)}  
             </div>
            </li>`),
    ''
  );

  filmsListEl.insertAdjacentHTML('beforeend', result);
  scrollTopTop();
}

function createSvg(w, q) {
  if (w) {
    ;
    return `<svg class="films__svg" width="30" height="30">
                    <use href="/Filmoteka/login-icon.2e0a9156.svg#icon-watched"></use>
                  </svg>`;
  } else if (q) {
    
    return `<svg class="films__svg" width="30" height="30">
                    <use href="/Filmoteka/login-icon.2e0a9156.svg#icon-queue"></use>
                  </svg>`;
  } else {
    return `<svg class="films__svg" width="30" height="30" opacity="0">
                <use href=""></use>
</svg>`;
  }
}
