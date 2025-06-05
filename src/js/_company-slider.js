

var swiper3 = new Swiper(".company-slider", {
  effect: 'fade', 
  loop: true,
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl:
      ".slider-navigation-next",
    prevEl:
      ".slider-navigation-prev",
  },
});