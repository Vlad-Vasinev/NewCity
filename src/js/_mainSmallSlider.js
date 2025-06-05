
var swiper3 = new Swiper(".sm-slider", {
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