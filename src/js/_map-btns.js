
document.querySelectorAll('.map-btn').forEach((el) => {
  el.addEventListener('click', (e) => {

    document.querySelectorAll('.map-btn p.p2').forEach((item) => {
      item.classList.remove('btn_active')
    })
    document.querySelectorAll('.icon-marker').forEach((item) => {
      item.classList.remove('icon_active')
    })

    document.querySelectorAll('.icon-marker').forEach((item) => {
      if(item.getAttribute('data-icon-role') !== el.getAttribute('data-role')) {
        el.querySelector('p.p2').classList.add('btn_active')
        item.classList.add('icon_active')
      }
      else {
        item.classList.remove('icon_active')
        el.querySelector('p.p2').classList.remove('btn_active')
      }
    })
    
  })
})