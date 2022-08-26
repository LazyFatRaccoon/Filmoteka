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

const filmsListEl = document.querySelector('.films__list');

export function createGallery(filmsArry) {
  filmsListEl.innerHTML = '';
  const result = filmsArry.reduce(
    (acc, item) =>
      (acc += `
            <li class="films__item" id="${item.id}">
              <div class="films__shell">
                <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${
                  item.poster_path
                }" alt="" />
                <div class="films__decor">
                  <h2 class="films__title">${item.title}</h2>
                  <p class="films__description">Drama | ${item.release_date.slice(
                    0,
                    4
                  )}</p>
                </div>
             </div>
            </li>`),
    ''
  );

  filmsListEl.insertAdjacentHTML('beforeend', result);
}
