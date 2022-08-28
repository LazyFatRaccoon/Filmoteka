import { limit } from 'firebase/firestore'
import API from './apiService/movieAPI'
import { loadList } from './modalBtn'
// import { notiflixLoading, notiflixLoadingRemove } from './loading';

export const refs = {
    img: document.querySelector('.modal__preview-img'),
    discTitle: document.querySelector('.discription__title'),
    rait: document.querySelector('.mvi__rait'),
    watch: document.querySelector('.mvi__watch'),
    pop: document.querySelector('.mvi__pop'),
    mviName: document.querySelector('.mvi__name'),
    mviGenre: document.querySelector('.mvi__genre'),
    discText: document.querySelector('.discription__about-text'),
    backdrop: document.querySelector('.backdrop'),
    body: document.querySelector('body'),
    gallery: document.querySelector('.films__list'),
    btnW: document.querySelector('.add-btn__watched'),
    btnQ: document.querySelector('.add-btn__queue'),
    closeBtn: document.querySelector('.modal__close-btn')

}

refs.gallery.addEventListener('click', openCart)
refs.closeBtn.addEventListener('click', closeModal)
refs.backdrop.addEventListener('click', onBackdropCloseModal)

let serchId = 0

function openCart(e) {
    const liItem = e.path.filter(a => a.nodeName === 'LI')[0]
    serchId = liItem.dataset.id
    onOpenModal(serchId)
}

function onOpenModal(serchId) {
    insertMarkup(serchId)
    refs.backdrop.classList.remove('isHidden')
    refs.body.classList.add('scroll')
    document.addEventListener('keydown', onEscClose)
}

function onEscClose(e) {
    if(e.code === "Escape") closeModal()
}

function closeModal() {
    refs.backdrop.classList.add('isHidden')
    refs.body.classList.remove('scroll')
    clearMarkup()
}
    
function onBackdropCloseModal(e) {
    if (e.currentTarget === e.target) {
        closeModal()
    }
}

async function insertMarkup(idForSearch) {
    const url = "https://image.tmdb.org/t/p/w500"
    const serchMove = await API.getMovieById(idForSearch)
    const {original_title, poster_path, vote_average, vote_count, popularity, overview} = serchMove

    const genre = serchMove.genres.reduce((acc, a) => [...acc, a.name], [])

    refs.img.setAttribute('src', `${url + poster_path}`)
    refs.btnW.setAttribute('id', serchId)
    refs.btnQ.setAttribute('id', serchId)
    refs.discTitle.innerHTML = `${original_title}`
    refs.rait.innerHTML = `${vote_average.toFixed(2)}`
    refs.watch.innerHTML = `${vote_count}`
    refs.pop.innerHTML = `${popularity.toFixed(1)}`
    refs.mviName.innerHTML = `${original_title}`
    refs.mviGenre.innerHTML = `${genre.join(", ")}`
    refs.discText.innerHTML = `${overview}`
    marckupBtn(idForSearch)
}

function clearMarkup() {
    refs.img.removeAttribute('src')
    refs.btnW.removeAttribute('id')
    refs.btnQ.removeAttribute('id')
    refs.discTitle.innerHTML = ''
    refs.rait.innerHTML = ''
    refs.watch.innerHTML = ''
    refs.pop.innerHTML = ''
    refs.mviName.innerHTML = ''
    refs.mviGenre.innerHTML = ''
    refs.discText.innerHTML = ''

    refs.btnW.innerHTML = ""
    refs.btnW.classList.remove("disabl")
    refs.btnQ.innerHTML = ""
    refs.btnQ.classList.remove("disabl")
}

function checkStatus(id) {

   const storageList = loadList('moveList')
    console.log(id)
    console.log(storageList)

let chooseFilm = -1


    for (let i = 0; i < storageList.length; i += 1) {
         chooseFilm = i
        if (Number(storageList[i].id) === Number(id)) {
            break
        } else {
            chooseFilm = -1
        }

    }
        console.log(chooseFilm)
    // const chooseFilm = storageList.find((item, index) => {Number(item.id) === Number(id)

    //     console.log(Number(item.id) === Number(id))
    //     console.log(item.id)
    //     console.log(id)}
    // )
    // console.log(chooseFilm)

    
    const watched = chooseFilm < 0 ? false : storageList[chooseFilm].watched
    const queque = chooseFilm < 0 ? false : storageList[chooseFilm].queque
    return {watched, queque}
}

function marckupBtn(id) {
    const status = checkStatus(id)
    console.log(status)
    const marckupWatchText = status.watched ? "remove from watched" : "add to watched"
    const watchStatus = status.watched ? "disabl" : "y"
    const marckupQuequeText = status.queque ? "remove from queque" : "add to queue"
    const quequeStatus = status.queque ? "disabl" : "y"

    refs.btnW.innerHTML = `${marckupWatchText}`
    refs.btnW.classList.add(watchStatus)
    refs.btnQ.innerHTML = `${marckupQuequeText}`
    refs.btnQ.classList.add(quequeStatus)
}

