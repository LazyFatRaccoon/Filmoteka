const scroll = document.querySelector(".back-to-top")

window.addEventListener("scroll", function () {
    const scroll = document.querySelector(".back-to-top")
    scroll.classList.toggle("active", window.scrollY > 500)
})
export function scrollTopTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scroll.addEventListener("click", scrollTopTop)
