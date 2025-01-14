const modal = document.getElementById('subscribe-modal');
const closeButton = document.querySelector('.modal__close');

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function showModal() {
    modal.classList.add('modal_active');
}

function closeModal() {
    modal.classList.remove('modal_active');
    setCookie('modalClosed', 'true', 1);
}

if (!getCookie('modalClosed')) {
    showModal();
}


closeButton.addEventListener('click', closeModal);