import API from './apiService/movieAPI'
import { refs } from './modalShow'


//=========================================

// watchedList.addEventListener('click', changeWatchedStatus)
// quequeList.addEventListener('click', changeQueueStatus)


const removeFromWatchedList = (e) => {
    const queryId = e.currentTarget.id;
    const storageList = loadList('watchedList');
    const newStorageList = storageList.filter((movie) => movie != parseInt(queryId));
    saveList('watchedList', newStorageList);
}

const addToWatchedListV = (e) => {
    const queryId = e.currentTarget.id
    const storageList = loadList('watchedList')
    storageList.push(parseInt(queryId))
    saveList('watchedList', storageList)
 }
 const removeFromQueueList = (e) => {
    const queryId = e.currentTarget.id;
    const storageList = loadList('quequeList');
    const newStorageList = storageList.filter((movie) => movie != parseInt(queryId));
    saveList('quequeList', newStorageList);
}
 const addToQueueListV = (e) => {
    const queryId = e.currentTarget.id
    const storageList = loadList('quequeList')
    storageList.push(parseInt(queryId))
    saveList('quequeList', storageList)
}
 //=================================================

const watchedList = document.querySelector('.add-btn__watched')
const quequeList = document.querySelector('.add-btn__queue')

watchedList.addEventListener('click', addToWatchedList)
quequeList.addEventListener('click', addToQueueList)

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

// async function addToWatchedList(e) {
//     addToWatchedListV(e)
//     removeFromQueueList(e)
//     const queryId = e.currentTarget.id
//     console.log(queryId)
//     const serchMove = await API.getModifiedSingleMovie(queryId)
//     const storageList = loadList('watchList')
//     const indexOfDublicateObj = storageList.findIndex(option => option.id === parseInt(queryId))

//     console.log(indexOfDublicateObj)


//     watchedList.classList.toggle('disabl')
//     const dis = watchedList.classList.contains('disabl')
//     serchMove.watched = dis
//     serchMove.queque = false

//     if (dis) {
//         queueList.classList.remove('disabl')
//         refs.btnQ.innerHTML = 'add to quequ'
//         refs.btnW.innerHTML = 'remove from watched'
//     } else {
//         refs.btnW.innerHTML = 'add to watched'
//     }

//     if (indexOfDublicateObj === -1) {
//         const newlist = storageList
//         newlist.push(serchMove)
//         saveList('watchList', newlist)
//     } else {
//         storageList[indexOfDublicateObj] = serchMove
//         saveList('watchList', storageList)
//     }
// }

// async function addToQueueList(e) {
//     addToQueueListV(e)
//     removeFromWatchedList(e)
//     const queryId = e.currentTarget.id
//     const serchMove = await API.getModifiedSingleMovie(queryId)
//     const storageList = loadList('quequeList')
//     const indexOfDublicateObj = storageList.findIndex(option => option.id === parseInt(queryId))

//     queueList.classList.toggle('disabl')
//     const dis = queueList.classList.contains('disabl')
//     serchMove.watched = false
//     serchMove.queque = dis

//     if (dis) {
//         watchedList.classList.remove('disabl')
//         refs.btnW.innerHTML = 'add to watched'
//         refs.btnQ.innerHTML = 'remove from queque'
//     } else {
//         refs.btnQ.innerHTML = 'add to queque'

//     }

//     if (indexOfDublicateObj === -1) {
//         const newlist = storageList
//         newlist.push(serchMove)
//         saveList('quequeList', newlist)
//     } else {
//         storageList[indexOfDublicateObj] = serchMove
//         saveList('quequeList', storageList)
//     }
// }


// =================== ВАРИАНТ С 1 LOCALSTORAGE =======================


async function addToWatchedList(e) {
    watchedList.classList.toggle('disabl')
    const dis = watchedList.classList.contains('disabl')
    if (dis) {
        addToWatchedListV(e)
        removeFromQueueList(e)
    } else {
        removeFromWatchedList(e)
    }
    
    const queryId = e.currentTarget.id
    const serchMove = await API.getModifiedSingleMovie(queryId)
    const storageList = loadList('moveList')
    const indexOfDublicateObj = storageList.findIndex(option => option.id === parseInt(queryId))


    serchMove.watched = dis
    serchMove.queque = false

    if (dis) {
        quequeList.classList.remove('disabl')
        refs.btnQ.innerHTML = 'add to queque'
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
    quequeList.classList.toggle('disabl')
    const dis = quequeList.classList.contains('disabl')

    if (dis) {
    addToQueueListV(e)
    removeFromWatchedList(e)
    } else {
    removeFromQueueList(e)
    }

    const queryId = e.currentTarget.id
    const serchMove = await API.getModifiedSingleMovie(queryId)
    const storageList = loadList('moveList')
    const indexOfDublicateObj = storageList.findIndex(option => option.id === parseInt(queryId))

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





// ======================= VOVA

// import API from './apiService/movieAPI'

// const watchedList = document.querySelector('.add-btn__watched')
// const queueList = document.querySelector('.add-btn__queue')

//  function changeWatchedStatus(e) {        
//     if (watchedList.classList.contains('disabl')) {
//         addToWatchedList(e);
//         watchedList.innerText = "Remove from watched"
//         removeFromQueueList(e);
//         queueList.innerHTML = " Add to queue"
//         queueList.classList.add('disabl')

//     } else { removeFromWatchedList(e); watchedList.innerText = "Add to watched" }
//     watchedList.classList.toggle('disabl')
// }

// function changeQueueStatus(e) {   
//         if (queueList.classList.contains('disabl')) {
           
//             addToQueueList(e);
//             queueList.innerText = "Remove from queue"
//             removeFromWatchedList(e);
//             watchedList.innerHTML = "Add to watched"
//             watchedList.classList.add('disabl')

//         } else { removeFromQueueList(e); queueList.innerText = "Add to queue"; }
//         queueList.classList.toggle('disabl')
// }

