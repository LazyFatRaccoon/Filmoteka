import { getWatchedListFire, getQueueListFire } from './dataBase';

const showWatchedListFireBtn = document.querySelector('#watchedBtn');
const showQueueListFireBtn = document.querySelector('#queueBtn');

// showWatchedListFireBtn.addEventListener('click', showWatchedListFire);

async function showWatchedListFire() {
  const watchedArray = getWatchedListFire();
  console.log('watchedArray: ', watchedArray);
}
