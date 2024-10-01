/* Abre e fecha o menu */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

toggle.forEach(element => {
    element.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
});

/* Ao clicar em algum link fecha o menu */
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('show');
    });
});

/* Mudar o header ao dar scroll */
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

const changeHeaderWhenScroll = () => {
    header.classList.toggle('scroll', window.scrollY >= navHeight);
};

/* Testimonials com SwiperJS */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3000,
    },
    mousewheel: false,
    keyboard: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
});

/* ScrollReveal */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
});

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social,
    .divider-1, .divider-2`,
    { interval: 100 }
);

/* Voltar ao topo */
const backToTopButton = document.querySelector('.back-to-top');

const backToTop = () => {
    backToTopButton.classList.toggle('show', window.scrollY >= 560);
};

/* Menu ativo */
const sections = document.querySelectorAll('main section[id]');

const activateMenuAtCurrentSection = () => {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const isActive = checkpoint >= sectionTop && checkpoint <= sectionTop + sectionHeight;

        document
            .querySelector(`nav ul li a[href*="${sectionId}"]`)
            .classList.toggle('active', isActive);
    });
};

/* Evento de scroll */
window.addEventListener('scroll', () => {
    changeHeaderWhenScroll();
    backToTop();
    activateMenuAtCurrentSection();
});
