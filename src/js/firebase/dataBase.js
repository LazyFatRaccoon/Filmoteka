import {
  setDoc,
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

import { filmotecaApp } from './firebaseAuth';
import { auth } from './firebaseAuth';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(filmotecaApp);

const WATCHED = 'watched';
const QUEUE = 'queue';

// ----------------------------------- ADD TO WATCHED---------------------

export async function addToWatchedListFire(filmId) {
  try {
    const filmWatchedList = await getDoc(
      doc(db, auth.currentUser.uid, WATCHED)
    );
    if (filmWatchedList.exists()) {
      await updateDoc(doc(db, auth.currentUser.uid, WATCHED), {
        filmsId: arrayUnion(filmId),
      });
      // --------------------------- DELETE FROM WATCHED
      if (filmWatchedList.data().filmsId.includes(filmId)) {
        await updateDoc(doc(db, auth.currentUser.uid, WATCHED), {
          filmsId: arrayRemove(filmId),
        });
      }
    }
    // -------------------------- CREATE WATCHED ARRAY ------------------
    else {
      const createFilmList = await setDoc(
        doc(db, auth.currentUser.uid, WATCHED),
        {
          filmsId: arrayUnion(filmId),
        }
      );
    }
  } catch (error) {
    console.log('error: ', error);
  }
  // --- ЭТО ПРОВЕРКА ЧТОБ ВИДЕТЬ В КОНСОЛИ ЧТО ФАЙЛ УШЕЛ. УДАЛИТЬ ПОЗЖЕ -------
  try {
    const watchedListControl = await getDoc(
      doc(db, auth.currentUser.uid, WATCHED)
    );
    console.log(
      'ЗАПРОС УШЕЛ. arrayWatched: ',
      watchedListControl.data().filmsId
    );
  } catch (error) {
    console.log('error: ', error.code, error.message);
  }
}

// ----------------------------- GET WATCHED ----------------

export async function getWatchedListFire() {
  try {
    const watchedList = await getDoc(doc(db, auth.currentUser.uid, WATCHED));
    const watchedArr = await watchedList.data().filmsId;
    // console.log('watchedArr: ', watchedArr);
    return watchedArr;
  } catch (error) {
    console.log('error: ', error.code, error.message);
  }
}

// ---------------------------------------------------------------------
// ----------------------------------- ADD TO QUEUE---------------------

export async function addToQueueListFire(filmId) {
  try {
    const filmQueueList = await getDoc(doc(db, auth.currentUser.uid, QUEUE));
    if (filmQueueList.exists()) {
      await updateDoc(doc(db, auth.currentUser.uid, QUEUE), {
        filmsId: arrayUnion(filmId),
      });
      // --------------------------- DELETE FROM QUEUE
      if (filmQueueList.data().filmsId.includes(filmId)) {
        await updateDoc(doc(db, auth.currentUser.uid, QUEUE), {
          filmsId: arrayRemove(filmId),
        });
      }
    }
    // -------------------------- CREATE QUEUE ARRAY ------------------
    else {
      const createFilmList = await setDoc(
        doc(db, auth.currentUser.uid, QUEUE),
        {
          filmsId: arrayUnion(filmId),
        }
      );
    }
  } catch (error) {
    console.log('error: ', error);
  }
  // --- ЭТО ПРОВЕРКА ЧТОБ ВИДЕТЬ В КОНСОЛИ ЧТО ФАЙЛ УШЕЛ. УДАЛИТЬ ПОЗЖЕ -------
  try {
    const queueListControl = await getDoc(doc(db, auth.currentUser.uid, QUEUE));
    console.log('ЗАПРОС УШЕЛ. arrayQueue: ', queueListControl.data().filmsId);
  } catch (error) {
    console.log('error: ', error.code, error.message);
  }
}

// ----------------------------- GET QUEUE ----------------

export async function getQueueListFire() {
  try {
    const queueList = await getDoc(doc(db, auth.currentUser.uid, QUEUE));
    const queueArr = await queueList.data().filmsId;
    // console.log('queueArr: ', queueArr);
    return queueArr;
  } catch (error) {
    console.log('error: ', error.code, error.message);
  }
}

// --------------------------------------------------------------------
// ---- ПРИ ЛЮБЫХ ДЕЙСТВИЯХ НУЖНО ЗАРЕГИСТРИРОВАТЬСЯ ИЛИ ВОЙТИ -------

// -------------------- КОД ДЛЯ ДОБАВЛЕНИЯ В БАЗУ ---------------------

// -----ВКЛЮЧИТЬ --------- В modalBtn.js ОТКЛЮЧИТЬ КНОПКИ И СЛУШАТЕЛИ НА НИХ-----------

// const addToWatchedListBtn = document.querySelector('.add-btn__watched');
// const addToQueueListBtn = document.querySelector('.add-btn__queue');

// ---------- КНОПКИ ПРИ ПЕРВОМ КЛИКЕ ДОБАВЛЯЮТ ПРИ ВТОРОМ УДАЛЯЮТ ---------------

// addToWatchedListBtn.addEventListener('click', e => {
//   const moveId = Number(e.currentTarget.id);
//   addToWatchedListFire(moveId);
// });

// addToQueueListBtn.addEventListener('click', e => {
//   const moveId = Number(e.currentTarget.id);
//   addToQueueListFire(moveId);
// });

// -------------- ПОЛУЧЕНИЕ МАССИВОВ ------------------
// ---- ДЛЯ ПРОВЕРКИ СОЗДАЙ КНОПКИ С КЛАССАМИ КАК ВНИЗУ-----

// const showWatchedListFireBtn = document.querySelector('.obj-btn1');
// const showQueueListFireBtn = document.querySelector('.obj-btn2');

// showWatchedListFireBtn.addEventListener('click', async () => {
//   const watchedArray = await getWatchedListFire();
//   console.log('watchedArray: ', watchedArray);
// });

// showQueueListFireBtn.addEventListener('click', async () => {
//   const queueArray = await getQueueListFire();
//   console.log('queueArray: ', queueArray);
// });
