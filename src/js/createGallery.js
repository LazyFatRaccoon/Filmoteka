import API from './apiService/movieAPI';
import { initPagination } from './pagination-try';
consoleModifiedPopular();

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

function createGanresFilmArray(ganresArray) {
  if (ganresArray.length !== 0) {
    let ganresFilm = [];
    const ganresName = ganresArray.reduce((acc, item) => {
      ganresFilm.push(` ${item}`);
    }, 0);
    if (ganresFilm.length > 2) {
      ganresFilm.push(' Other');
      ganresFilm.splice(2, ganresFilm.length - 3);
    }
    return ganresFilm;
  }
  return `No ganre`;
}
function createYearFilm(year) {
  if (year) {
    return year;
  }
  return `No year`;
}
function createPosterFilm(posterLink) {
  // if (posterLink) {
  //   return `https://image.tmdb.org/t/p/w600_and_h900_bestv2${posterLink}`;
  // }
  return `/src/images/no-poster-available.jpg`;
}

const filmsListEl = document.querySelector('.films__list');

export function createGallery(filmsArry) {
  filmsListEl.innerHTML = '';
  const result = filmsArry.reduce(
    (acc, item) =>
      (acc += `
            <li class="films__item" id="${item.id}">
              <div class="films__shell">
                <img src="${createPosterFilm(item.poster_path)}" alt="${
        item.overview
      }" />
                <div class="films__decor">
                  <h2 class="films__title">${item.title}</h2>
                  <p class="films__description">${createGanresFilmArray(
                    item.genre_ids
                  )} | ${createYearFilm(item.release_date.slice(0, 4))}</p>
                </div>
             </div>
            </li>`),
    ''
  );

  filmsListEl.insertAdjacentHTML('beforeend', result);
}
