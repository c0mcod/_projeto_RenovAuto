// Menu hamburguer
const hamburgerMenu = document.getElementById('hamburger-menu');
        const navLinks = document.querySelector('.nav-links');

        hamburgerMenu.addEventListener('click', () => {
            console.log('Menu hamburguer clicado');
            navLinks.classList.toggle('active');
        });

// Feedback
const feedbackContainer = document.querySelector('.feedback-container');
const feedbackCards = document.querySelectorAll('.feedback-card');

// Clonar os feedbacks para criar o efeito contínuo
feedbackCards.forEach((card) => {
    const clone = card.cloneNode(true);
    feedbackContainer.appendChild(clone);
});


window.onscroll = function() {
    const button = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none"; 
    }
};

document.getElementById("scrollToTop").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

