// scripts.js

document.querySelector('form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (name === '' || email === '') {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault(); // Evita o envio do formulário
    }
});
