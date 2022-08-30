import  Pagination  from "tui-pagination";
import API from './apiService/movieAPI';
import {createGallery} from './createGallery';

import { notiflixLoading, notiflixLoadingRemove } from './loading';


const paginationContainer = document.getElementById('pagination');



// async function initPagination(pagination) {
//     const data = await API.getModifiedMoviesList(1)
//     pagination = new Pagination(paginationContainer, {
//         totalItems: data.total_results,
//         itemsPerPage: 20,
//         visiblePages: 5,
//         centerAlign: true
//     });
//     console.log(pagination.getCurrentPage());
//     //pagination.getCurrentPage();
    
// }

export const paginationSettings = {
    startPage: 1,
    searchType: null,
    pagination: null,
    totalItemsHome: null,
  };


export const initPagination = async ({ page, itemsPerPage, totalItems, data, query, firstTime, list }) => {
    const options = {
      page,
      itemsPerPage,
      totalItems,
      visiblePages: 5,
      centerAlign: true,
      data,   
      query,
      firstTime,
      list
    };
    
    const pagination = new Pagination(paginationContainer, options);
    paginationSettings.pagination = pagination;
   

        if (options.firstTime) {
            if (options.data.toString() === "search") {
                try {
                    notiflixLoading();
                    const response = await API.getModifiedMoviesList(page, options.query);
                    createGallery(response.results);
                    options.firstTime = false;
                    notiflixLoadingRemove();
                  } catch (error) {
                    console.log(error);
                  }
            }
            if (options.data.toString() === "popular") {
                try {
                    notiflixLoading();
                    const response = await API.getModifiedMoviesList(page);
                    createGallery(response.results);
                    options.firstTime = false;
                    notiflixLoadingRemove();
                  } catch (error) {
                    console.log(error);
                  }
            }
            if (options.data.toString() === "library") {
                
                try {
                    notiflixLoading();
                    const newList =  options.list.slice(0, options.itemsPerPage)
                    const response = await Promise.all(newList.map(async (movie) => (API.getModifiedSingleMovie(movie)))) 
                    
                    createGallery(response);
                    options.firstTime = false;
                    notiflixLoadingRemove();
                  } catch (error) {
                    console.log(error);
                  }
            }
        }

        pagination.on('afterMove', async ({ page }) => {
            if (options.data.toString() === "search") {
            try {
                notiflixLoading();
              const response = await API.getModifiedMoviesList(page, options.query);
              createGallery(response.results);
              notiflixLoadingRemove();
            } catch (error) {
              console.log(error);
            }
     
        }
        if (options.data.toString() === "popular") {
            try {
                notiflixLoading();
                const response = await API.getModifiedMoviesList(page);
                createGallery(response.results);
                notiflixLoadingRemove();
              } catch (error) {
                console.log(error);
              }
        }
        if (options.data.toString() === "library") {
            try {
                notiflixLoading();
                const newList =  options.list.slice((page-1)*options.itemsPerPage, page*options.itemsPerPage)

                const response = await Promise.all(newList.map(async (movie) => (API.getModifiedSingleMovie(movie))))


                
                createGallery(response);
                notiflixLoadingRemove();
              } catch (error) {
                console.log(error);
              }
        }

        
    })

    return pagination;
  };

// createPagination()
