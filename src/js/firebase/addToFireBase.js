// import { addToWatchedListFire, addToQueueListFire } from './dataBase';
import { async } from '@firebase/util';
import { firebaseMetodsMy } from './dataBase';

const addToWatchedListBtn = document.querySelector('.add-btn__watched');
const addToQueueListBtn = document.querySelector('.add-btn__queue');

const firebaseMetodsUse = new firebaseMetodsMy();

addToWatchedListBtn.addEventListener('click', e => {
  const moveId = Number(e.currentTarget.id);
  firebaseMetodsUse.addToWatchedListFire(moveId);
});

addToQueueListBtn.addEventListener('click', e => {
  const moveId = Number(e.currentTarget.id);
  firebaseMetodsUse.addToQueueListFire(moveId);
});

async function tryFind() {}
