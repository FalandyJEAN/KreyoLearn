//chanjman koule le antet la scroll

window.addEventListener("scroll", function() {
    const header = document.querySelector("header.scroll")
    if (window.scrollY > 10) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }
})
