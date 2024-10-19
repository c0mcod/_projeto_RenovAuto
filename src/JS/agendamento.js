const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const showDetailButtons = document.querySelectorAll('.show-details');
const hideDetailButtons = document.querySelectorAll('.hide-details');


showDetailButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.card-inner')[index].classList.add('flipped');
    });
});

hideDetailButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.card-inner')[index].classList.remove('flipped');
    });
});