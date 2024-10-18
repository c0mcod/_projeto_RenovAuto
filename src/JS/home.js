// Seleciona o botão de menu e o container de links
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Adiciona o evento de clique para abrir ou fechar o menu
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
