
if(document.querySelector('.form-primary-scroll')) {
    document.querySelector('.form-primary-scroll').addEventListener('click', () => {
    document.querySelector('.form-primary').scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
  })
}
