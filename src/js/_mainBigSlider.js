var swiper2 = new Swiper(".bg-slider", {
  effect: 'fade', 
  fadeEffect: {
    crossFade: true,
  },
  speed: 500,
  autoplay: {
    delay: 2300,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl:
      ".slider-navigation-next",
    prevEl:
      ".slider-navigation-prev",
  },
});