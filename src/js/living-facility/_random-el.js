if(document.querySelectorAll('.random-lf').length !== 0) {
  let oldArr = []
  let newArr = []

  document.querySelectorAll('.random-lf').forEach((item) => {
    oldArr.push(item)
  })

  function getUniqueImage (oldArr) {
    if(newArr.length === 0) {
      newArr = oldArr.slice()
      const index = Math.floor(Math.random() * newArr.length)
      const selectedImage = newArr[index]
      newArr.splice(index, 1)
      return selectedImage
    }
    else {
      const index = Math.floor(Math.random() * newArr.length)
      const selectedImage = newArr[index]
      newArr.splice(index, 1)
      return selectedImage
    }
  }

  setInterval(() => { 
    let uniqImg = getUniqueImage(oldArr)

    if(uniqImg.getAttribute('data-randomLf') !== document.querySelector('.random-lf_start').getAttribute('data-randomLf')) {
      document.querySelectorAll('.random-lf').forEach((el, index) => {
        el.classList.remove('random-lf_start')
      })
      uniqImg.classList.add('random-lf_start')
    }
    else {
      let uniqImg = getUniqueImage(oldArr)
      document.querySelectorAll('.random-lf').forEach((el, index) => {
        el.classList.remove('random-lf_start')
      })
      uniqImg.classList.add('random-lf_start')
    }
  }, 3000)
}