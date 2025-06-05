import { disableScroll } from "./functions/disable-scroll"
import { enableScroll } from "./functions/enable-scroll"

function handleClick() {
  enableScroll();
  document.querySelector('.modal-background').classList.remove("modal-consultation")
  document.querySelector('.consultation').classList.remove("consultation_active")
  document.querySelector('.consultation__form-close').removeEventListener('click', handleClick);
}

document.querySelectorAll('.consultation .consultation__btn.btn1').forEach((el) => {
  el.addEventListener('click', () => {

    document.querySelector('.modal-background').classList.add("modal-consultation")

    let consultation = el.parentElement
    consultation.classList.add('consultation_active')
    disableScroll()

    consultation.querySelector('.consultation__form-close').addEventListener('click', handleClick)
  })
})