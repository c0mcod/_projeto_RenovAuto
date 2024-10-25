window.revelar = ScrollReveal({ reset: true });

// Hero
revelar.reveal('.text',
    {
        duration: 1000,
        distance: '120px',
        origin: 'top'
    })
revelar.reveal('#text-hero',
    {
        duration: 1000,
        delay: 200,
        distance: '120px'
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
        easing: 'ease-in-out',
        reset: true,
        beforeReveal: function (el) {
            el.style.transform = '';
        }
    })


revelar.reveal('.effect-reveal-2',
    {
        duration: 1000,
        distance: '100px',
        delay: 900,
        origin: "bottom",
        easing: 'ease-in-out',
        reset: true,
        beforeReveal: function (el) {
            el.style.transform = '';
        }
    })


revelar.reveal('.effect-reveal-3',
    {
        duration: 1000,
        distance: '100px',
        delay: 1500,
        origin: "bottom",

        easing: 'ease-in-out',
        reset: true,
        beforeReveal: function (el) {
            el.style.transform = '';
        }
    })

// planos 
revelar.reveal('.content-services1',
    {
        duration: 1000,
        distance: '120px',
        origin: 'left'

    })
revelar.reveal('.content-services2',
    {
        duration: 1000,
        distance: '120px',
        origin: 'right'

    })
revelar.reveal('.title-plans',
    {
        duration: 1000,
        distance: '120px'
    })

revelar.reveal('.img-plan',
    {
        duration: 1000,
        distance: '120px',
        origin: "left"
    })


