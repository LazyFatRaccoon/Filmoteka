import axios from 'axios'

const API_KEY = '824846cd36adb0fb9eb759610f56d292';
const BASE_URL = 'https://api.themoviedb.org/3';

const POPULAR_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const MOVIE_ID_URL = `${BASE_URL}/movie/`;
const GENRES_URL = `${BASE_URL}/genre/movie/list`;

const SORT_BY_CREATED_ASC = `created_at.asc`;
const SORT_BY_CREATED_DESC = `created_at.desc`;


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
  async getSearchMovies(query, page) {
    try {
      const {data} = await axios.get(
        `${SEARCH_URL}?api_key=${API_KEY}&query=${query}&page=${page}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  async getMovieById(id) {
    try {
      const {data} = await axios.get(`${MOVIE_ID_URL}${id}?api_key=${API_KEY}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  async getGenres() {
    try {
      const {data} = await axios.get(`${GENRES_URL}?api_key=${API_KEY}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  },
  async getMovieTrailers(id) {
    try {
      const {data} = await axios.get(
        `${MOVIE_ID_URL}${id}/videos?api_key=${API_KEY}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};