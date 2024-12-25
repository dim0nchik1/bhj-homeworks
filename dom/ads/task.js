function startRotators() {
    const rotators = Array.from(document.querySelectorAll('.rotator'));

    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll(".rotator__case")
        let currentIndex = 0;

        setInterval(() => {

            cases[currentIndex].classList.remove('rotator__case_active');
            currentIndex = (currentIndex + 1) % cases.length;
            cases[currentIndex].classList.add('rotator__case_active');
            }, 1000)
    })
}
window.onload = startRotators;