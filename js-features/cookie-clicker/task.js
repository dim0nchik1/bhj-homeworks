const clicer = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
function onclick1() {
    clicer.width += 20;
    clicer.height += 20;
    counter.textContent = Number(counter.textContent) + 1;
}

function onclick2() {
    setTimeout(() => {
        clicer.width -= 20;
        clicer.height -= 20;
    }, 50)
}
clicer.addEventListener("mousedown", onclick1);
clicer.addEventListener("mouseup", onclick2);