/* Abre e fecha o menu */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle){
    element.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
}

/* Ao clicar em algum link fecha o menu */
const links = document.querySelectorAll('nav ul li a');

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show');
    })
}

/* Mudar o header ao dar scroll */
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

function changeHeaderWhenScroll(){

    if(this.window.scrollY >= navHeight){
        header.classList.add('scroll');
    }else{
        header.classList.remove('scroll');
    }
}

/* Testimonials Com Swipwerjs */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: '.swiper-pagination'
    },
    autoplay: {
        delay: 3000,
    },
    mousewheel: false,
    keyboard: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
})

/* ScrollReveal */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})
  
scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials
    #contact .text, #contact .links,
    footer .brand, footer .social,
    .divider-1, .divider-2
    `,
    { interval: 100 }
);

/* Voltar ao topo */
const backToTopButton = document.querySelector('.back-to-top');

function backToTop(){
    if(window.scrollY >= 560){
        backToTopButton.classList.add('show');
    }else{
        backToTopButton.classList.remove('show');
    }
}

/* Menu ativo */
const sections = document.querySelectorAll('main section[id]');
function activateMenuAtCurrentSection(){

    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

    for(const section of sections){
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

        if(checkpointStart && checkpointEnd){
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active');

        } else {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active');
        }
    }


}

/* when scroll */
window.addEventListener('scroll', function(){
    changeHeaderWhenScroll();
    backToTop();
    activateMenuAtCurrentSection();
});