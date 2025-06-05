import fsSlider from "./_fullScreenSlider";

var carouselLf = new Swiper(".carousel-lf", {
  slidesPerView: 4,
  spaceBetween: 24,
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
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 8
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 24,
    }
  }
})
if(document.querySelector('.carousel-lf')) {
  console.log('exists fsSlider')
  window.fsSlider = new fsSlider(document.querySelector(".fullscreen-slider"), {
    allowTouchMove: false,
    navigation: {
      nextEl: ".full-next",
      prevEl: ".full-prev",
    },
  });
}
else {
  console.log('no fs fsSlider')
}


// window.fsSlider = new fsSlider(document.querySelector(".fullscreen-slider"), {
//   allowTouchMove: false,
//   navigation: {
//     nextEl: ".full-next",
//     prevEl: ".full-prev",
//   },
// });

//.slider-navigation-next .slider-navigation-prev