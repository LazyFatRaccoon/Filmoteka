export function cardAddIcon() {
    const watchedList = document.querySelector('.add-btn__watched')
    const queueList = document.querySelector('.add-btn__queue')

    const id = watchedList.id;
    const watched = watchedList.classList.contains('disabl')
    const queue = queueList.classList.contains('disabl')

    const card = document.querySelector(`[data-id="${id}"]`)

    const svgIcon = card.querySelector("svg")
    const useIcon = card.querySelector("use")

  

    const queueIcon = "/Filmoteka/login-icon.2e0a9156.svg#icon-queue"
    const watchedIcon ="/Filmoteka/login-icon.2e0a9156.svg#icon-watched"


    if (document.title === "Filmoteka") {
    if (watched) {
        svgIcon.style.opacity = "1"; 
        useIcon.setAttribute('href', `${watchedIcon}`);       
    }
    if (queue) {
        svgIcon.style.opacity = "1"; 
        useIcon.setAttribute('href', `${queueIcon}`);
               
    }
    if ((!queue) && (!watched)) {
        svgIcon.style.opacity = "0"        
    }}
    if (document.title === "Filmoteka-library") {
        if (document.querySelector('#queueBtn').classList.contains('selected') && !queue) card.remove();
        if (document.querySelector('#watchedBtn').classList.contains('selected') && !watched) card.remove();
    }

}