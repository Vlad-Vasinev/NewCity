
var swiper5 = new Swiper(".filter-mesh", {
  navigation: {
    nextEl:
      ".slider-navigation-next",
    prevEl:
      ".slider-navigation-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});