import { Notify } from "notiflix";
import API from "./apiService/movieAPI";
import { initPagination } from "./pagination-try";

const submitForm = document.querySelector('.header__form');
const inputArea = document.querySelector('.header__input');
const navigationPage = document.querySelector('.header__pages')

submitForm.addEventListener('submit', consoleSearch);

hiddenNavigation();
inputСontrol();

function inputСontrol() {
    if(document.documentElement.clientWidth >= 768) {
        inputArea.setAttribute('maxlength', 40);
        if(document.documentElement.clientWidth >= 1280) {
            inputArea.setAttribute('maxlength', 47);
        };
    };
};

async function consoleSearch(event) {
    event.preventDefault();
    let page = 1;
    let searchQuery = inputArea.value.trim();
        if(searchQuery === "") {
            return Notify.failure("Please enter name of the film.", {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
        } 
            try { 
                const data = await API.getSearchMovies(`${page}`, `${searchQuery}`);
                if (data.total_results === 0) {
                    return Notify.failure("Sorry, but there is no films with this name. Please try again.", {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
                }
                Notify.info('Your request is successfull.', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
                initPagination({
                    page,
                    itemsPerPage: data.results.length,
                    totalItems: data.total_results,
                    data: 'search',
                    query: `${searchQuery}`,
                    firstTime: true,
                  });
                  inputArea.value = "";
            }
            catch(error) {
                console.log(error);
            };
};

function hiddenNavigation() {
    navigationPage.classList.add('hidden_nav')
}