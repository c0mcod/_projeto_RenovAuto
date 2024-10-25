const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 40,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Breakpoints responsivos com Swiper

    breakpoints: {
        0: {
            slidesPerView: 1
        },

        620: {
            slidesPerView: 2

        },
        1024: {
            slidesPerView: 3
        }
    }
});

// Seleciona todos os botões "Mostrar Detalhes" e "Voltar"
const showDetailButtons = document.querySelectorAll('.show-details-btn');
const hideDetailButtons = document.querySelectorAll('.hide-details-btn');

// Adiciona o evento de clique no botão "Mostrar Detalhes"
showDetailButtons.forEach((button) => {
    button.addEventListener('click', function () {
        const card = this.closest('.card-item');
        card.classList.add('flipped');
    });
});

// Adiciona o evento de clique no botão "Voltar"
hideDetailButtons.forEach((button) => {
    button.addEventListener('click', function () {
        const card = this.closest('.card-item');
        card.classList.remove('flipped');
    });
});

swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        769: {
            slidesPerView: 3,
        }
    }
});


