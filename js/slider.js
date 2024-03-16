const swiper = new Swiper('.swiper.reviews-slider', {
  slidesPerView: 3,
  spaceBetween: 28,
  loop: false,
  // autoplay: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
