// import API from './apiService/movieAPI';
// consolePopular();
// async function consolePopular() {
//   const data = await API.getPopularMovies(1);
//   console.log(data.results);
//   createGallery(data.results);
// }
// const filmsListEl = document.querySelector('.films__list');

// function createGallery(filmsArry) {
//   const result = filmsArry.reduce(
//     (acc, item) =>
//       (acc += `
//             <li class="films__item">
//               <a class="films__link" href="">
//                 <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2${
//                   item.poster_path
//                 }" alt="" />
//                 <div class="films__decor">
//                   <h2 class="films__title">${item.title}</h2>
//                   <p class="films__description">Drama | ${item.release_date.slice(
//                     0,
//                     4
//                   )}</p>
//                 </div>
//              </a>
//             </li>`),
//     ''
//   );

//   filmsListEl.insertAdjacentHTML('beforeend', result);
// }
