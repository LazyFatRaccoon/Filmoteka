import axios from 'axios'

const API_KEY = '824846cd36adb0fb9eb759610f56d292';
const BASE_URL = 'https://api.themoviedb.org/3';

const POPULAR_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const MOVIE_ID_URL = `${BASE_URL}/movie/`;



export default {
    async getPopularMovies(page) {
        try {
          const response = await axios.get(`${POPULAR_URL}?api_key=${API_KEY}&page=${page}`);
          return response.data;
        } catch (error) {
          console.error(error);
        }
      },
    async getSearchMovies(query, page) {
        try {
          const data = await axios.get(`${SEARCH_URL}?api_key=${API_KEY}&query=${query}&page=${page}`);
          return data;
        } catch (error) {
          console.error(error);
        }
      },
    async getMovieById(id) {
        try {
          const data = await axios.get(`${MOVIE_ID_URL}${id}?api_key=${API_KEY}`); 
          return data;
        } catch (error) {
          console.error(error);
        }
      },
    
}