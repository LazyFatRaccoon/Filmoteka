import  Pagination  from "tui-pagination";
import API from './apiService/movieAPI';
import {createGallery} from './createGallery';

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


export const initPagination = ({ page, itemsPerPage, totalItems, data, query }) => {
    const options = {
      page,
      itemsPerPage,
      totalItems,
      visiblePages: 5,
      centerAlign: true,
      data,   
      query,
    };
  
    const pagination = new Pagination(paginationContainer, options);
    paginationSettings.pagination = pagination;
    if (options.data === "popular") {
    pagination.on('afterMove', async ({ page }) => {
        console.log(pagination)
        try {
          const response = await API.getModifiedMoviesList(page);
          createGallery(response.results);
         
        } catch (error) {
          console.log(error);
        }
 
    })}
    if (options.data === "search") {
        pagination.on('afterMove', async ({ page }) => {
            console.log(pagination)
            try {
              const response = await API.getModifiedMoviesList(page, options.query);
              createGallery(response.results);
             
            } catch (error) {
              console.log(error);
            }
     
        })}
    return pagination;
  };

// createPagination()
