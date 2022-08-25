import API from './movieAPI'

const backdrop = document.querySelector('.backdrop')

const cart = document.querySelector('.header__pages-link')

cart.addEventListener('click', onOpenModal)

async function onOpenModal() {
    const url = "https://image.tmdb.org/t/p/w500"
    const serchMove = await API.getMovieById(756999)
    const {original_title, poster_path, vote_average, vote_count, popularity, overview, id} = serchMove

    const genre = await serchMove.genres.reduce((acc, a) => [...acc, a.name], [])
    console.log(genre)

    backdrop.classList.remove('isHidden')

    console.log(serchMove)

    const markup = `<div class="modal">
    <button class="modal__close-btn"></button>
    <div class="modal__preview">
    <img src="${url + poster_path}">
    </div>
    <div class="modal__discription">
      <h2 class="discription__title">${original_title}</h2>
      <ul class="discription__mvi">
        <li class="mvi">
          <p class="mvi__key">Vote / Votes</p>
          <p class="mvi__val">
            <span class="mvi__rait">${vote_average.toFixed(2)}</span><span class="mvi__slash">/</span
            ><span class="mvi__watch">${vote_count}</span>
          </p>
        </li>
        <li class="mvi">
          <p class="mvi__key">Popularity</p>
          <p class="mvi__val">${popularity.toFixed(1)}</p>
        </li>
        <li class="mvi">
          <p class="mvi__key">Original Title</p>
          <p class="mvi__val mvi__val-title">${original_title}</p>
        </li>
        <li class="mvi">
          <p class="mvi__key">Genre</p>
          <p class="mvi__val">${genre.join(", ")}</p>
        </li>
      </ul>
      <h3 class="discription__about">About</h3>
      <p class="discription__about-text">
        ${overview}
      </p>
      <div class="button">
        <button class="button__add add-btn__watched">add to watched</button>
        <button class="button__add add-btn__queue">add to queue</button>
      </div>
    </div>
  </div>`
    backdrop.insertAdjacentHTML('beforeend', markup)

    const closeBtn = document.querySelector('.modal__close-btn')
    closeBtn.addEventListener('click', closeModal)
    backdrop.addEventListener('click', onBackdropCloseModal)

    function closeModal() {
        backdrop.innerHTML=""
        backdrop.classList.add('isHidden')
    }
    
    function onBackdropCloseModal(e) {
        if (e.currentTarget === e.target) {
            backdrop.innerHTML=""
            closeModal()
        }
    }


    const watchedList = document.querySelector('.add-btn__watched')
    const queueList = document.querySelector('.add-btn__queue')

    watchedList.addEventListener('click', addToWatchedList)
    queueList.addEventListener('click', addToQueueList)


    // function addList() {
    //     HTMLAllCollection
    // }
    const listWatchedFilm = []
    function addToWatchedList() {
        try {
        localStorage.getItem('watchedList', listWatchedFilm)
        }catch (error) {
            console.log('id not found')
        }
        if(!listWatchedFilm.includes(id)){
        listWatchedFilm.push(id)
        localStorage.setItem('watchedList', listWatchedFilm)
        watchedList.disabled = true
        }
    } 
    

    const listQueueFilm = []
    function addToQueueList() {

        try {
            localStorage.getItem('queueList', listQueueFilm)
            console.log(listQueueFilm)
        }catch (error) {
            console.log('id not found')
        }

        if (!listQueueFilm.includes(serchMove)) {
            listQueueFilm.push(serchMove)
            localStorage.setItem('queueList', JSON.stringify(listQueueFilm))
            queueList.classList.add('disabl')
        } else {
            const newlistQueueFilm = listQueueFilm.filter(a => a.id !== serchMove.id)
            console.log(listQueueFilm)
            localStorage.setItem('queueList', JSON.stringify(newlistQueueFilm))
            queueList.classList.remove('disabl')
        }

    }
    

}






// // const watchedList = document.querySelector('.add-btn__watched')
// // const queueList = document.querySelector('.add-btn__queue')

// const button = document.querySelector('.button')

// button.addEventListener('click', addToWatchedList)

// // function addList() {
// //     HTMLAllCollection
// // }

// function addToWatchedList() {
//     console.log()
// }
