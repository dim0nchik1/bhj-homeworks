const dropdownValue = document.querySelector(".dropdown__value")
const dropdownList = document.querySelector(".dropdown__list")
const dropdownLinks = document.querySelectorAll('.dropdown__link')
dropdownValue.onclick = () => {
    dropdownList.classList.toggle("dropdown__list_active")
}

dropdownLinks.forEach(dropdownLink => {
    dropdownLink.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем переход по ссылке
        dropdownValue.textContent = dropdownLink.textContent;
        dropdownList.classList.remove('dropdown__list_active');
    });
});
