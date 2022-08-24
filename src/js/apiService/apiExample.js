import API from './movieAPI'

const refs = {
    popularBtn: document.querySelector("#popular_request"),
    searchBtn: document.querySelector("#search_request"), 
    movieByIdBtn: document.querySelector("#movie_id_request"), 
    genresBtn: document.querySelector("#genres_request"), 
    trailersBtn: document.querySelector("#trailers_request"), 
}

refs.popularBtn.addEventListener('click', consolePopular)
refs.searchBtn.addEventListener('click', consoleSearch)
refs.movieByIdBtn.addEventListener('click', consoleMovieById)
refs.genresBtn.addEventListener('click', consoleGenres)
refs.trailersBtn.addEventListener('click', consoleTrailers)



async function consolePopular() {
    const data = await API.getPopularMovies(1)
    console.log(data)
}

async function consoleSearch() {
    const data = await API.getSearchMovies('cat',1)
    console.log(data)
}

async function consoleMovieById() {
    const data = await API.getMovieById(756999)
    console.log(data)
}

async function consoleGenres() {
    const data = await API.getGenres()
    console.log(data)
}

async function consoleTrailers() {
    const data = await API.getMovieTrailers(756999)
    console.log(data)
}