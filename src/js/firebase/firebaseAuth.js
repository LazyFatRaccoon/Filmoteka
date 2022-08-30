import { Notify } from 'notiflix';
import { notiflixLoading, notiflixLoadingRemove } from '../loading';

import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

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
export const filmotecaApp = initializeApp(firebaseConfig);
export const auth = getAuth();
const user = auth.currentUser;

// ------------------------

const authRefs = {
  iconForm: document.getElementById('auth-icon'),
  formRegister: document.querySelector('.auth-form'),
  emailInput: document.getElementById('emailInput'),
  passwordInput: document.getElementById('passwordInput'),
  btnSignout: document.getElementById('btn-signout'),
  navigationPages: document.querySelector('.header__pages'),
  isHiddenForm: document.querySelector('.auth-wrapper'),
  userAccount: document.querySelector('.user-account'),
  onAccount: document.querySelector('.header__container-home'),
  btnEnter: document.querySelector('.btn-enter'),
  btnRegister: document.querySelector('.btn-register')
};

// ------------ show hide form -----------

authRefs.iconForm.addEventListener('click', showForm);
function showForm() {
  authRefs.formRegister.classList.toggle('hide-form');
  authRefs.iconForm.classList.add('hidden_nav');
}

notiflixLoading();
// -------------- check user status -------------

onAuthStateChanged(auth, user => {
  if (user) {
    authRefs.userAccount.insertAdjacentHTML('afterbegin',
      `<p class ="user-name" style="color: white;">Your email is: ${user.email}</p>`);
    // console.log('in user check status: ', user);
    authRefs.isHiddenForm.classList.add('is-hidden');
    authRefs.userAccount.classList.remove('is-hidden-account');
    authRefs.btnSignout.classList.remove('hide-form');
    authRefs.formRegister.classList.add('hide-form');
    authRefs.navigationPages.classList.remove('hidden_nav');
    notiflixLoadingRemove();
  }
  else {
    authRefs.userAccount.classList.add('is-hidden-account');
    authRefs.btnSignout.classList.add('hide-form');
    authRefs.navigationPages.classList.add('hidden_nav');
    authRefs.formRegister.classList.add('hide-form');
    authRefs.iconForm.classList.remove('hidden_nav');
    authRefs.isHiddenForm.classList.remove('is-hidden');
    notiflixLoadingRemove();
  }
});

// ---------- submit form -----------

authRefs.formRegister.addEventListener('submit', createUser);

function createUser(event) {
  event.preventDefault();

  const userEmail = authRefs.emailInput.value;
  const userPassword = authRefs.passwordInput.value;

  // ---------------  create Users -----------------------

  if (event.submitter.value === 'register') {
      createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then(userCredential => {
        notiflixLoading();
        Notify.info('Registration is successfull.', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
        authRefs.formRegister.classList.toggle('hide-form');
        authRefs.navigationPages.classList.remove('hidden_nav');
        authRefs.isHiddenForm.classList.add('is-hidden');
        authRefs.onAccount.classList.add('account-on');
        authRefs.userAccount.classList.remove('is-hidden-account');
        notiflixLoadingRemove();
      })
      .catch(error => {
        const errorCode = error.code;
        if (errorCode) {
          notiflixLoading();
          Notify.failure('Sign up failed. Please enter valid email.', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
          notiflixLoadingRemove();
          if (userEmail === "" || userPassword === "") {
            notiflixLoading();
            Notify.failure('Sign up failed. Please enter your email and password.', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
            notiflixLoadingRemove();
            return;
          } 
          else if (errorCode === 'auth/email-already-in-use') {
            notiflixLoading();
            Notify.failure('Sign up failed. Email already in use. Please sign in.', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
            notiflixLoadingRemove();
            return;
          }
        }
      });
  }

  // ----------------- sign in Users ----------------------

  else if (event.submitter.value === 'enter') {
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then(userCredential => {
        // Signed in
        notiflixLoading();
        const user = userCredential.user;
        authRefs.formRegister.classList.toggle('hide-form');
        authRefs.navigationPages.classList.remove('hidden_nav');
        authRefs.isHiddenForm.classList.add('is-hidden');
        authRefs.onAccount.classList.add('account-on');
        authRefs.userAccount.classList.remove('is-hidden-account');
        Notify.info('Welcome to your account.', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
        notiflixLoadingRemove();
      })
      .catch(error => {
        const errorCode = error.code;
        if (userEmail === "" || userPassword === ""){
          notiflixLoading();
          Notify.failure('Please enter your email and password', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
          notiflixLoadingRemove();
          return;
        }
        else if (errorCode === 'auth/wrong-password') {
          notiflixLoading();
          Notify.failure('Wrong password. Try again.', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
          notiflixLoadingRemove();
          return;
        }
        else if (errorCode === 'auth/user-not-found') {
          notiflixLoading();
          Notify.failure('User not found. Check your email.', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
          notiflixLoadingRemove();
          return;  
        }
      });
  }

  // -------------clear form ----------
  authRefs.emailInput.value = '';
  authRefs.passwordInput.value = '';
}

// --------------- user signout --------------

authRefs.btnSignout.addEventListener('click', logOut);

function logOut() {
  const userName = document.querySelector('.user-name');

  signOut(auth)
    .then(() => {
      notiflixLoading();
      Notify.info('You are sign out.', {timeout: 5000, position: "center-top", width: 200, showOnlyTheLastOne: true});
      authRefs.btnSignout.classList.add('hide-form');
      authRefs.iconForm.addEventListener('click', showForm);
      authRefs.navigationPages.classList.add('hidden_nav');
      authRefs.iconForm.classList.remove('hidden_nav');
      authRefs.isHiddenForm.classList.remove('is-hidden')
      authRefs.onAccount.classList.remove('account-on');
      authRefs.userAccount.classList.add('is-hidden-account')
      userName.remove();
      notiflixLoadingRemove();
    })
    .catch(error => {
      console.log('error: ', error);
    });
}




