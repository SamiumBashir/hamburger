document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.navbar .toggle')
    const mobileMenu = document.querySelector('.navbar .mob-menu-item');

    toggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active')
    });
})