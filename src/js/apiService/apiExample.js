// import API from './movieAPI'


// const refs = {
//     popularBtn: document.querySelector("#popular_request"),
//     searchBtn: document.querySelector("#search_request"), 
//     movieByIdBtn: document.querySelector("#movie_id_request"), 
//     genresBtn: document.querySelector("#genres_request"), 
//     trailersBtn: document.querySelector("#trailers_request"), 
//     modifiedPopularBtn: document.querySelector("#modified_popular_request"),
//     modifiedSearchBtn: document.querySelector("#modified_search_request"),
//     modifiedSingleMoviehBtn: document.querySelector("#modified_single_movie_request"),
// }

// refs.popularBtn.addEventListener('click', consolePopular)
// refs.searchBtn.addEventListener('click', consoleSearch)
// refs.movieByIdBtn.addEventListener('click', consoleMovieById)
// refs.genresBtn.addEventListener('click', consoleGenres)
// refs.trailersBtn.addEventListener('click', consoleTrailers)
// refs.modifiedPopularBtn.addEventListener('click', consoleModifiedPopular)
// refs.modifiedSearchBtn.addEventListener('click', consoleModifiedSearch)
// refs.modifiedSingleMoviehBtn.addEventListener('click', consoleModifiedSingleMovie)

// const watchedList = JSON.parse(localStorage.getItem('wachedList')) || [];
// watchedList.push(756999);
// localStorage.setItem('watchedList', JSON.stringify(watchedList));

// async function consolePopular() {
//     const data = await API.getPopularMovies(1)
//     console.log(data)
// }

// async function consoleSearch() {
//     const data = await API.getSearchMovies('cat',1)
//     console.log(data)
// }

// async function consoleMovieById() {
//     const data = await API.getMovieById(756999)
//     console.log(data)
// }

// async function consoleGenres() {
//     const data = await API.getGenres()
//     console.log(data)
// }

// async function consoleTrailers() {
//     const data = await API.getMovieTrailers(756999)
//     console.log(data)
// }

// async function consoleModifiedPopular() {
//     const data = await API.getModifiedMoviesList(1)
//     console.log(data)
// }

// async function consoleModifiedSearch() {
//     const data = await API.getModifiedMoviesList(1, 'cat')
//     console.log(data)
// }

// async function consoleModifiedSingleMovie() {
//     const data = await API.getModifiedSingleMovie(756999)
//     console.log(data)
// }
