document.addEventListener("DOMContentLoaded", function () {
    const flatpickrInstance = flatpickr("#calendario", {
        mode: "range",
        enableTime: true,
        position: "auto",
        dateFormat: "Y-m-d H:i",
        onChange: function(selectedDates) {
            console.log(selectedDates);
        }   
    });

    const form = document.getElementById("aluguel-form");
    const modalAluguel = document.getElementById("modal-aluguel");
    const modalNotificacao = document.getElementById("modal-notificacao");
    const closeModalNotificacao = document.querySelector(".close-notificacao");
    const notificacaoMensagem = document.getElementById("notificacao-mensagem");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const dates = flatpickrInstance.selectedDates;

        if (dates.length === 2) {
            const startDate = dates[0];
            const endDate = dates[1];
            const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

            modalAluguel.style.display = "none";

            notificacaoMensagem.textContent = `Período selecionado: ${startDate.toLocaleString()} até ${endDate.toLocaleString()} - Total de dias: ${totalDays}`;
            modalNotificacao.style.display = "block";
        } else {
            alert("Por favor, selecione um período válido.");
        }
    });

    closeModalNotificacao.addEventListener("click", function() {
        modalNotificacao.style.display = "none";
    });
});