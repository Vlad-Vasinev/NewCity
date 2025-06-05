


import { disableScroll } from './functions/disable-scroll';
import { enableScroll } from './functions/enable-scroll';
import { appointFormInit } from './functions/validate-forms';

document.querySelectorAll('.form-order').forEach((element) => {
  let name  = element.querySelector('form')

  appointFormInit(name)
})

// document.querySelectorAll('.form-order.form-primary').forEach((element) => {
//   let name  = element.querySelector('form')
//   console.log(name)

//   appointFormInit(name)
// })
// ищем все модальные окна, в которые нужно будет подставлять значения
// document.querySelectorAll('[js-modal-open][data-modal-header]:not([data-modal-header=""]), [js-modal-open][data-modal-desc]:not([data-modal-desc=""])').forEach((el) => {
//   const name = el.dataset.modalName
//   openModalInit(`[js-modal-open][data-modal-name="${name}"]`, (t, m) => { beforeSaleModal(t, m); additionalFormInputs(t, m) }, undefined, () => { appointFormInit(`.modal[data-modal-name="${name}"] form`) })
// })

// openModalInit('[js-modal-open][data-modal-name="sale-modal"]', (t, m) => { beforeSaleModal(t, m); additionalFormInputs(t, m) }, undefined, () => { appointFormInit(`.modal[data-modal-name="sale-modal"] form`) })
// находим все модальные окна с формами, затем вешаем на их триггеры дополнительный коллбек при первом открытии
// document.querySelectorAll('.modal form').forEach((el) => {
//   const name = el.closest('.modal').dataset.modalName

//   openModalInit(`[js-modal-open][data-modal-name="${name}"]`, additionalFormInputs, undefined, () => { appointFormInit(`.modal[data-modal-name="${name}"] form`) })
// })

openModalInit('[js-modal-open]')
closeModalInit('[js-modal-close]')


window.openModal = openModal
window.closeModal = closeModal

// document.querySelector('header [data-modal-name="form-modal"]')?.click()

async function openModal(triggerEl, modal, beforeCallback = async () => { }, afterCallback = async () => { }, firstOpenCallback = async () => { }) {
  await beforeCallback(triggerEl, modal)

  if (!modal.classList.contains('first-opened')) {
    await firstOpenCallback(triggerEl, modal)
    modal.classList.add('first-opened')
    //console.log(modal)
  }
  //console.error('after submit')
  modal.classList.add('opened')
  disableScroll(triggerEl, modal)
  await afterCallback(triggerEl, modal)
}
function closeModal() {
  document.querySelectorAll('.modal.opened').forEach((item) => {
    item.classList.remove('opened')

    item.querySelector('.form-order__top').classList.remove('form-el_hidden')
    item.querySelectorAll('.form-response').forEach((el) => {
      el.classList.remove('form-el_active')
    })

  })
  enableScroll()
}

function beforeSaleModal(triggerEl, modal) {
  if (triggerEl.dataset.modalHeader) {
    try {
      modal.querySelector('.modal__top span.form-request').innerText = triggerEl.dataset.modalHeader
    }
    catch (error) {
      console.error("modal header failed")
      console.error(error)
    }
  }
  if (triggerEl.dataset.modalDesc) {
    try {
      modal.querySelector('.modal__top span.h5').innerText = triggerEl.dataset.modalDesc
    }
    catch (error) {
      console.error("modal desc failed")
      console.error(error)
    }
  }
  if (triggerEl.dataset.saleId) {
    try {
      modal.querySelector('form input[name="sale-id"]').value = triggerEl.dataset.saleId
      modal.querySelector('form input[name="sale-id"]').setAttribute('value', triggerEl.dataset.saleId)
    }
    catch (error) {
      console.error("form sale-id failed")
      console.error(error)
    }
  }
}
function additionalFormInputs(triggerEl, modal) {
  if (triggerEl.dataset.formAdditional) {
    const form = modal.querySelector('form');
    form.querySelectorAll('.additional-field').forEach((el) => { el.remove() })
    try {
      const additional = JSON.parse(triggerEl.dataset.formAdditional);

      for (const key in additional) {
        if (Object.hasOwnProperty.call(additional, key)) {
          const element = additional[key];
          const input = document.createElement('input');
          input.name = key;
          input.classList.add('additional-field')
          input.style.display = 'none';
          input.setAttribute('value', element);
          form.appendChild(input);
        }
      }


    }
    catch (error) {
      console.error("additional inputs failed")
      console.error(error)
    }
  }
}

function openModalInit(selector, beforeCallback = undefined, afterCallback = undefined, firstOpenCallback = undefined) {
  document.querySelectorAll(selector).forEach((triggerEl) => {
    const modal = document.querySelector(`.modal[data-modal-name="${triggerEl.dataset.modalName}"]`)
    if (modal && !triggerEl.classList.contains('_lstr-att')) {
      triggerEl.addEventListener('click', async (e) => {
        openModal(triggerEl, modal, beforeCallback, afterCallback, firstOpenCallback)
      })
      !triggerEl.classList.add('_lstr-att')
      modal.classList.add('_inited')
    }
  })
}

function closeModalInit(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    el.addEventListener('click', (e) => {
      if(document.querySelector('.consultation')) {
        closeModal()
        console.log('close popup consultation')
        document.querySelector('.modal-background').classList.remove("modal-consultation")
        document.querySelector('.consultation').classList.remove("consultation_active")
        document.querySelector('.consultation__form-close').removeEventListener('click', handleClick);
        // closeModal()
      }
      console.log('close popup')
      closeModal()
    })
  })
}

