import API from './apiService/movieAPI'

const watchedList = document.querySelector('.add-btn__watched')
const queueList = document.querySelector('.add-btn__queue')

watchedList.addEventListener('click', changeWatchedStatus)
queueList.addEventListener('click', changeQueueStatus)


const removeFromWatchedList = (e) => {
    const queryId = e.currentTarget.id;
    const storageList = loadList('watchedList');
    const newStorageList = storageList.filter((movie) => movie != parseInt(queryId));
    saveList('watchedList', newStorageList);
}

const addToWatchedList = (e) => {
    const queryId = e.currentTarget.id
    const storageList = loadList('watchedList')
    storageList.push(parseInt(queryId))
    saveList('watchedList', storageList)

}

const removeFromQueueList = (e) => {
    const queryId = e.currentTarget.id;
    const storageList = loadList('queueList');
    const newStorageList = storageList.filter((movie) => movie != parseInt(queryId));
    saveList('queueList', newStorageList);
}

const addToQueueList = (e) => {
    const queryId = e.currentTarget.id
    const storageList = loadList('queueList')
    storageList.push(parseInt(queryId))
    saveList('queueList', storageList)

}

function changeWatchedStatus(e) {
    
    
    
        
        if (watchedList.classList.contains('disabl')) {
           
            addToWatchedList(e);
            watchedList.innerText = "Remove from watched"
            removeFromQueueList(e);
            queueList.innerHTML = " Add to queue"
            queueList.classList.add('disabl')

        } else { removeFromWatchedList(e); watchedList.innerText = "Add to watched"}
        watchedList.classList.toggle('disabl')
    

}

function changeQueueStatus(e) {
    
        
        if (queueList.classList.contains('disabl')) {
           
            addToQueueList(e);
            queueList.innerText = "Remove from queue"
            removeFromWatchedList(e);
            watchedList.innerHTML = "Add to watched"
            watchedList.classList.add('disabl')

        } else { removeFromQueueList(e); queueList.innerText = "Add to queue"; }
        queueList.classList.toggle('disabl')
    

}

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

// function removeFromWatchedList(e) {
    
// }   

// function addToWatchedList(e) {

//     const queryId = e.currentTarget.id
    
//     //const serchMove = await API.getModifiedSingleMovie(queryId)
//     const storageList = loadList('watchedList')
    
//     //const indexOfDublicateObj = storageList.findIndex(option => option.id === queryId)
//     storageList.push(parseInt(queryId))
//     saveList('watchedList', storageList)

//     //watchedList.classList.toggle('disabl')
//     // const dis = watchedList.classList.contains('disabl')
//     // serchMove.watched = dis
//     // serchMove.queque = false
    
//     // if (dis) queueList.classList.remove('disabl')

//     // if (indexOfDublicateObj === -1) {
//     //     pushNewMove(serchMove)
//     // } else {
//     //     storageList[indexOfDublicateObj] = serchMove
//     //     saveList('moveList', storageList)
//     // }
// }

// async function addToQueueList(e) {
//     const queryId = e.currentTarget.id
//     const serchMove = await API.getModifiedSingleMovie(queryId)
//     const storageList = loadList('moveList')
//     const indexOfDublicateObj = storageList.findIndex(option => option.id === queryId)

//     queueList.classList.toggle('disabl')
//     const dis = queueList.classList.contains('disabl')
//     serchMove.watched = false
//     serchMove.queque = dis

//     if (dis) watchedList.classList.remove('disabl')

//     if (indexOfDublicateObj === -1) {
//         pushNewMove(serchMove)
//     } else {
//         storageList[indexOfDublicateObj] = serchMove
//         saveList('moveList', storageList)
//     }
// }

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