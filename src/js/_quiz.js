
if(document.querySelector('.quiz')) {
  document.querySelectorAll('.quiz .quiz-card').forEach((element, index) => {
    if(index === 0) {
      setTimeout(() => {
        document.querySelectorAll('.quiz .quiz-card')[index].classList.add('quiz-card_active')
      }, 700)
    }

    element.querySelector('button.btn1.button-primary').addEventListener('click', (e) => {
      if(index === document.querySelectorAll('.quiz .quiz-card').length - 1) {
        document.querySelectorAll('.quiz .quiz-card')[index].classList.add('quiz-card_hide')
        document.querySelectorAll('.quiz .quiz-card')[index].classList.remove('quiz-card_active')
      }
      else {
        document.querySelectorAll('.quiz .quiz-card')[index + 1].classList.add('quiz-card_active')
        e.target.parentElement.classList.add('quiz-card_hide')
        e.target.parentElement.classList.remove('quiz-card_active')
      }
    })
  })

  document.querySelectorAll('.quiz .quiz-card .close-quiz').forEach((item) => {
    item.addEventListener('click', () => {
      item.parentElement.parentElement.parentElement.querySelectorAll('.quiz-card').forEach((el) => {
        el.classList.add('quiz-card_hide')
        el.classList.remove('quiz-card_active')
      }) 
    })
  })

}