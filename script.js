/* Show menu */
const navBurger = document.getElementById('nav-burger'),
navMenu = document.getElementById('nav-menu');
navBurger.addEventListener('click', () => {
    if (navBurger.classList.contains('animate-nav-burger')) return;
    const isOpen = navBurger.classList.contains('nav__burger--open');
    navBurger.classList.add('animate-nav-burger');
    if (isOpen){
        navBurger.classList.remove('nav__burger--open');
        navMenu.classList.remove('nav__menu--open');
        document.querySelector('body').classList.remove('locked');
    }
    setTimeout(() => {
        if (!isOpen){
            navBurger.classList.add('nav__burger--open');
            navMenu.classList.add('nav__menu--open');
            document.querySelector('body').classList.add('locked');
        }
        navBurger.classList.remove('animate-nav-burger');
    }, 640);
});

/* Toggle gestures */
const gesture = document.getElementById('home-gesture'),
isDesktop = window.matchMedia('(min-width: 1024px)');
const toggleGestures = (e) => {
    if (e.matches){
        gesture.classList.add('scroll-down-gesture');
        gesture.classList.remove('swipe-up-gesture');
        gesture.innerHTML = '';
    } else{
        gesture.classList.remove('scroll-down-gesture');
        gesture.classList.add('swipe-up-gesture');
        gesture.innerHTML = '<i class="ri-arrow-down-s-line"></i>';
    }
};
toggleGestures(isDesktop);
isDesktop.addEventListener('change', toggleGestures);

/* Typed JS */
const homeTyped = new Typed('#home-typed', {
    strings: ['Web Developer', 'Game Developer', 'Bot Developer'],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

/* Rellax JS */
const rellax = new Rellax('.rellax', {
    breakpoints: [1024, 1024, 1024]
});

/* Swiper JS */
const swiperAbout = new Swiper('.about__swiper', {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,
    speed: 600,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})
const swiperWork = new Swiper('.work__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    grabCursor: true,
    speed: 600,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: -90, depth: 300, modifier: .5, slideShadows: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
})

/* Change header styles */
const scrollHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/* Active link */
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
        const id = section.id,
        top = section.offsetTop - 50,
        height = section.offsetHeight,
        link = document.querySelector('.nav__menu a[href*=' + id + ']')

        if (!link) return;
        link.classList.toggle('active-link', scrollY > top && scrollY <= top + height);
    })
}
window.addEventListener('scroll', scrollActive);

/* Scroll up */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/* Scrollreveal */
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1200,
    delay: 300,
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
});

sr.reveal('.home__title');
sr.reveal('.home__subtitle', {delay: 450});
sr.reveal('.home__typed', {delay: 600});
sr.reveal('.home__box-1', {delay: 900, rotate: {z: 20}});
sr.reveal('.home__box-2', {delay: 1000, rotate: {z: 30}});
sr.reveal('.home__box-3', {delay: 1100, rotate: {z: 40}});
sr.reveal('.home__image', {delay: 1400, distance: '-60px'});
sr.reveal('#home-gesture', {delay: 1700, distance: '-60px'});

sr.reveal('.about__card', {delay: 600, interval: 200});
sr.reveal('.about__profession', {delay: 900});
sr.reveal('.about__content', {delay: 1200});
sr.reveal('.about__swiper', {delay: 1400, interval: 200});

sr.reveal('.work__container');

sr.reveal('.footer__container');