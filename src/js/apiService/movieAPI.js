import axios from 'axios'


const API_KEY = '824846cd36adb0fb9eb759610f56d292';
const BASE_URL = 'https://api.themoviedb.org/3';

const POPULAR_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const MOVIE_ID_URL = `${BASE_URL}/movie/`;
const GENRES_URL = `${BASE_URL}/genre/movie/list`;



export default {
  async getPopularMovies(page) {
    try {
      const response = await axios.get(
        `${POPULAR_URL}?api_key=${API_KEY}&page=${page}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  async getSearchMovies(page, query) {
    try {
      const { data } = await axios.get(
        `${SEARCH_URL}?api_key=${API_KEY}&query=${query}&page=${page}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  async getMovieById(id) {
    try {
      const { data } = await axios.get(
        `${MOVIE_ID_URL}${id}?api_key=${API_KEY}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  async getGenres() {
    try {
      const { data } = await axios.get(`${GENRES_URL}?api_key=${API_KEY}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  async getMovieTrailers(id) {
    try {
      const { data } = await axios.get(
        `${MOVIE_ID_URL}${id}/videos?api_key=${API_KEY}`
      );
      return data.results;
    } catch (error) {
      console.error(error);
    }
  },
  //Modified functions
  async getModifiedMoviesList(page, query) {
    try {
      let movies;
      if (!query) movies = await this.getPopularMovies(page);
      if (query) movies = await this.getSearchMovies(page, query);
      
    
      const genres = (window.sessionStorage && window.sessionStorage.getItem('genres')) ? JSON.parse(window.sessionStorage.getItem('genres')) : await this.getGenres();
      if (!window.sessionStorage.getItem('genres')) sessionStorage.setItem('genres', JSON.stringify(genres));
      const genresObj = genres.genres.reduce(
         (acc, elem) => ((acc[elem.id] = elem.name), acc),
         {}
       );

      const watchedList = JSON.parse(localStorage.getItem('watchedList')) || [];
      const queueList = JSON.parse(localStorage.getItem('queueList')) || [];
      
      const dataWithGenres = await Promise.all(movies.results.map(async (movie) => ({     
        ...movie,
        watched: watchedList ? watchedList.includes(movie.id) ? true : false : false,
        queue: queueList ? queueList.includes(movie.id) ? true : false : false,
        //trailers: await this.getMovieTrailers(movie.id),
        genre_ids: movie.genre_ids.map(id => genresObj[id]),
      })));
      return {...movies, results: dataWithGenres};
    } catch (error) {
      console.error(error);
    }
  },
  async getModifiedSingleMovie(id) {
    try {
      const movie = await this.getMovieById(id)
      //const trailers = await this.getMovieTrailers(id)
      const genres = JSON.parse(window.sessionStorage.getItem('genres'))

      const watchedList = JSON.parse(localStorage.getItem('watchedList')) || [];
      const queueList = JSON.parse(localStorage.getItem('queueList')) || [];

      const genresObj = genres.genres.reduce(
        (acc, elem) => ((acc[elem.id] = elem.name), acc),
        {}
      );

      

      

      const modifiedData = {     
        ...movie,
        watched: watchedList ? watchedList.includes(movie.id) ? true : false : false,
        queue: queueList ? queueList.includes(movie.id) ? true : false : false,
        //trailers: trailers,
        genres: movie.genres.map(id => genresObj[id.id]),
      };
      return modifiedData;
    } catch (error) {
      console.error(error);
    }
  },
};