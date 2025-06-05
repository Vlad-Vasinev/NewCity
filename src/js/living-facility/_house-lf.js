export function isMobile () {
  if(window.innerWidth <= 768) {
    return true
  }
}

export function isDesktop () {
  if(window.innerWidth >= 768) {
    return true
  }
}

document.querySelectorAll('.house-lf[data-house]').forEach((el, index) => {
  el.addEventListener('click', (e) => {

    e.stopPropagation()

    console.log('state is true')
    const pagePosition = window.scrollY
    const paddingOffset = window.innerWidth - document.body.offsetWidth
    document.body.style.paddingRight = paddingOffset + 'px'
    document.body.classList.add('dis-scroll-lf')
    document.body.dataset.position = pagePosition
    document.body.style.top = `-${pagePosition}px`

    document.querySelector('.living-facility .modal-lf').classList.add('modal-lf_active')
    let arrHousePopups = document.querySelectorAll('.houseLf-popup')
    arrHousePopups.forEach(element => {
      element.classList.remove('houseLf-popup_active')
    })
    if(index == arrHousePopups[index].getAttribute('data-houseLf')) {
      arrHousePopups[index].classList.add('houseLf-popup_active')
    }

    if(isDesktop()) {
      document.addEventListener( 'click', (event) => {
      
        let popupField = document.querySelector('.houseLf-popup.houseLf-popup_active')
        let withinBoundaries = event.composedPath().includes(popupField)
        console.log(withinBoundaries)
        if(withinBoundaries === false) {
    
          console.log('inside bound')

          document.querySelector('.modal-lf').classList.remove('modal-lf_active')
          popupField.classList.remove('houseLf-popup_active')
    
          document.querySelector('body').classList.remove('dis-scroll-lf')
          console.log('state is false')
          document.body.style.top = 'auto'
          const pagePosition = parseInt(document.body.dataset.position, 10);
          document.body.classList.remove('dis-scroll-lf');
          window.scroll({
            top: pagePosition,
            left: 0
          })
    
        }
      })
    }

  })
})

document.querySelectorAll('.houseLf-popup__close').forEach((el, index) => {
  el.addEventListener('click', () => {

    document.querySelector('body').classList.remove('dis-scroll-lf')
    console.log('state is false')
    document.body.style.top = 'auto'
    const pagePosition = parseInt(document.body.dataset.position, 10);
    document.body.classList.remove('dis-scroll-lf');
    window.scroll({
      top: pagePosition,
      left: 0
    })

    document.querySelector('.living-facility .modal-lf').classList.remove('modal-lf_active')
    document.querySelectorAll('.houseLf-popup')[index].classList.remove('houseLf-popup_active')
  })
})

// if(isDesktop()) {
//   document.addEventListener( 'click', (event) => {
  
//     let popupField = document.querySelector('.houseLf-popup')
//     let withinBoundaries = event.composedPath().includes(popupField)
//     if(!withinBoundaries) {

//       document.querySelector('.modal-lf').classList.remove('modal-lf_active')
//       popupField.classList.remove('houseLf-popup_active')

//       document.querySelector('body').classList.remove('dis-scroll-lf')
//       console.log('state is false')
//       document.body.style.top = 'auto'
//       const pagePosition = parseInt(document.body.dataset.position, 10);
//       document.body.classList.remove('dis-scroll-lf');
//       window.scroll({
//         top: pagePosition,
//         left: 0
//       })

//     }
//   })
// }
