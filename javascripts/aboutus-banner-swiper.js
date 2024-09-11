const swiper = new Swiper('.swiper', {

    // Optional parameters
    // direction: 'vertical'/
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },

    // breakpoints: {
    //     // when window width is >= 320px
    //     320: {
    //       slidesPerView: 3,
    //       spaceBetween: 30,
    //     },
    //     // when window width is >= 480px
    //     480: {
    //       slidesPerView: 2,
    //       spaceBetween: 20,
    //     },
    //     // when window width is >= 640px
    //     640: {
    //       slidesPerView: 1,
    //       spaceBetween: 10,
    //     }
    //     // Add more breakpoints as needed
    // }
});


// ---------------------------------------------------------------------

let slides = document.querySelectorAll('.swiper-slide');
let prevButton = document.querySelector('swiper-button-prev');
let nextButton = document.querySelector('swiper-button-next');
let indicators = document.querySelectorAll('.carousel-indicators button');


let currentIndex = 0;

function updateSlide(index) {
    currentIndex = index;

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i==index);
    });
}

// nextButton.addEventListener('click', () => {
//     updateSlide((currentIndex + 1) % slides.length);
// });

// prevButton.addEventListener('click', () => {
//     updateSlide((currentIndex - 1 + slides.length) % slides.length);
// });

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => updateSlide(index));
});



// -----------------------------------------------------------------------------------------

// $.noConflict();
// jQuery(document).ready(function(){
//     jQuery(".swiper-button-next").click(function(){
//       jQuery(".swiper-slide").slideToggle();
//     });
//   });