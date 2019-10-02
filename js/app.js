const TOP = document.getElementById('nav')
window.addEventListener('scroll', (e) => {

    if(window.scrollY >= 300) {
        TOP.classList.add("fix")
        console.log(window.scrollY)
    } else {
        TOP.classList.remove('fix')
    }
})