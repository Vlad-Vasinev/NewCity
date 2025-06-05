

if(window.innerWidth >= 768) {

  if(document.querySelectorAll('.element-banner').length !== 0) {
    let oldArr = []
    let newArr = []
  
    document.querySelectorAll('.element-banner').forEach((item) => {
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
  
      if(uniqImg.querySelector('img').getAttribute('src') !== document.querySelector('.element-banner_start').querySelector('img').getAttribute('src')) {
        document.querySelectorAll('.element-banner').forEach((el, index) => {
          el.classList.remove('element-banner_start')
        })
        uniqImg.classList.add('element-banner_start')
      }
      else {
        let uniqImg = getUniqueImage(oldArr)
        document.querySelectorAll('.element-banner').forEach((el, index) => {
          el.classList.remove('element-banner_start')
        })
        uniqImg.classList.add('element-banner_start')
      }
    }, 3000)
  }
}

