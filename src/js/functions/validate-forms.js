import JustValidate from 'just-validate';
import Inputmask from "inputmask";
import { contains } from 'jquery';


function grecaptchaCheck() {
  return !!(document.querySelector('script[src*="www.google.com/recaptcha"]'))
}

export function appointFormInit(selector) {
  // Инициализирует форму и капчу в ней 

  let forms = []

  //forms.push(selector)
  if (typeof selector === 'string') {
    forms = document.querySelectorAll(selector)
    if (!forms.length){      
      return
    }
  }
  else {
    //console.log(selector)
    forms.push(selector)
  }
  forms.forEach((form) => {
    console.log(form)
    //console.log('appointFormInit' + selector)
    if (form.classList.contains('validation-attached')) {
      // console.log('validation already att')
      return
    }
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

    if (grecaptchaCheck()) {

      let counter = 5
      function captchaInit(form, cId) {
        if (window.grecaptcha?.render) {
          const rId = window.grecaptcha?.render(cId)
          form.dataset.rId = rId
          // console.log('renderded captcha: ', rId);
        }
        else if (counter-- != 0) {
          setTimeout(captchaInit, 300, form, cId)

        }
      }
      const captchaId = form.querySelector('.g-recaptcha')?.getAttribute('id');
      if (captchaId) {
        captchaInit(form, captchaId)
      }
    }

    validateForms(form, rules)
    form.classList.add('validation-attached')
  })

}


export default function validateForms(formEl, rules) {
  // Подключает валидацию и обрабатывает ответ запроса
  const form = formEl;
  //console.log(formEl)

  if (!form) {
    console.error('Нет такого селектора!');
    return false;
  }
  if (!rules) {
    console.error('Вы не передали правила валидации!');
    return false;
  }

  const telSelector = form?.querySelector('input[type="tel"]');
  const mailSelector = form?.querySelector('input[type="email"]');


  //console.log(form)


  if (telSelector) {
    const inputMask = new Inputmask({
      mask: '+7 (999) 999-99-99',
      showMaskOnHover: false,
    });
    inputMask.mask(telSelector);
    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: 'function',
          validator: function () {
            const phone = telSelector.inputmask.unmaskedvalue();
            return phone.length === 10;
          },
          errorMessage: item.telError
        });
      }
    }
  }
  const validation = new JustValidate(form,
    {
      errorLabelCssClass: 'ui-input__error',
      errorLabelStyle: {},
      // errorsContainer: document.querySelector('.error-field'),
      errorFieldCssClass: 'has-error',
      successFieldCssClass: 'is-valid'
    }
  );

  validation.setCurrentLocale('ru')

  for (let item of rules) {
    validation
      .addField(item.ruleSelector, item.rules);
  }
  function clearForm() {
    form.reset();

    form.querySelectorAll(".ui-input.is-focused").forEach((el) => {
      el.classList.remove('is-focused')
    });

  }
  validation.onFail(function (fields) {
    console.log(fields);
  })
  // для тестов
  // validation.onSuccess(async (e) => {
  //   form.classList.add('loading')

  //   setTimeout((params) => {
  //     // form.classList.add('hidden');
  //     form.classList.add('hidden');
  //     form.classList.remove('loading');
  //     formRequest.forEach(el => {el.classList.remove('visible'); el.classList.add('hidden')})
  //     formResponse.forEach(el => {el.classList.remove('hidden'); el.classList.add('visible')})
  //     form.dataset.redirect ? window.location.replace(form.dataset.redirect) : undefined
  //     clearForm()
  //   }, 1000);
  // })
  function showError(form, msg) {
    // Заменяет текст в блоке, скрывает форму и показывает ответ
    const errorCtr = form.querySelector('.error-message-ctr')
    if (errorCtr) {
      errorCtr.innerText = msg
    }
    else{
      const message = document.createElement('h6')
      message.innerText = msg
      form.appendChild(message)
    }
  }
  function showResponse(form, msg) {
    // Заменяет текст в блоке, скрывает форму и показывает ответ
    // const modal = form.closest('.modal')
    // if (!modal) {
    //   return
    // }
    console.log(form)

    //console.log(form.parentElement.parentElement.parentElement.parentElement)
    form.style.display = "none"
    form.parentElement.parentElement.parentElement.parentElement.querySelector('.modal__close-button').style.order = "2"
    form.parentElement.parentElement.parentElement.parentElement.querySelector('.form-order__top').classList.add('form-el_hidden')
    form.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.form-response').forEach((el) => {
      el.classList.add('form-el_active')
    })
    
    // const formRequest = modal.querySelectorAll('.form-request');
    // const formResponse = modal.querySelectorAll('.form-response');
    // const formResponseMsg = modal.querySelector('.modal__body .form-response');
    // if (formResponseMsg) formResponseMsg.textContent = message

    // formRequest.forEach(el => { el.classList.remove('visible'); el.classList.add('hidden') })
    // formResponse.forEach(el => { el.classList.remove('hidden'); el.classList.add('visible') })

  }
  validation.onSuccess(async (submitEvent) => {
    let captchaExist = grecaptchaCheck() || !!(window.grecaptcha)

    const captchaId = form.dataset.rId;
    if (captchaId) {
      grecaptcha.execute(captchaId)
      
    }
    else if (captchaExist) {
      console.error('there is no captcha in form')
    }
    const interval = setInterval(function () {
      if ((captchaExist && grecaptcha.getResponse(captchaId)) || !captchaExist) {
        clearInterval(interval)
        // const data = new FormData(submitEvent.target) .checkboxes.room-count .checkboxes.data-entry
        // console.log(data)
        if(document.querySelector('.mortgage-block')) {
          let form = document.querySelector('.modal__body form')
          let roomCount = document.querySelectorAll('.checkboxes.room-count input')
          let roomCountArr = []
          roomCount.forEach((el) => {
            if(el.checked) {
              roomCountArr.push(el.parentElement.querySelector('p.prom-h3').innerHTML)
            }
          })
          let dataEntry = document.querySelectorAll('.checkboxes.data-entry input')
          let dataEntryArr = []
          dataEntry.forEach((el) => {
            if(el.checked) {
              dataEntryArr.push(el.parentElement.querySelector('p.prom-h3').innerHTML)
            }
          })
          let priceFrom = document.querySelector('.appartment-price input.input-ion-from').value
          let priceTo = document.querySelector('.appartment-price input.input-ion-to').value
          let data = { name: `${form.querySelector('input[name="name"]').value}`, phone: `${form.querySelector('input[name="phone"]').value}`, roomCount: `${roomCountArr}`, dataEntry: `${dataEntryArr}`, priceFrom: `${priceFrom}`, priceTo: `${priceTo}` };
          console.log(data)

          form.classList.add('loading')
          const fetchUrl = form.getAttribute('action') ? form.getAttribute('action') : '/api'
          fetch(fetchUrl, {
            method: 'POST',
            body: JSON.stringify(data)
          }).then(response => {
            console.log(response)
            
            if (!response.ok) {
              response.json()
                .catch(() => {
                  form.classList.add('hidden')
                  form.classList.remove('loading')
                  showError(form, 'Не удалось отправить форму')
                  throw new Error(response.status);
                })
                .then(({ message }) => {
                  showError(form, message)
                  throw new Error(message || response.status);
                });
                form.parentElement.querySelector('form').style.display = 'none'
                form.parentElement.classList.add('sent-request')
                form.parentElement.querySelectorAll('div').forEach((item) => {
                  if(!item.classList.contains('form-response')) {
                    item.style.display = 'none'
                  }
                  else {
                    item.style.display = 'block'
                  }
                })
                window.location.href = form.dataset.formPdf
            }
            else {
              form.parentElement.querySelector('form').style.display = 'none'
              form.parentElement.classList.add('sent-request')
              form.parentElement.querySelectorAll('div').forEach((item) => {
                if(!item.classList.contains('form-response')) {
                  item.style.display = 'none'
                }
                else {
                  item.style.display = 'block'
                }
              })
  
              console.log('responce is ok')
              showResponse(form)
              form.dataset.redirect ? window.location.replace(form.dataset.redirect) : undefined
              clearForm()
            }
  
          });
        }
        else {
          const data = new FormData(submitEvent.target)
          console.log(data)
          form.classList.add('loading')
          const fetchUrl = form.getAttribute('action') ? form.getAttribute('action') : '/api'
          fetch(fetchUrl, {
            method: 'POST',
            body: data
          }).then(response => {
            console.log(response)
            
            if (!response.ok) {
              //showResponse(form)
              //console.log('status is okay')
              response.json()
                .catch(() => {
                  form.classList.add('hidden')
                  form.classList.remove('loading')
                  showError(form, 'Не удалось отправить форму')
                  throw new Error(response.status);
                })
                .then(({ message }) => {
                  showError(form, message)
                  throw new Error(message || response.status);
                });
                //showResponse(form)
                // console.log('responce is not ok')
                // console.log(form)
                form.parentElement.querySelector('form').style.display = 'none'
                form.parentElement.classList.add('sent-request')
                form.parentElement.querySelectorAll('div').forEach((item) => {
                  if(!item.classList.contains('form-response')) {
                    item.style.display = 'none'
                  }
                  else {
                    item.style.display = 'block'
                  }
                })
                window.location.href = form.dataset.formPdf
            }
            else {
              // form.classList.add('hidden');
              // if(formResponseMsg) formResponseMsg.textContent = response.json();
              // form.classList.remove('loading');
              //showResponse()
  
              form.parentElement.querySelector('form').style.display = 'none'
              form.parentElement.classList.add('sent-request')
              form.parentElement.querySelectorAll('div').forEach((item) => {
                if(!item.classList.contains('form-response')) {
                  item.style.display = 'none'
                }
                else {
                  item.style.display = 'block'
                }
              })
  
              console.log('responce is ok')
              showResponse(form)
              form.dataset.redirect ? window.location.replace(form.dataset.redirect) : undefined
              clearForm()
            }
  
          });
        }

        //console.log(submitEvent.target

      }
    }, 1000)
  })

};

