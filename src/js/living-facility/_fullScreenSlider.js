import vanillaLazy from "vanilla-lazyload";
// import getChildIndex from "../functions/getChildIndex";
import { disableScroll } from ".././functions/disable-scroll";
import { enableScroll } from ".././functions/enable-scroll";
import { isDesktop } from "../functions/check-viewport";  

export default class fsSlider {

  constructor(sliderEl, options) {

    this.fsEl = sliderEl;
    this.fsSliderEl = this.fsEl.querySelector(".swiper-container");
    this.fsWrpEl = this.fsEl.querySelector(".swiper-wrapper");
    this.sldTpl = this.fsEl.querySelector("#slide-tpl");
    this.sldSel = "." + this.sldTpl.content.firstElementChild.classList[0];
    this.fsClose = this.fsEl.querySelector("[fs-close]");
    this.slides = [];
    this.currCtr = undefined;
    this.lastCtr = undefined;
    this.init();
    this.indexGallery = 0;
    this.arrAll = []
    this.elements = document.querySelectorAll('[data-fs-full]')

    this.elements.forEach((element, index) => {
      element.addEventListener('click', () => {this.handleClick(element, index)} );
    })

    //Vlad's substance
    this.option = options;
    //Vlad's substance
  }

  handleClick(el, indexClicked) {

    let dataCount = parseInt(el.getAttribute('data-fs-all'), 10)
    let dataTitle = el.getAttribute('data-fs-title')

    const sldArr = this.elements
    const allGall = [];

    sldArr.forEach((el, index) => {

      //const length = parseInt(el.getAttribute('data-fs-all'), 10)
      let newArray = new Array(dataCount).fill(0)
      allGall.push(newArray)
    });

    this.openSlider(this.indexGallery, allGall[indexClicked], document.querySelector("[data-fs-ctr]"), dataTitle);
  }

  init() {
    document.querySelectorAll("[data-fs-ctr]:not(._fs-inited)").forEach((fsCtr) => {
      fsCtr.classList.add("_fs-inited");
    });

  }

  openSlider(event = undefined, srcArr = undefined, fsCtr = null, initialIndex) {
    this.slides = this.mountSlides(srcArr);
    let images = [];
    let currentGallery = [];

    function getData (initialIndex) {
      console.log(initialIndex)
      return new Promise((resolve) => {
        fetch(`../../api/gallery/gallery-${initialIndex}.json`)
        .then((res) => {
          return res.json()
        })
        .then((result) => {
          result.forEach((el, index) => { 
            currentGallery.push(el)
          })
          resolve()
        })
      })
    }
    function setData() {
      currentGallery.forEach((el, index) => {
        let newImg = `<img class="carousel-item" src='${el.srcPath}'></img>`; //
        images.push(newImg);
      });
      document.querySelectorAll('.swiper-zoom-container').forEach((el, index) => {
        el.innerHTML = images[index]
      })
    }
    async function applyData () {
      await getData(initialIndex)
      setData()
    }
    applyData()

    this.fsClose.addEventListener("click", this.closeSlider.bind(this), {
      once: true,
    },);

    this.fsSliderObj = new Swiper(this.fsSliderEl, {
      wrapperClass: "swiper-wrapper",
      slideClass: "swiper-slide",
      slidesPerView: 1,
      runCallbacksOnInit: false,
      navigation: this.option.navigation,
      pagination: {
        el: ".slider-pagination-navigation .swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function(number) {
          if (number < 10) {
          number = '0' + number;
          }
          return number;
        },
        formatFractionTotal: function(number) {
          if (number < 10) {
          number = '0' + number;
          }
          return number;
        },
      },
      // keyboard: this.option.keyboard,
      initialSlide: 0,
      on: {
        beforeInit: function () {
        },
        afterInit: function (sw) {

          let ulBullets = document.querySelector('.gallery-thumbs__content')
          ulBullets.querySelectorAll('.swiper-pagination-bullet').forEach((item, index) => {
            item.innerHTML = `<span class="gallery-thumbs__el"><img src=${srcArr[index]}></img></span>`
          }); 
        },
      },
    });

    this.fsEl.classList.add("_active");
    disableScroll();
  }
  closeSlider() {

    this.fsEl.classList.remove("_active");

    enableScroll();
    this.fsEl.addEventListener(
      "transitionend",
      () => {
        this.fsSliderObj.destroy();
      },
      { once: true }
    );

    setTimeout(() => {
      this.removeSlides()
    }, 310)
    
  }
  mountSlides(srcArr) {
    console.log(srcArr)
    srcArr.forEach((src) => {
      const slide = this.sldTpl.content.firstElementChild.cloneNode(true);
      slide.querySelector("img").dataset.src = src;
      this.fsWrpEl.appendChild(slide);
    });
    return this.fsWrpEl.querySelectorAll(this.sldSel);
  }
  removeSlides(sldTpl, wrp, sldArr) {
    this.slides.forEach((el) => {
      el.remove();
    });
    this.slides = [];
  }
}

// export default class fsSlider {

//   constructor(sliderEl, options) {

//     this.fsEl = sliderEl;
//     this.fsSliderEl = this.fsEl.querySelector(".swiper-container");
//     this.fsWrpEl = this.fsEl.querySelector(".swiper-wrapper");
//     this.sldTpl = this.fsEl.querySelector("#slide-tpl");
//     this.sldSel = "." + this.sldTpl.content.firstElementChild.classList[0];
//     this.fsClose = this.fsEl.querySelector("[fs-close]");
//     this.slides = [];
//     this.currCtr = undefined;
//     this.lastCtr = undefined;
//     this.init();
//     this.indexGallery = 0;
//     this.arrAll = []
//     this.elements = document.querySelectorAll('[data-fs-full]')

//     this.elements.forEach((element, index) => {
//       element.addEventListener('click', () => {this.handleClick(element, index)} );
//     })

//     //Vlad's substance
//     this.option = options;
//     //Vlad's substance
//   }

//   handleClick(el, indexClicked) {
//     //console.log(el)

//     let dataCount = parseInt(el.getAttribute('data-fs-all'), 10)
//     //console.log(dataCount)

//     const sldArr = this.elements
//     const allGall = [];

//     sldArr.forEach((el, index) => {

//       const length = parseInt(el.getAttribute('data-fs-all'), 10)
//       let newArray = new Array(length).fill(0)
//       allGall.push(newArray)
//     });
//     //console.log(allGall[el.getAttribute('data-index')]) 
//     //this.openSlider(this.indexGallery, allGall[el.getAttribute('data-index')], document.querySelector("[data-fs-ctr]"), el.getAttribute('data-index'));

//     this.openSlider(this.indexGallery, allGall[indexClicked], document.querySelector("[data-fs-ctr]"), dataCount);
//   }

//   init() {
//     document.querySelectorAll("[data-fs-ctr]:not(._fs-inited)").forEach((fsCtr) => {
//       fsCtr.classList.add("_fs-inited");
//     });

//   }

//   openSlider(event = undefined, srcArr = undefined, fsCtr = null, initialIndex) {
//     //console.log(initialIndex); ++
//     this.slides = this.mountSlides(srcArr);
//     let images = [];
//     let currentGallery = [];

//     function getData (initialIndex) {
//       console.log(initialIndex)
//       return new Promise((resolve) => {
//         fetch(`../api/gallery/gallery-${initialIndex}.json`)
//         .then((res) => {
//           return res.json()
//         })
//         .then((result) => {
//           //console.log(result)
//           result.forEach((el, index) => { 
//             currentGallery.push(el)
//           })
//           resolve()
//         })
//       })
//     }
//     function setData() {
//       currentGallery.forEach((el, index) => {
//         let newImg = `<img class="carousel-item" src='${el.srcPath}'></img>`; //
//         images.push(newImg);
//       });
//       document.querySelectorAll('.swiper-zoom-container').forEach((el, index) => {
//         el.innerHTML = images[index]
//       })
//     }
//     async function applyData () {
//       await getData(initialIndex)
//       setData()
//     }
//     applyData()

//     this.fsClose.addEventListener("click", this.closeSlider.bind(this), {
//       once: true,
//     },);

//     this.fsSliderObj = new Swiper(this.fsSliderEl, {
//       wrapperClass: "swiper-wrapper",
//       slideClass: "swiper-slide",
//       slidesPerView: 1,
//       runCallbacksOnInit: false,
//       navigation: this.option.navigation,
//       pagination: {
//         el: ".slider-pagination-navigation .swiper-pagination",
//         type: "fraction",
//         formatFractionCurrent: function(number) {
//           if (number < 10) {
//           number = '0' + number;
//           }
//           return number;
//         },
//         formatFractionTotal: function(number) {
//           if (number < 10) {
//           number = '0' + number;
//           }
//           return number;
//         },
//       },
//       // keyboard: this.option.keyboard,
//       initialSlide: 0,
//       on: {
//         beforeInit: function () {
//         },
//         afterInit: function (sw) {

//           let ulBullets = document.querySelector('.gallery-thumbs__content')
//           ulBullets.querySelectorAll('.swiper-pagination-bullet').forEach((item, index) => {
//             item.innerHTML = `<span class="gallery-thumbs__el"><img src=${srcArr[index]}></img></span>`
//           }); 
//         },
//       },
//     });

//     this.fsEl.classList.add("_active");
//     disableScroll();
//   }
//   closeSlider() {

//     this.fsEl.classList.remove("_active");
//     enableScroll();
//     this.fsEl.addEventListener(
//       "transitionend",
//       () => {
//         // if (this.vl._settings) {
//         //   this.vl.destroy();
//         // }
//         this.fsSliderObj.destroy();
//       },
//       { once: true }
//     );

//     setTimeout(() => {
//       this.removeSlides()
//     }, 310)
    
//   }
//   mountSlides(srcArr) {
//     console.log(srcArr)
//     srcArr.forEach((src) => {
//       const slide = this.sldTpl.content.firstElementChild.cloneNode(true);
//       slide.querySelector("img").dataset.src = src;
//       this.fsWrpEl.appendChild(slide);
//     });
//     return this.fsWrpEl.querySelectorAll(this.sldSel);
//   }
//   removeSlides(sldTpl, wrp, sldArr) {
//     this.slides.forEach((el) => {
//       el.remove();
//     });
//     this.slides = [];
//   }
// }



// [
//   {
//     "id": "0",
//     "srcPath": "/img/living-facility/gallery/1/gallery-1-1.jpg"
//   },
//   {
//     "id": "1",
//     "srcPath": "/img/living-facility/gallery/1/gallery-1-2.jpg"
//   },
//   {
//     "id": "2",
//     "srcPath": "/img/living-facility/gallery/1/gallery-1-3.jpg"
//   }
// ]