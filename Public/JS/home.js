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

