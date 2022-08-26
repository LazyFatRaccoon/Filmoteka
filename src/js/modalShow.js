import API from './apiService/movieAPI'

const refs = {
    img: document.querySelector('.modal__preview-img'),
    discTitle: document.querySelector('.discription__title'),
    rait: document.querySelector('.mvi__rait'),
    watch: document.querySelector('.mvi__watch'),
    pop: document.querySelector('.mvi__pop'),
    mviName: document.querySelector('.mvi__name'),
    mviGenre: document.querySelector('.mvi__genre'),
    discText: document.querySelector('.discription__about-text'),
    backdrop: document.querySelector('.backdrop'),
    cart: document.querySelector('.header__pages-link'),

}

const closeBtn = document.querySelector('.modal__close-btn')


refs.cart.addEventListener('click', onOpenModal)
closeBtn.addEventListener('click', closeModal)
refs.backdrop.addEventListener('click', onBackdropCloseModal)


function onOpenModal() {
    insertMarkup(756999)
    refs.backdrop.classList.remove('isHidden')
}

function closeModal() {
    refs.backdrop.classList.add('isHidden')
}
    
function onBackdropCloseModal(e) {
    if (e.currentTarget === e.target) {
        closeModal()
    }
}

async function insertMarkup(idForSearch) {
    const url = "https://image.tmdb.org/t/p/w500"
    const serchMove = await API.getMovieById(idForSearch)
    console.log(serchMove)
    const {original_title, poster_path, vote_average, vote_count, popularity, overview} = serchMove

    const genre = serchMove.genres.reduce((acc, a) => [...acc, a.name], [])

    refs.img.setAttribute('src', `${url + poster_path}`)
    refs.discTitle.innerHTML = `${original_title}`
    refs.rait.innerHTML = `${vote_average.toFixed(2)}`
    refs.watch.innerHTML = `${vote_count}`
    refs.pop.innerHTML = `${popularity.toFixed(1)}`
    refs.mviName.innerHTML = `${original_title}`
    refs.mviGenre.innerHTML = `${genre.join(", ")}`
    refs.discText.innerHTML = `${overview}`
}