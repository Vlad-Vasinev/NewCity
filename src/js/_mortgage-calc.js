

if(document.querySelector('.anchor-btn')) {
  document.querySelector('.anchor-btn').addEventListener('click', () => {
    document.querySelector('.projects-blocks').scrollIntoView({
      behavior: 'smooth'
    })
  })
}