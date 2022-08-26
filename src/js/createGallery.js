import API from './apiService/movieAPI';
import ALLGANRES from '../data/genres.json';

consolePopular();
async function consolePopular() {
  const data = await API.getPopularMovies(1);
  createGallery(data.results);
}

function createGanresFilmArray(ganresId) {
  let ganresFilm = [];
  const ganresName = ganresId.reduce((acc, item) => {
    ganresFilm.push(` ${ALLGANRES.genres.find(e => e.id === item).name}`);
  }, 0);
  if (ganresFilm.length > 2) {
    ganresFilm.push(' Other');
    ganresFilm.splice(2, ganresFilm.length - 3);
  }
  return ganresFilm;
}

const filmsListEl = document.querySelector('.films__list');

function createGallery(filmsArry) {
  const result = filmsArry.reduce(
    (acc, item) =>
      (acc += `
            <li class="films__item">
              <a class="films__link" href="">
                <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${
                  item.poster_path
                }" alt="" />
                <div class="films__decor">
                  <h2 class="films__title">${item.title}</h2>
                  <p class="films__description">${createGanresFilmArray(
                    item.genre_ids
                  )} | ${item.release_date.slice(0, 4)}</p>
                </div>
             </a>
            </li>`),
    ''
  );

  filmsListEl.insertAdjacentHTML('beforeend', result);
}
