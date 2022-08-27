import API from './apiService/movieAPI'

const watchedList = document.querySelector('.add-btn__watched')
const queueList = document.querySelector('.add-btn__queue')

watchedList.addEventListener('click', addToWatchedList)
queueList.addEventListener('click', addToQueueList)

const queryId = 756999

function saveList (key, value){
try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
} catch (error) {
    console.error("Set state error: ", error.message);
}
}

function loadList (key){
try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
} catch (error) {
    console.error("Get state error: ", error.message);
}
}

async function addToWatchedList() {
    const {id} = await API.getMovieById(queryId)
    const storageList = loadList('watchedList')
    if (storageList === undefined || storageList.length === 0) {
        const listWatchedFilm = []
        listWatchedFilm.push(id)
        saveList('watchedList', listWatchedFilm)
        watchedList.classList.add('disabl')
    } else if (storageList.includes(id)) {
        const newListWatchedFilm = storageList.filter(value => value !== id)
        saveList('watchedList', newListWatchedFilm)
        watchedList.classList.remove('disabl')
    } else {
        storageList.push(id)
        saveList('watchedList', storageList)
        watchedList.classList.add('disabl')
    }
} 

async function addToQueueList() {
    const serchMove = await API.getMovieById(queryId)

    const storageList = loadList('queueList')
    let indexOfDublicateObj
    if(storageList){
        indexOfDublicateObj = storageList.findIndex(option => option.id === serchMove.id)
    }

    if (storageList === undefined || storageList.length === 0) {
        const listQueueFilm = []
        listQueueFilm.push(serchMove)
        saveList('queueList', listQueueFilm)
        queueList.classList.add('disabl')
    } else if (indexOfDublicateObj >= 0) {
        storageList.splice(indexOfDublicateObj, 1)
        saveList('queueList', storageList)
        queueList.classList.remove('disabl')            
    } else {
        storageList.push(serchMove)
        saveList('watchedList', storageList)
        queueList.classList.add('disabl')
    }
}