// SHOW MENU
const showMenuBtn = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');


showMenuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('show-menu');
    this.classList.toggle('active');
});

// REMOVE MENU FOR MOBILE
const navLinks = document.querySelectorAll('.nav__link');
const navLogo = document.getElementById('nav-logo');

navLinks.forEach(acitveLink => {
    acitveLink.addEventListener('click', function() {
        navLinks.forEach(inactiveLink => {
            inactiveLink.classList.remove('active')
        });
        this.classList.add('active');

        navMenu.classList.remove('show-menu');
        showMenuBtn.classList.remove('active');
    });
});

navLogo.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    showMenuBtn.classList.remove('active');
});

// MENU WHEN SCROLLING
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
});

window.addEventListener('scroll', function(){
    const header = document.getElementById('header');

    if (this.scrollY >= 80) {
        header.classList.add('scroll-header');
    }
    else {
        header.classList.remove('scroll-header');
    }
});


// SHOW POPUP
const showPopupBtns = document.querySelectorAll('.islands__video-content');
const closePopupBtn = document.getElementById('popup-close');
const modal = document.getElementById('modal');
const popup = document.getElementById('popup');

/**
 * Stop an iframe or HTML5 <video> from playing
 * @param  {Element} element The element that contains the video
 */
 const stopVideo = function (element) {
	let iframe = element.querySelector( 'iframe');
	let video = element.querySelector( 'video' );
	if (iframe) {
		let iframeSrc = iframe.src;
		iframe.src = iframeSrc;
	}
	if (video) {
		video.pause();
	}
};

showPopupBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('show-modal');
        popup.classList.add('show-popup');
    });
});

closePopupBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal');
    popup.classList.remove('show-popup');
    stopVideo(popup);
});

modal.addEventListener('click', function(){
    this.classList.remove('show-modal');
    popup.classList.remove('show-popup');
    stopVideo(popup);
});

// SWIPER
let galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 0,
    slidesPerView: 0,
});

let galleryTop = new Swiper(".gallery-top", {
    effect: "fade",
    loop: true,
    thumbs: {
        swiper: galleryThumbs,
    },
});

let swiper = new Swiper(".discover__swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

// GSAP
const imgControls = document.querySelectorAll('.controls__img');

imgControls.forEach(control => {
    control.addEventListener('click', () => {
        gsap.from('.islands__subtitle', {opacity: 0, duration: .2, delay: .2, y: -20});
        gsap.from('.islands__title', {opacity: 0, duration: .3, delay: .3, y: -20});
        gsap.from('.islands__description', {opacity: 0, duration: .4, delay: .4, y: -20});
        gsap.from('.islands__button', {opacity: 0, duration: .5, delay: .5, y: -20});
        gsap.from('.islands__video-content', {opacity: 0, duration: .6, delay: .6, y: -20});
    });
});

// SHOW SCROLL UP
window.addEventListener('scroll', function(){
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >=560) {
        scrollUp.classList.add('show-scroll');
    }
    else {
        scrollUp.classList.remove('show-scroll');
    }
});

// DARK LIGHT THEME
const themeBtn = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'fa-sun';

// Handle previously selected theme
const selectedTheme = localStorage.getItem('selectedTheme');
const selectedIcon = localStorage.getItem('selectedIcon');

if (selectedTheme) {
    if (selectedTheme === 'dark') {
        document.body.classList.add(darkTheme);
        themeBtn.classList.add(iconTheme);
    }
    else {
        document.body.classList.remove(darkTheme);
        themeBtn.classList.remove(iconTheme);
    }
}

// Theme Button
themeBtn.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains(darkTheme) ? 'light' : 'dark';
    const currentIcon = themeBtn.classList.contains(iconTheme) ? 'fa-sun' : 'fa-moon';

    document.body.classList.toggle(darkTheme);
    themeBtn.classList.toggle(iconTheme);

    // Save to localStorage
    localStorage.setItem('selectedTheme', currentTheme);
    localStorage.setItem('selectedIcon', currentIcon);
});