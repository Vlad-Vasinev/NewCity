var swiper2 = new Swiper(".banner-block", {
  effect: 'fade', 
  fadeEffect: {
    crossFade: true,
  },
  // speed: 500,
  // autoplay: {
  //   delay: 2300,
  // },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
})

document.querySelectorAll('.smooth-anchor').forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    })
  })
})