import API from './apiService/movieAPI'
import {refs} from './modalShow'

const watchedList = document.querySelector('.add-btn__watched')
const queueList = document.querySelector('.add-btn__queue')

watchedList.addEventListener('click', addToWatchedList)
queueList.addEventListener('click', addToQueueList)

function saveList (key, value){
try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
} catch (error) {
    console.error("Set state error: ", error.message);
}
}

export function loadList (key){
try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? [] : JSON.parse(serializedState);
} catch (error) {
    console.error("Get state error: ", error.message);
}
}

async function addToWatchedList(e) {
    const queryId = e.currentTarget.id
    console.log(queryId)
    const serchMove = await API.getModifiedSingleMovie(queryId)
    const storageList = loadList('moveList')
    const indexOfDublicateObj = storageList.findIndex(option => option.id === parseInt(queryId))

    console.log(indexOfDublicateObj)


    watchedList.classList.toggle('disabl')
    const dis = watchedList.classList.contains('disabl')
    serchMove.watched = dis
    serchMove.queque = false

    if (dis) {
        queueList.classList.remove('disabl')
        refs.btnQ.innerHTML = 'add to quequ'
        refs.btnW.innerHTML = 'remove from watched'
    } else {
        refs.btnW.innerHTML = 'add to watched'
    }

    if (indexOfDublicateObj === -1) {
        const newlist = storageList
        newlist.push(serchMove)
        saveList('moveList', newlist)
    } else {
        storageList[indexOfDublicateObj] = serchMove
        saveList('moveList', storageList)
    }
}

async function addToQueueList(e) {
    const queryId = e.currentTarget.id
    const serchMove = await API.getModifiedSingleMovie(queryId)
    const storageList = loadList('moveList')
    const indexOfDublicateObj = storageList.findIndex(option => option.id === parseInt(queryId))

    queueList.classList.toggle('disabl')
    const dis = queueList.classList.contains('disabl')
    serchMove.watched = false
    serchMove.queque = dis

    if (dis) {
        watchedList.classList.remove('disabl')
        refs.btnW.innerHTML = 'add to watched'
        refs.btnQ.innerHTML = 'remove from queque'
    } else {
        refs.btnQ.innerHTML = 'add to queque'

    }

    if (indexOfDublicateObj === -1) {
        const newlist = storageList
        newlist.push(serchMove)
        saveList('moveList', newlist)
    } else {
        storageList[indexOfDublicateObj] = serchMove
        saveList('moveList', storageList)
    }
}

// function pushNewMove(serchMove) {
//     const newlist = []
//     newlist.push(serchMove)
//     saveList('moveList', newlist)
// }








// async function swich(watched, queque, id){
//         const serchMove = await API.getModifiedSingleMovie(id)

//     const storageList = loadList('moveList')

//     const indexOfDublicateObj = storageList.findIndex(option => option.id === id)

//     if (indexOfDublicateObj === -1) {
//         serchMove.watched = watched
//         serchMove.queque = queque
//         pushNewMove(serchMove)
//     } else {
//         serchMove.watched = watched
//         serchMove.queque = queque
//         storageList[indexOfDublicateObj] = serchMove
//         saveList('moveList', storageList)
//     }
// }

// function wachedMove(serchMove, storageList) {
//     serchMove.watched = true
//     serchMove.queque = false
//     storageList[indexOfDublicateObj] = serchMove
//     saveList('moveList', storageList)
// }









// async function addToWatchedList() {
//     const serchMove = await API.getMovieById(queryId)
//     const storageList = loadList('watchedList')
//     if (storageList === undefined || storageList.length === 0) {
//         const listWatchedFilm = []
//         listWatchedFilm.push(serchMove)
//         saveList('watchedList', listWatchedFilm)
//         watchedList.classList.add('disabl')
//     } else if (storageList.includes(serchMove)) {
//         const newListWatchedFilm = storageList.filter(value => value !== id)
//         saveList('watchedList', newListWatchedFilm)
//         watchedList.classList.remove('disabl')
//     } else {
//         storageList.push(serchMove)
//         saveList('watchedList', storageList)
//         watchedList.classList.add('disabl')
//     }
// } 

// function findMoveInddexOnStorage(storageList) {
//     let indexOfDublicateObj
//     if(storageList){
//     indexOfDublicateObj = storageList.findIndex(option => option.id === queryId)
//     }
//     return indexOfDublicateObj
// }

// function checkAndRewrite(indexDubl, storageList, serchMove, list){
//      if (storageList === undefined || storageList.length === 0) {
//         const listQueueFilm = []

//         listQueueFilm.push(serchMove)
//         saveList(list, listQueueFilm)
//         queueList.classList.add('disabl')
//     } else if (indexDubl >= 0) {
//         storageList.splice(indexDubl, 1)
//         saveList(list, storageList)
//         queueList.classList.remove('disabl')            
//     } else {
//         storageList.push(serchMove)
//         saveList(list, storageList)
//         queueList.classList.add('disabl')
//     }
// }

// async function addToQueueList() {
//     const serchMove = await API.getMovieById(queryId)
//     const list = 'queueList'
//     const storageList = loadList(list)
//     const indexDubl = findMoveInddexOnStorage(storageList)

//     checkAndRewrite(indexDubl, storageList, serchMove, list)
   
// }






// async function addToWatchedList() {
//     const serchMove = await API.getMovieById(queryId)
//     const storageList = loadList('watchedList')
//     if (storageList === undefined || storageList.length === 0) {
//         const listWatchedFilm = []
//         listWatchedFilm.push(serchMove)
//         saveList('watchedList', listWatchedFilm)
//         watchedList.classList.add('disabl')
//     } else if (storageList.includes(serchMove)) {
//         const newListWatchedFilm = storageList.filter(value => value !== id)
//         saveList('watchedList', newListWatchedFilm)
//         watchedList.classList.remove('disabl')
//     } else {
//         storageList.push(serchMove)
//         saveList('watchedList', storageList)
//         watchedList.classList.add('disabl')
//     }
// } 

// function findMoveInddexOnStorage(storageList) {
//     let indexOfDublicateObj
//     if(storageList){
//     indexOfDublicateObj = storageList.findIndex(option => option.id === queryId)
//     }
//     return indexOfDublicateObj
// }

// function checkAndRewrite(indexDubl, storageList, serchMove, list){
//      if (storageList === undefined || storageList.length === 0) {
//         const listQueueFilm = []

//         listQueueFilm.push(serchMove)
//         saveList(list, listQueueFilm)
//         queueList.classList.add('disabl')
//     } else if (indexDubl >= 0) {
//         storageList.splice(indexDubl, 1)
//         saveList(list, storageList)
//         queueList.classList.remove('disabl')            
//     } else {
//         storageList.push(serchMove)
//         saveList(list, storageList)
//         queueList.classList.add('disabl')
//     }
// }

// async function addToQueueList() {
//     const serchMove = await API.getMovieById(queryId)
//     const list = 'queueList'
//     const storageList = loadList(list)
//     const indexDubl = findMoveInddexOnStorage(storageList)

//     checkAndRewrite(indexDubl, storageList, serchMove, list)
   
// }
