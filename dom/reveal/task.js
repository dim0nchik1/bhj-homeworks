const reveals = document.querySelectorAll(".reveal")
reveals.forEach((reveal) => {
    function isVisible(el) {
        const {top, bottom} = el.getBoundingClientRect()
        if (bottom < 0)  {
            return reveal.classList.remove("reveal_active")
        } if (top > window.innerHeight) {
            return reveal.classList.remove("reveal_active")
        } else {
            return reveal.classList.add("reveal_active")
        }
        } setInterval(() => {
            isVisible(reveal)
    },1000)
})

