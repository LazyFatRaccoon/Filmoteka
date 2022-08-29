export function cardAddIcon() {
    const watchedList = document.querySelector('.add-btn__watched')
    const queueList = document.querySelector('.add-btn__queue')
    console.log('watchedList ', watchedList)
    console.log("queueList ", queueList)
    const id = watchedList.id;
    const watched = watchedList.classList.contains('disabl')
    const queue = queueList.classList.contains('disabl')

    const card = document.querySelector(`[data-id="${id}"]`)
    console.log('id', id)
    console.log('card', card)
    const svgIcon = card.querySelector("svg")
    const useIcon = card.querySelector("use")

    console.log('svgIcon', svgIcon)
    console.log('useIcon', useIcon)

    const queueIcon = "/Filmoteka/login-icon.2e0a9156.svg#icon-queue"
    const watchedIcon ="/Filmoteka/login-icon.2e0a9156.svg#icon-watched"

    console.log(watched, queue)
    if (watched) {
        svgIcon.style.opacity = "1"; 
        useIcon.href='';
        useIcon.href=`${watchedIcon}`;        
    }
    if (queue) {
        svgIcon.style.opacity = "1"; 
        useIcon.href='';
        useIcon.href=`${queueIcon}`;        
    }
    if ((!queue) && (!watched)) {
        svgIcon.style.opacity = "0"        
    }

}