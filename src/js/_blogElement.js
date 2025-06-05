

var swiper = new Swiper(".blog-slider", {
  speed: 500,
  spaceBetween: 30,
  effect: 'fade', 
  autoplay: {
    delay: 2500,
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

document.querySelectorAll('.blog-element__share').forEach((el) => {
  el.addEventListener('click', () => {
    el.querySelector('.social-links').classList.toggle('social-links__active')
  })
})

//anchors
document.querySelectorAll('.blog-element__link').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector(e.target.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
  })
  })
})