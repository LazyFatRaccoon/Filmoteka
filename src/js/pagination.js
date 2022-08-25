import { Pagination } from "tui-pagination";

//----EXAMPLES---Browser
const options = {
    totalItems: 0,
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
}

const container = document.getElementById('tui-pagination-container');
const pagination = new Pagination(container, options);

const page = pagination.getCurrentPage();


