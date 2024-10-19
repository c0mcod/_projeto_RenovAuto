// Seleciona o botão de menu e o container de links
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Adiciona o evento de clique para abrir ou fechar o menu
hamburgerMenu.addEventListener('click', () => {
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

