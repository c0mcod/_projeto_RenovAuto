window.revelar = ScrollReveal({ reset: true });

// Hero
revelar.reveal('.text',
    {
        duration: 2000,
        distance: '120px',
        origin: 'top'
    })
revelar.reveal('#text-hero',
    {
        duration: 2000,
        delay: 300,
        distance: '120px'
    })
    revelar.reveal('.hero-btn',
        {
            duration: 2000,
            distance: '120px',
            delay: 400,
            origin: 'bottom'
        })

// serviços
revelar.reveal('.effect-reveal-1',
    {
        duration: 2000,
        distance: '120px',
        delay: 500
    })


revelar.reveal('.effect-reveal-2',
    {
        duration: 2000,
        distance: '120px',
        delay: 1000
    })


revelar.reveal('.effect-reveal-3',
    {
        duration: 2000,
        distance: '120px',
        delay: 1500
    })

// planos 
revelar.reveal('.content-services1',
    {
        duration: 2000,
        distance: '120px',
        origin: 'left'

    })
revelar.reveal('.content-services2',
    {
        duration: 2000,
        distance: '120px',
        origin: 'right'

    })
revelar.reveal('.title-plans',
    {
        duration: 2000,
        distance: '120px'
    })
