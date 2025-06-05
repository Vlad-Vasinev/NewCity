var sliderLf = new Swiper(".sliderLf-bg", {
  // effect: 'fade', 
  // fadeEffect: {
  //   crossFade: true,
  // },
  pagination: {
    el: ".control-inner .swiper-pagination",
    type: "fraction",
    formatFractionCurrent: function(number) {
      if (number < 10) {
      number = '0' + number;
      }
      return number;
    },
    formatFractionTotal: function(number) {
      if (number < 10) {
      number = '0' + number;
      }
      return number;
    },
  },
  navigation: {
    nextEl:
      ".slider-navigation-next",
    prevEl:
      ".slider-navigation-prev",
  },
})

  // speed: 500,
  // autoplay: {
  //   delay: 2300,
  // },
  // loop: true,