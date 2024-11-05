// JS AGENDAMENTO

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "/Public/Images/svg/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "/Public/Images/svg/close_white_36dp.svg";
    }
}

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

document.addEventListener("DOMContentLoaded", function () {
    const flatpickrInstance = flatpickr("#calendario", {
        minDate: "today",
        maxDate: new Date().fp_incr(14),
        mode: "range",
        enableTime: true,
        position: "auto",
        dateFormat: "Y-m-d H:i",
        onChange: function (selectedDates) {
            console.log(selectedDates);
        }
    });

    const modalAluguel = document.getElementById("modal-aluguel");
    const closeModal = document.querySelector('.close');
    const modalNotificacao = document.getElementById("modal-notificacao");
    const closeModalNotificacao = document.querySelector(".close-notificacao");
    const notificacaoMensagem = document.getElementById("notificacao-mensagem");

    function closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }

    document.querySelectorAll('.alugar-btn').forEach(button => {
        button.addEventListener('click', function () {
            const carroNome = this.getAttribute('data-carro');
            const carroPreco = this.getAttribute('data-preco');
            document.getElementById('carro-nome-modal').textContent = carroNome;
            document.getElementById('carro-preco-modal').textContent = carroPreco;
            modalAluguel.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => {
        modalAluguel.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modalAluguel || event.target == modalNotificacao) {
            closeAllModals();
        }
    });

    document.querySelector('#modal-aluguel form').addEventListener('submit', function (event) {
        event.preventDefault();

        const carroNome = document.getElementById('carro-nome-modal').textContent;
        const carroPreco = parseFloat(document.getElementById('carro-preco-modal').textContent);
        const dates = flatpickrInstance.selectedDates;

        if (dates.length === 2 && dates[0] && dates[1]) {
            const startDate = dates[0];
            const endDate = dates[1];
            const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
            const precoTotal = carroPreco * totalDays;

            closeAllModals();  // Fecha todos os modais antes de abrir a notificação

            notificacaoMensagem.textContent = `Você alugou o ${carroNome} por ${totalDays} dias. Preço total: R$${precoTotal.toFixed(2)}. Período: ${startDate.toLocaleString()} até ${endDate.toLocaleString()}`;
            modalNotificacao.style.display = "flex";
        } else {
            alert("Por favor, selecione um período válido.");
        }
    });

    closeModalNotificacao.addEventListener("click", function () {
        closeAllModals();
    });
});
