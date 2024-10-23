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

// Modal
const modal = document.getElementById('modal-aluguel');
const closeModal = document.querySelector('.close');

document.querySelectorAll('.alugar-btn').forEach(button => {
    button.addEventListener('click', function () {

        const carroNome = this.getAttribute('data-carro');
        const carroPreco = this.getAttribute('data-preco');

        // Define o nome e preço do carro no modal
        document.getElementById('carro-nome-modal').textContent = carroNome;
        document.getElementById('carro-preco-modal').textContent = carroPreco;

        modal.style.display = 'block';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Função para confirmar o aluguel e exibir o alerta
document.querySelector('#modal-aluguel form').addEventListener('submit', function (event) {
    event.preventDefault();

    const dias = document.getElementById('dias').value;
    const carroNome = document.getElementById('carro-nome-modal').textContent;
    const carroPreco = document.getElementById('carro-preco-modal').textContent;

    const precoTotal = carroPreco * dias;

    alert(`Você alugou o ${carroNome} por ${dias} dias. Preço total: R$${precoTotal}`);

    modal.style.display = 'none';
});
