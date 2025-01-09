const tooltips = document.querySelectorAll('.has-tooltip');
tooltips.forEach(tooltip => {
    const elem = document.createElement("div");
    elem.className = "tooltip"
    elem.textContent = tooltip.title
    elem.style.position = "absolute";
    elem.style.left = `${tooltip.getBoundingClientRect().left}px`;
    elem.style.bootom = `${tooltip.getBoundingClientRect().bottom}px`;
    tooltip.appendChild(elem)
    tooltip.addEventListener("click",(e) => {
        e.preventDefault()
        if (!elem.classList.contains("tooltip_active")) {
            elem.classList.add("tooltip_active")
        } else {
            elem.classList.remove("tooltip_active")
        }
    })
})
