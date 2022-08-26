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


export const initPagination = async ({ page, itemsPerPage, totalItems, data, query, firstTime }) => {
    const options = {
      page,
      itemsPerPage,
      totalItems,
      visiblePages: 5,
      centerAlign: true,
      data,   
      query,
      firstTime
    };
    
    const pagination = new Pagination(paginationContainer, options);
    paginationSettings.pagination = pagination;


        if (options.firstTime) {
            if (options.data.toString() === "search") {
                try {
                    const response = await API.getModifiedMoviesList(page, options.query);
                    createGallery(response.results);
                    options.firstTime = false;
                   
                  } catch (error) {
                    console.log(error);
                  }
            }
            if (options.data.toString() === "popular") {
                try {
                    const response = await API.getModifiedMoviesList(page);
                    createGallery(response.results);
                    options.firstTime = false;

                  } catch (error) {
                    console.log(error);
                  }
            }
        }

        pagination.on('afterMove', async ({ page }) => {
            if (options.data.toString() === "search") {
            try {
              const response = await API.getModifiedMoviesList(page, options.query);
              createGallery(response.results);
             
            } catch (error) {
              console.log(error);
            }
     
        }
        if (options.data.toString() === "popular") {
            try {
                const response = await API.getModifiedMoviesList(page);
                createGallery(response.results);
               
              } catch (error) {
                console.log(error);
              }
        }
        
    })

    return pagination;
  };

// createPagination()
