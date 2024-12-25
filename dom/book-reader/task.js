document.addEventListener('DOMContentLoaded', () => {
    const fontSizeLinks = document.querySelectorAll('.font-size');
    const bookElement = document.getElementById('book');

    function setActiveClass(links) {
        links.forEach(link => {
            link.classList.remove('font-size_active', 'color_active'); 
        });
        return true;
    }

    fontSizeLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Отменяем переход по ссылке
            setActiveClass(fontSizeLinks);
            link.classList.add('font-size_active');
            const size = link.getAttribute('data-size');
            bookElement.classList.remove('book_fs-small', 'book_fs-big');
            if (size === 'small') {
                bookElement.classList.add('book_fs-small');
            } else if (size === 'big') {
                bookElement.classList.add('book_fs-big');
            }
        })
    });
})

