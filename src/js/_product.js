const { event } = require("jquery")


const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()

if(document.querySelector('.product-showMobile')) {
  document.querySelectorAll('.product-showMobile').forEach((el) => {
    el.addEventListener('click', () => {
      disableScroll()
      el.classList.add('product-showMobile_hide')
      el.parentNode.parentNode.parentNode.querySelector('.product-calcMobile').classList.add('product-calcMobile-active')
      document.querySelector('.product-calcMobile .product-hideMobile').addEventListener('click', () => {
        el.parentNode.parentNode.parentNode.querySelector('.product-calcMobile').classList.remove('product-calcMobile-active')
        enableScroll()
        el.classList.remove('product-showMobile_hide')
      })
    })
  })
}

document.querySelectorAll('.calc__selections select').forEach((el) => {
  el.addEventListener('click', () => {
    el.parentNode.classList.toggle('arrow-direction') 
  })
  window.addEventListener('click', e => {
    if (e.target !== el) {
      el.parentNode.classList.remove('arrow-direction') 
    }
  })
})

document.querySelectorAll('.product__accordeon-btn').forEach((el, index) => {
  el.addEventListener('click', (e) => {
    
    document.querySelectorAll('.product__accordeon-btn').forEach((el, index) => {
      el.classList.remove('el_active')
      document.querySelectorAll('.accordeon-content')[index].classList.remove('img_active')
    })
    e.target.classList.add('el_active')

    if(el.getAttribute('data-plan-id') === document.querySelectorAll('.accordeon-content')[index].getAttribute('data-plan-img')) {
      document.querySelectorAll('.accordeon-content')[index].classList.add('img_active')
      el.classList.add('el_active')
    }
    
  })
})

document.querySelectorAll('.card-product__about-icon').forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('icon_checked')
  })
})