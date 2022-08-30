// import API from './apiService/movieAPI'

// const backdrop = document.querySelector('.backdrop')

// const cart = document.querySelector('.header__pages-link')

// cart.addEventListener('click', onOpenModal)

// function markupModal(serchMove) {
//     const url = "https://image.tmdb.org/t/p/w500"
//     const { original_title, poster_path, vote_average, vote_count, popularity, overview, id } = serchMove

//     const genre = await serchMove.genres.reduce((acc, a) => [...acc, a.name], [])
//     backdrop.classList.remove('isHidden')

//     const markup = `
// <button class="modal__close-btn">
//   <svg class="modal__close-btn-svg" width="30" height="30">
//     <use href="./images/symbol-defs.a8b2e413.svg#icon-close"></use>
//   </svg>
// </button>
// <div class="modal__preview">
//   <img src="${createPoster(poster_path)}" />
// </div>
// <div class="modal__discription">
//   <h2 class="discription__title">${original_title}</h2>
//   <ul class="discription__mvi">
//     <li class="mvi">
//       <p class="mvi__key">Vote / Votes</p>
//       <p class="mvi__val">
//         <span class="mvi__rait">${vote_average.toFixed(2)}</span
//         ><span class="mvi__slash">/</span
//         ><span class="mvi__watch">${vote_count}</span>
//       </p>
//     </li>
//     <li class="mvi">
//       <p class="mvi__key">Popularity</p>
//       <p class="mvi__val mvi__pop">${popularity.toFixed(1)}</p>
//     </li>
//     <li class="mvi">
//       <p class="mvi__key">Original Title</p>
//       <p class="mvi__val mvi__name">${original_title}</p>
//     </li>
//     <li class="mvi">
//       <p class="mvi__key">Genre</p>
//       <p class="mvi__val mvi__genre">${genre.join(", ")}</p>
//     </li>
//   </ul>
//   <h3 class="discription__about">About</h3>
//   <p class="discription__about-text">${overview}</p>
//   <div class="button">
//     <button class="button__add add-btn__watched">
//       ${marckupBtn(idForSearch)[0]}
//     </button>
//     <button class="button__add add-btn__queue">
//       ${marckupBtn(idForSearch)[1]}
//     </button>
//   </div>
// </div>
// `
//     return markup
//     // refs.modal.insertAdjacentHTML('afterbegin', markup)
// }

//     const closeBtn = document.querySelector('.modal__close-btn')
//     closeBtn.addEventListener('click', closeModal)
//     backdrop.addEventListener('click', onBackdropCloseModal)

//     function closeModal() {
//         backdrop.innerHTML=""
//         backdrop.classList.add('isHidden')
//     }
    
//     function onBackdropCloseModal(e) {
//         if (e.currentTarget === e.target) {
//             backdrop.innerHTML=""
//             closeModal()
//         }
//     }


//     const watchedList = document.querySelector('.add-btn__watched')
//     const queueList = document.querySelector('.add-btn__queue')

//     watchedList.addEventListener('click', addToWatchedList)
//     queueList.addEventListener('click', addToQueueList)


//     // function addList() {
//     //     HTMLAllCollection
//     // }
//     const listWatchedFilm = []
//     function addToWatchedList() {
//         try {
//         localStorage.getItem('watchedList', listWatchedFilm)
//         }catch (error) {
//             console.log('id not found')
//         }
//         if(!listWatchedFilm.includes(id)){
//         listWatchedFilm.push(id)
//         localStorage.setItem('watchedList', listWatchedFilm)
//         watchedList.disabled = true
//         }
//     } 
    

//     const listQueueFilm = []
//     function addToQueueList() {

//         try {
//             localStorage.getItem('queueList', listQueueFilm)
//             console.log(listQueueFilm)
//         }catch (error) {
//             console.log('id not found')
//         }

//         if (!listQueueFilm.includes(serchMove)) {
//             listQueueFilm.push(serchMove)
//             localStorage.setItem('queueList', JSON.stringify(listQueueFilm))
//             queueList.classList.add('disabl')
//         } else {
//             const newlistQueueFilm = listQueueFilm.filter(a => a.id !== serchMove.id)
//             console.log(listQueueFilm)
//             localStorage.setItem('queueList', JSON.stringify(newlistQueueFilm))
//             queueList.classList.remove('disabl')
//         }
//     }
// }






