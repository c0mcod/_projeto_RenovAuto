// Funções JS da biblioteca Scroll Reveal

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

revelar.reveal('.service-item',
    {
        duration: 1000,
        distancer: '100px',
        delay: 400,
        origin: "bottom",
    })

revelar.reveal('.service-item2',
    {
        duration: 1000,
        distance: '100px',
        delay: 800,
        origin: "bottom",
    })

revelar.reveal('.service-item3',
    {
        duration: 1000,
        distance: '100px',
        delay: 1200,
        origin: "bottom",
    })

revelar.reveal('.plans-title',
    {
        duration: 1000,
        distance: '100px'
    })
revelar.reveal('.services-title',
    {
        duration: 1000,
        distance: '100px'
    })
