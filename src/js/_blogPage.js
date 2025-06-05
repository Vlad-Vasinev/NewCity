import validateForms from "./functions/validate-forms";

import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
window.isMobile = isMobile

const rules = [
    {
      ruleSelector: 'input[type="tel"]',
      rules: [
        {
          rule: 'required',
          errorMessage: 'You have not entered a phone number'
        },
      ],
      tel: true,
      telError: 'The phone number is incorrect'
    },
    {
      ruleSelector: 'input[name="name"]',
      rules: [
        {
          rule: 'required',
          errorMessage: 'You have not entered a Name'
        },
      ],
    },
  ]

// validateForms(document.querySelector('.form-order__el'), rules)

document.querySelectorAll('.form-order__input').forEach((el) => {
    el.addEventListener('mouseover', () => {
        el.parentNode.classList.add('input-hover')
    })
    el.addEventListener('mouseout', () => {
        el.parentNode.classList.remove('input-hover')
    })
})

let scrollPosition = 0
document.querySelector('.header__menu-el.menu-popup').addEventListener('click', () => {
  document.querySelector('.header-menu').classList.toggle('menu-animate')
  if(isMobile()) {
    if(document.querySelector('.header-menu').classList.contains('menu-animate')) {
      scrollPosition = window.pageYOffset;
      document.body.style.overflow = 'overlay'
      document.body.classList.add('hide-fix')
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollPosition}px`
      document.body.style.width = '100%'
    }
    else {
      document.body.style.removeProperty('overflow')
      document.body.style.removeProperty('position')
      document.body.style.removeProperty('top')
      document.body.classList.remove('hide-fix')
      document.body.style.removeProperty('width')
      window.scrollTo(0, scrollPosition)
    }
  }
})

if(document.querySelector('.blog__title')) {
  const observer = new IntersectionObserver(
    ([e]) => {
      if(isDesktop()) {
        document.querySelector('.header-menu').classList.toggle("header-menu__scrolled", e.intersectionRatio < 1)
      }
      if(isTablet()) {
        document.querySelector('.header-menu').classList.toggle("header-menu__scrolled", e.intersectionRatio < 1)
      }
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: [1]
    }
  );
  observer.observe(document.querySelector('.blog__title'))
}

window.addEventListener('scroll', () => {

  const observer = new IntersectionObserver(
    ([e]) => {
      if(isDesktop()) {
        document.querySelector('.header').classList.toggle('header-active', e.intersectionRatio < 1)
        document.querySelector('.header__inner').classList.toggle('header__inner-scrolled', e.intersectionRatio < 1)
        if(document.querySelectorAll('.element-banner').length !== 0) {
          document.querySelector('.element-banner.element-banner_start').classList.toggle('element-banner_margin', e.intersectionRatio < 1)
        }
      }
      if(isTablet()) {
        document.querySelector('.header').classList.toggle('header-active', e.intersectionRatio < 1)
        document.querySelector('.header__inner').classList.toggle('header__inner-scrolled', e.intersectionRatio < 1)
        if(document.querySelectorAll('.element-banner').length !== 0) {
          document.querySelector('.element-banner.element-banner_start').classList.toggle('element-banner_margin', e.intersectionRatio < 1)
        }
      }
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: [1]
    }
  );
  observer.observe(document.querySelector('.blog__title'));

})