// Menu hamburguer
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    // Só para confirmação de debug
    console.log('Menu hamburguer clicado');
    navLinks.classList.toggle('active');
});

// botão de scroll para o topo do site
window.onscroll = function () {
    const button = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

document.getElementById("scrollToTop").onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

