var swiper3 = new Swiper(".apartment-slider", {
    effect: 'fade', 
    loop: true,
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
  });

document.querySelectorAll('.apartment-price').forEach((item) => {
  item.addEventListener('click', (e) => {

    e.preventDefault()

    if(item.classList.contains('studio')) {
      document.querySelectorAll('.apartment').forEach((el) =>{
        if(el.classList.contains('studio-el')) {
          el.style.display = 'block'
        }
        else {
          el.style.display = 'none'
        }
      })
    } 
    else if(item.classList.contains('two-room')) {
      document.querySelectorAll('.apartment').forEach((el) =>{
        if(el.classList.contains('two-room-el')) {
          el.style.display = 'block'
        }
        else {
          el.style.display = 'none'
        }
      })
    }
  })
})