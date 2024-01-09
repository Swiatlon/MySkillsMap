const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    autoHeight: true,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 5000,
    },

    // Elements
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },


    slidesPerView: 1,
    // Responsive breakpoints
    breakpoints: {
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
    }
});