// Seleciona todos os botões de "Mostrar detalhes" e "Voltar"
const showDetailButtons = document.querySelectorAll('.show-details');
const hideDetailButtons = document.querySelectorAll('.hide-details');

// Adiciona o evento de clique para virar o card ao mostrar detalhes
showDetailButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.card-inner')[index].classList.add('flipped');
    });
});

// Adiciona o evento de clique para voltar ao card original
hideDetailButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.card-inner')[index].classList.remove('flipped');
    });
});
