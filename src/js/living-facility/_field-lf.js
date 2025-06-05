
document.querySelectorAll('.field-lf:not(.field-lf_disabled)').forEach((element) => {
  element.addEventListener('input', () => {
    element.classList.add('field-lf_active')
  })
  element.addEventListener('change', () => {
    element.classList.remove('field-lf_active')
  })
})