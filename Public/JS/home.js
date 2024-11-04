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

// botão de scroll para o topo do site
window.onscroll = function () {
    const button = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

document.getElementById("scrollToTop").onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};