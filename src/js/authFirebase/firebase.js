import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCDM6-L188fTmPecCeg2aLEA5UaE1XH0DM',
  authDomain: 'filmoteca-448dc.firebaseapp.com',
  projectId: 'filmoteca-448dc',
  storageBucket: 'filmoteca-448dc.appspot.com',
  messagingSenderId: '671855278691',
  appId: '1:671855278691:web:f78710336870ed4ed35656',
  measurementId: 'G-QC5BYJG0C4',
};

// Initialize Firebase
const filmotecaApp = initializeApp(firebaseConfig);

// ------------------------

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

// ------------------

const refs = {
  formRegister: document.querySelector('.auth-form'),
  emailInput: document.getElementById('emailInput'),
  passwordInput: document.getElementById('passwordInput'),
};

refs.formRegister.addEventListener('submit', createUser);

function createUser(event) {
  event.preventDefault();

  const userEmail = refs.emailInput.value;
  const userPassword = refs.passwordInput.value;

  // ---------------

  createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  // ------------------
}
