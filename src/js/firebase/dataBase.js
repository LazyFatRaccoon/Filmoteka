import { collection, addDoc, getDocs, setDoc, doc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

import { filmotecaApp } from './firebaseAuth';
import { auth } from './firebaseAuth';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(filmotecaApp);

const tryForm = document.querySelector('.try-form');
const tryInput = document.querySelector('.try-input');
const tryBtn = document.querySelector('.try-btn');
const objBtn1 = document.querySelector('.obj-btn1');
const objBtn2 = document.querySelector('.obj-btn2');

// tryForm.addEventListener('submit', pushToDB);

async function pushToDB(event) {
  event.preventDefault();

  try {
    const docRef = await addDoc(collection(db, 'users'), {
      first: 'Ada',
      last: 'Loe',
      born: 1815,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// objBtn1.addEventListener('click', getprprp);

async function getprprp() {
  const querySnapshot = await getDocs(collection(db, 'users'));
  querySnapshot.forEach(doc => {
    console.log(`${doc.id} => ${doc.data()}`);
    console.log(doc);
  });
}

const docData = {
  stringExample: 'Hello world!',
  booleanExample: true,
  numberExample: 3.14159265,
  arrayExample: [5, true, 'hello'],
  nullExample: null,
  objectExample: {
    a: 5,
    b: {
      nested: 'foo',
    },
  },
};

// objBtn2.addEventListener('click', getprprp2);

async function getprprp2() {
  await setDoc(doc(db, `${auth.currentUser.uid}`, 'wathed'), docData);
}
