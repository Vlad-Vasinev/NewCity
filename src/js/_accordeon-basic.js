
if(document.querySelector('.any-info')) {
  if(isMobile()) {
    let itemHeightActive = document.querySelector('.any-info__middle_active').offsetHeight
    document.querySelector('.any-info__content').style.setProperty('--item-height_active', `${itemHeightActive}px`)
  }

  document.querySelectorAll('div[accord-basic]').forEach((item) => {
    item.querySelectorAll('div[accord-basic-checker]').forEach((element, index) => {
      element.addEventListener('click', () => {
        item.querySelectorAll('div[accord-basic-el]').forEach((elItem) => {
          elItem.classList.remove('any-info__middle_active')
        })
        if(isMobile()) {
          item.querySelectorAll('div[accord-basic-el]')[index].classList.add('any-info__middle_active')
          itemHeightActive = item.querySelectorAll('div[accord-basic-el]')[index].offsetHeight
          document.querySelector('.any-info__content').style.setProperty('--item-height_active', `${itemHeightActive}px`)
        }
        else {
          item.querySelectorAll('div[accord-basic-el]')[index].classList.add('any-info__middle_active')
        }
      })
    })
  })

}

// const headerHeight = document?.querySelector('.header__inner').offsetHeight;
// if (isMobile()) {
//   document.body.style.setProperty('--header-height', `${headerHeight}px`)