import API from './movieAPI'

const refs = {
    popularBtn: document.querySelector("#popular_request"),
    searchBtn: document.querySelector("#search_request"), 
    movieByIdBtn: document.querySelector("#movie_id_request"), 
}

refs.popularBtn.addEventListener('click', consolePopular)
refs.searchBtn.addEventListener('click', consoleSearch)
refs.movieByIdBtn.addEventListener('click', consoleMovieById)

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