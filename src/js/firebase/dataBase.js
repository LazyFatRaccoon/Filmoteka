import { Notify } from 'notiflix';
import {
  setDoc,
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { filmotecaApp } from './firebaseAuth';
import { auth } from './firebaseAuth';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(filmotecaApp);

// const objBtn1 = document.querySelector('.obj-btn1');
// const objBtn2 = document.querySelector('.obj-btn2');
// const objBtn3 = document.querySelector('.obj-btn3');
// const objBtn4 = document.querySelector('.obj-btn4');
// const objBtn5 = document.querySelector('.obj-btn5');

const WATCHED = 'watched';
const QUEUE = 'queue';

const value = 5;
// ----------------------------------- ADD TO WATCHED---------------------

export async function addToWatchedList() {
  filmId = value;
  try {
    const filmWatchedList = await getDoc(
      doc(db, auth.currentUser.uid, WATCHED)
    );
    if (filmWatchedList.exists()) {
      await updateDoc(doc(db, auth.currentUser.uid, WATCHED), {
        filmsId: arrayUnion(filmId),
      });
      console.log(filmWatchedList.data().filmsId);
      // --------------------------- DELETE FROM WATCHED
      if (filmWatchedList.data().filmsId.includes(filmId)) {
        await updateDoc(doc(db, auth.currentUser.uid, WATCHED), {
          filmsId: arrayRemove(filmId),
        });
      }
    } else {
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
}

// objBtn1.addEventListener('click', addToWatchedList);

// ----------------------------- GET WATCHED ----------------

export async function getWatchedList() {
  try {
    const watchedList = await getDoc(doc(db, auth.currentUser.uid, WATCHED));
    console.log('watchedList: ', watchedList.data().filmsId);
    return watchedList.data();
  } catch (error) {
    console.log('error: ', error.code, error.message);
  }
}

// objBtn2.addEventListener('click', getWatchedList);

// ---------------------------------------------------------------------
// ----------------------------------- ADD TO QUEUE---------------------

export async function addToQueueList() {
  filmId = value;
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
    } else {
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
}

// objBtn3.addEventListener('click', addToQueueList);

// ----------------------------- GET QUEUE ----------------

export async function getQueueList() {
  try {
    const queueList = await getDoc(doc(db, auth.currentUser.uid, QUEUE));
    console.log('queueList: ', queueList.data().filmsId);
    return queueList.data();
  } catch (error) {
    console.log('error: ', error.code, error.message);
  }
}

// objBtn4.addEventListener('click', getQueueList);

// ------------------------------------------------------------------------------------------
