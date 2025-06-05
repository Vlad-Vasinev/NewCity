var sliderLf = new Swiper(".sliderLf-sm", {
  // effect: 'fade', 
  // fadeEffect: {
  //   crossFade: true,
  // },
  pagination: {
    el: ".swiper-pagination",
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