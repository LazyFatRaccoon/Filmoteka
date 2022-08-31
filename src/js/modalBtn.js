
// ================ ВАРИАНТ С 1 БАЗОЙ ДАННЫХ  =======================

import { async } from '@firebase/util';
import API from './apiService/movieAPI'
import {getWatchedListFire, addToWatchedListFire, addToQueueListFire, getQueueListFire} from './firebase/dataBase'

const  removeFromWatchedList = async (e) => {
    const queryId = e.target.id
    const storageList = await loadListWatch()

    const checkContain = storageList.includes(queryId.toString())
    console.log('checkContain', checkContain)
    if(checkContain) saveListWatch(queryId)
}

const  addToWatchedListV = async (e) => {
    const queryId = e.target.id
    const storageList = await loadListWatch()
    const checkContain =storageList.includes(queryId.toString())
    if(!checkContain) await saveListWatch(queryId)
 }
const removeFromQueueList = async (e) => {
    const queryId = e.target.id

    const storageList = await loadListQueue()
    const checkContain = storageList.includes(queryId.toString())
    if(checkContain) await saveListQueue(queryId);
}
const addToQueueListV = async (e) => {
    const queryId = e.target.id
    const storageList = await loadListQueue()
    const checkContain = storageList.includes(queryId.toString())
    if(!checkContain) await saveListQueue(queryId)
}

async function saveListWatch (key){
    try {
    await addToWatchedListFire(key);
} catch (error) {
    console.error("Set state error: ", error.message);
}
}

export async function loadListWatch (){
try {
    const serializedState = await getWatchedListFire();
    return serializedState === null ? [] : serializedState;
} catch (error) {
    console.error("Get state error: ", error.message);
}
}

async function saveListQueue (key){
    try {
    await addToQueueListFire(key);
} catch (error) {
    console.error("Set state error: ", error.message);
}
}

export async function loadListQueue (){
try {
    const serializedState = await getQueueListFire();
    return serializedState === null ? [] : serializedState;
} catch (error) {
    console.error("Get state error: ", error.message);
}
}

export async function addToWatchedList(e) {
    const watchedList = document.querySelector('.add-btn__watched')
    const queueList = document.querySelector('.add-btn__queue')
    watchedList.classList.toggle('disabl')
    const dis = watchedList.classList.contains('disabl')
    if (dis) {
        addToWatchedListV(e)
        removeFromQueueList(e)
    } else {
        removeFromWatchedList(e)
    }
    const queryId = e.target.id

    const serchMove = await API.getModifiedSingleMovieFoDataBase(queryId)

    console.log("serchMove  = ", serchMove)

    serchMove.watched = dis
    serchMove.queue = false

    if (dis) {
        queueList.classList.remove('disabl')

        queueList.innerHTML = 'add to queue'
        watchedList.innerHTML = 'remove from watched'
    } else {
        watchedList.innerHTML = 'add to watched'
    }
}

export async function addToQueueList(e) {
    const watchedList = document.querySelector('.add-btn__watched')
    const queueList = document.querySelector('.add-btn__queue')

    queueList.classList.toggle('disabl')
    const dis = queueList.classList.contains('disabl')

    if (dis) {
        addToQueueListV(e)
        removeFromWatchedList(e)
    } else {
        removeFromQueueList(e)
    }

    const queryId = e.target.id
    const serchMove = await API.getModifiedSingleMovieFoDataBase(queryId)

    serchMove.watched = false
    serchMove.queue = dis

    if (dis) {
        watchedList.classList.remove('disabl')
        watchedList.innerHTML = 'add to watched'
        queueList.innerHTML = 'remove from queue'
    } else {
        queueList.innerHTML = 'add to queue'
    }

}



//______________________________________________________________________
// ================ ВАРИАНТ С 1 LOCALSTORAGE =======================
//_____________________________________________________________________


// import API from './apiService/movieAPI'

// const removeFromWatchedList = (e) => {
//     const queryId = e.currentTarget.id;
//     const storageList = loadList('watchedList');
//     const newStorageList = storageList.filter((movie) => movie != parseInt(queryId));
//     saveList('watchedList', newStorageList);
// }
// const addToWatchedListV = (e) => {
//     const queryId = e.currentTarget.id
//     const storageList = loadList('watchedList')
//     storageList.push(parseInt(queryId))
//     saveList('watchedList', storageList)
//  }
//  const removeFromQueueList = (e) => {
//     const queryId = e.currentTarget.id;
//     const storageList = loadList('queueList');
//     const newStorageList = storageList.filter((movie) => movie != parseInt(queryId));
//     saveList('queueList', newStorageList);
// }
//  const addToQueueListV = (e) => {
//     const queryId = e.currentTarget.id
//     const storageList = loadList('queueList')
//     storageList.push(parseInt(queryId))
//     saveList('queueList', storageList)
// }

// function saveList (key, value){
// try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
// } catch (error) {
//     console.error("Set state error: ", error.message);
// }
// }

// export function loadList (key){
// try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? [] : JSON.parse(serializedState);
// } catch (error) {
//     console.error("Get state error: ", error.message);
// }
// }

// export async function addToWatchedList(e) {
//     const watchedList = document.querySelector('.add-btn__watched')
//     const queueList = document.querySelector('.add-btn__queue')
//     watchedList.classList.toggle('disabl')
//     const dis = watchedList.classList.contains('disabl')
//     if (dis) {
//         addToWatchedListV(e)
//         removeFromQueueList(e)
//     } else {
//         removeFromWatchedList(e)
//     }

//     const queryId = e.currentTarget.id

//     const serchMove = await API.getModifiedSingleMovie(queryId)

//     const storageList = loadList('moveList')
//     const indexOfDublicateObj = storageList.findIndex(option => option.id === parseInt(queryId))

//     serchMove.watched = dis
//     serchMove.queue = false

//     if (dis) {
//         queueList.classList.remove('disabl')

//         queueList.innerHTML = 'add to queue'
//         watchedList.innerHTML = 'remove from watched'
//     } else {
//         watchedList.innerHTML = 'add to watched'
//     }

//     if (indexOfDublicateObj === -1) {
//         const newlist = storageList
//         newlist.push(serchMove)
//         saveList('moveList', newlist)
//     } else {
//         storageList[indexOfDublicateObj] = serchMove
//         saveList('moveList', storageList)
//     }
// }

// export async function addToQueueList(e) {
//     const watchedList = document.querySelector('.add-btn__watched')
//     const queueList = document.querySelector('.add-btn__queue')

//     queueList.classList.toggle('disabl')
//     const dis = queueList.classList.contains('disabl')

//     if (dis) {
//     addToQueueListV(e)
//     removeFromWatchedList(e)
//     } else {
//     removeFromQueueList(e)
//     }

//     const queryId = e.currentTarget.id
//     const serchMove = await API.getModifiedSingleMovie(queryId)

//     console.log(serchMove)

//     const storageList = loadList('moveList')
//     const indexOfDublicateObj = storageList.findIndex(option => option.id === parseInt(queryId))

//     serchMove.watched = false
//     serchMove.queue = dis

//     if (dis) {
//         watchedList.classList.remove('disabl')
//         watchedList.innerHTML = 'add to watched'
//         queueList.innerHTML = 'remove from queue'
//     } else {
//         queueList.innerHTML = 'add to queue'
//     }

//     if (indexOfDublicateObj === -1) {
//         const newlist = storageList
//         newlist.push(serchMove)
//         saveList('moveList', newlist)
//     } else {
//         storageList[indexOfDublicateObj] = serchMove
//         saveList('moveList', storageList)
//     }
// }


//_______________ API for DataBase ______________________________

// async getModifiedSingleMovieFoDataBase(id) {
//     try {
//       const movie = await this.getMovieById(id)
//       const trailers = await this.getMovieTrailers(id)
//       const genres = await this.getGenres();

//       const watchedList = await loadListWatch() || [];
//       const queueList = await loadListQueue() || [];
//       const genresObj = genres.genres.reduce(
//         (acc, elem) => ((acc[elem.id] = elem.name), acc),
//         {}
//       );

//       const modifiedData = {
//         ...movie,
//         watched: watchedList ? watchedList.includes(movie.id.toString()) ? true : false : false,
//         queue: queueList ? queueList.includes(movie.id.toString()) ? true : false : false,
//         trailers: trailers,
//         genres: movie.genres.map(id => genresObj[id.id]),
//       };

//       console.log("kkkkkkk", modifiedData.watched, modifiedData.queue)
//       return modifiedData;
//     } catch (error) {
//       console.error(error);
//     }
//   }