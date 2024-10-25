window.revelar = ScrollReveal({ reset: true });

// Hero
revelar.reveal('.text',
    {
        duration: 1000,
        distance: '100px',
        origin: 'top'
    })
revelar.reveal('#text-hero',
    {
        duration: 1000,
        delay: 200,
        distance: '100px'
    })
revelar.reveal('.hero-btn',
    {
        duration: 1000,
        distance: '120px',
        delay: 300,
        origin: 'bottom'
    })

// serviços
revelar.reveal('.effect-reveal-1',
    {
        duration: 1000,
        distance: '100px',
        delay: 400,
        origin: "bottom",
    })


revelar.reveal('.effect-reveal-2',
    {
        duration: 1000,
        distance: '100px',
        delay: 900,
        origin: "bottom",
    })


revelar.reveal('.effect-reveal-3',
    {
        duration: 1000,
        distance: '100px',
        delay: 1500,
        origin: "bottom"
    })

// planos 
revelar.reveal('.content-services1',
    {
        duration: 1000,
        distance: '100px',
        origin: 'left'

    })
revelar.reveal('.content-services2',
    {
        duration: 1000,
        distance: '100px',
        origin: 'right'

    })
revelar.reveal('.title-plans',
    {
        duration: 1000,
        distance: '100px'
    })

revelar.reveal('.img-plan',
    {
        duration: 1000,
        distance: '100px',
        origin: "left"
    })

// ScrollReveal().reveal('.effect-reveal-1', { delay: 200 });
// ScrollReveal().reveal('.effect-reveal-2', { delay: 400 });
// ScrollReveal().reveal('.effect-reveal-3', { delay: 600 });



// Função para desativar ScrollReveal em resoluções menores
function handleScrollReveal() {
    if (window.innerWidth < 768) {
        // Desativar Scroll Reveal removendo a classe associada ao efeito
        ScrollReveal().clean('.effect-reveal-1');
        ScrollReveal().clean('.effect-reveal-2');
        ScrollReveal().clean('.effect-reveal-3');
    } else {
        // Reativar os efeitos de ScrollReveal em resoluções maiores
        ScrollReveal().reveal('.effect-reveal-1', { delay: 200 });
        ScrollReveal().reveal('.effect-reveal-2', { delay: 400 });
        ScrollReveal().reveal('.effect-reveal-3', { delay: 600 });
    }
}

// Verificar quando a página é carregada e quando a janela é redimensionada
window.addEventListener('load', handleScrollReveal);
window.addEventListener('resize', handleScrollReveal);



