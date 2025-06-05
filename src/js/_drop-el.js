
document.querySelectorAll('div[drop-container]').forEach((dropContainer, index) => {

  dropContainer.addEventListener('click', (e) => {
    e.target.querySelector('div[drop-content]').classList.toggle('dropContent_active')
  })
})