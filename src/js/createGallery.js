import API from './apiService/movieAPI';
import { initPagination } from './pagination-try';

if (document.title === 'Filmoteka') consoleModifiedPopular();

async function consoleModifiedPopular() {
  const data = await API.getModifiedMoviesList(1);
  const { page, results, total_results } = data;
  console.log(data);

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
  return `./src/images/camera.jpg`;
}

const filmsListEl = document.querySelector('.films__list');

export function createGallery(filmsArry) {
  filmsListEl.innerHTML = '';
  console.log(filmsArry);
  const result = filmsArry.reduce(
    (acc, item) =>
      (acc += `
            <li class="films__item" data-id="${item.id}">
              <img class="films__img" src="${createPosterFilm(
                item.poster_path
              )}" alt="${item.overview}" />
                <div class="films__decor">
                  <h2 class="films__title">${item.title}</h2>
                  <p class="films__description">${createGenresFilmArray(
                    item.genre_ids ?? item.genres
                  )} | ${createYearFilm(item.release_date.slice(0, 4))}</p>
             </div>
            </li>`),
    ''
  );

  filmsListEl.insertAdjacentHTML('beforeend', result);
}
