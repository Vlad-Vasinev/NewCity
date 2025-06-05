

var swiper4 = new Swiper(".full-slider", {
  effect: 'fade', 
  fadeEffect: {
    crossFade: true,
  },
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});