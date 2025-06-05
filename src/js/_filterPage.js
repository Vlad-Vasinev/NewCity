

$(".js-range-slider-1").each(function() {

    let my_range = $(".js-range-slider-1").data("ionRangeSlider")

    var $range = $(this);
    var $inputFrom = $range.siblings(".input-ion-from")
    var $inputTo = $range.siblings(".input-ion-to");
    var instance;
    var min = 0;
    var max = 1000000;
    var from = 0;
    var to = 0;

    $range.ionRangeSlider({
      skin: "round",
      type: "double",
      min: min,
      max: max,
      from: 200,
      to: 800,
      onStart: updateInputs, //updateInputs
      onChange: updateInputs,
      onFinish: updateSlider
    });
    instance = $range.data("ionRangeSlider");
  
    function updateInputs(data) {

      from = data.from;
      to = data.to;

      $inputFrom.prop("value", from);
      $inputTo.prop("value", to);

    }
  
    $inputFrom.on("change", function(event) {
      var val = $(this).prop("value");

      // validate
      if (val < min) {
        val = min;
      } else if (val > to) {
        val = to;
      }
  
      instance.update({
        from: val
      });
  
      $(this).prop("value", val);
    });
  
    function perMounth () {

    }
    function perMounthDifference () {
    
    }
    function overPay () {
    
    }
    function firstPayFromPrice () {
    
    }
    function resultBenefit () {
    
    }

    function standartMortgage () {
    
    }
    function companyMortgage () {
    
    }

    function updateSlider () {
        $inputTo.trigger('keyup')
        $inputFrom.trigger('keyup')

        if($inputTo[0].classList.contains('price-input')) {
            console.log($inputTo[0].value)

            let creditBody = document.querySelector('.price-input').value

            let firstResFamily = Math.round(($inputTo[0].value / 100) * 20.1)
            document.querySelector('.first-pay-input').value = firstResFamily
            let familyPerMounthPay = document.querySelector('.h2.term-el__permounthFamily span').innerHTML = Math.round(((document.querySelector('.price-input').value - firstResFamily) * 0.005) / (1 - Math.pow((1 + 0.005), -12 * document.querySelector('.time-pay-input').value )))
            let standartPerMounthPay = document.querySelector('.term-el__permounthStandart span').innerHTML = Math.round(((document.querySelector('.price-input').value - firstResFamily) * 0.01475) / (1 - Math.pow((1 + 0.01475), -12 * document.querySelector('.time-pay-input').value )))

            let diffPerMounth = familyPerMounthPay - standartPerMounthPay
            document.querySelector('.mortgage-lower span').innerHTML = Math.abs(diffPerMounth) 
            document.querySelector('.mortgage-upper span').innerHTML = Math.abs(diffPerMounth) 

            let overPayFamily = (familyPerMounthPay * 12 * document.querySelector('.time-pay-input').value) - creditBody
            let overPayStandart = (standartPerMounthPay * 12 * document.querySelector('.time-pay-input').value) - creditBody
            document.querySelector('.family-overPay span').innerHTML = Math.abs(overPayFamily) 
            document.querySelector('.standart-overPay span').innerHTML = Math.abs(overPayStandart) 

            let diffBetweenOverPay = overPayStandart - overPayFamily
            document.querySelector('.term-el__text-difference.diff-upper span').innerHTML = diffBetweenOverPay
            document.querySelector('.term-el__text-difference.diff-lower span').innerHTML = diffBetweenOverPay
            document.querySelector('.term-el__result-price.last-res span').innerHTML = diffBetweenOverPay

            document.querySelector('.last-res-standart span').innerHTML = overPayStandart

        }
          if($inputTo[0].classList.contains('first-pay-input')) {
            console.log($inputTo[0].value)

            let creditBody = document.querySelector('.price-input').value

            let firstResFamily = $inputTo[0].value
            let familyPerMounthPay = document.querySelector('.h2.term-el__permounthFamily span').innerHTML = Math.round((Math.abs(document.querySelector('.price-input').value - firstResFamily) * 0.005) / (1 - Math.pow((1 + 0.005), -12 * document.querySelector('.time-pay-input').value )))
            let standartPerMounthPay = document.querySelector('.term-el__permounthStandart span').innerHTML = Math.round((Math.abs(document.querySelector('.price-input').value - firstResFamily) * 0.01475) / (1 - Math.pow((1 + 0.01475), -12 * document.querySelector('.time-pay-input').value )))

            let diffPerMounth = familyPerMounthPay - standartPerMounthPay
            document.querySelector('.mortgage-lower span').innerHTML = Math.abs(diffPerMounth) 
            document.querySelector('.mortgage-upper span').innerHTML = Math.abs(diffPerMounth) 

            let overPayFamily = (familyPerMounthPay * 12 * document.querySelector('.time-pay-input').value) - creditBody
            let overPayStandart = (standartPerMounthPay * 12 * document.querySelector('.time-pay-input').value) - creditBody
            document.querySelector('.family-overPay span').innerHTML = Math.abs(overPayFamily) 
            document.querySelector('.standart-overPay span').innerHTML = Math.abs(overPayStandart) 

            let diffBetweenOverPay = overPayStandart - overPayFamily
            document.querySelector('.term-el__text-difference.diff-upper span').innerHTML = diffBetweenOverPay
            document.querySelector('.term-el__text-difference.diff-lower span').innerHTML = diffBetweenOverPay
            document.querySelector('.term-el__result-price.last-res span').innerHTML = diffBetweenOverPay

            document.querySelector('.last-res-standart span').innerHTML = Math.abs(overPayStandart)

          }
          if($inputTo[0].classList.contains('time-pay-input')) {
            console.log($inputTo[0].value)

            let creditBody = document.querySelector('.price-input').value

            console.log(document.querySelector('.first-pay-input').value)

            let firstResFamily = document.querySelector('.first-pay-input').value
            let familyPerMounthPay = document.querySelector('.h2.term-el__permounthFamily span').innerHTML = Math.round((Math.abs(document.querySelector('.price-input').value - firstResFamily) * 0.005) / (1 - Math.pow((1 + 0.005), -12 * $inputTo[0].value)))
            let standartPerMounthPay = document.querySelector('.term-el__permounthStandart span').innerHTML = Math.round((Math.abs(document.querySelector('.price-input').value - firstResFamily) * 0.01475) / (1 - Math.pow((1 + 0.01475), -12 * $inputTo[0].value)))

            let diffPerMounth = familyPerMounthPay - standartPerMounthPay
            document.querySelector('.mortgage-lower span').innerHTML = Math.abs(diffPerMounth) 
            document.querySelector('.mortgage-upper span').innerHTML = Math.abs(diffPerMounth) 

            let overPayFamily = (familyPerMounthPay * 12 * $inputTo[0].value) - creditBody
            let overPayStandart = (standartPerMounthPay * 12 * $inputTo[0].value) - creditBody
            document.querySelector('.family-overPay span').innerHTML = Math.abs(overPayFamily) 
            document.querySelector('.standart-overPay span').innerHTML = Math.abs(overPayStandart) 

            let diffBetweenOverPay = overPayStandart - overPayFamily
            document.querySelector('.term-el__text-difference.diff-upper span').innerHTML = diffBetweenOverPay
            document.querySelector('.term-el__text-difference.diff-lower span').innerHTML = diffBetweenOverPay
            document.querySelector('.term-el__result-price.last-res span').innerHTML = diffBetweenOverPay

            document.querySelector('.last-res-standart span').innerHTML = Math.abs(overPayStandart)

          }
    }

    $inputTo.on("change", function(event) {

        console.log('on on on')

      var val = $(this).prop("value");
      if (val < from) {
        val = from;
      } else if (val > max) {
        val = max;
      }
  
      instance.update({
        to: val
      });
  
      $(this).prop("value", val);
    });
  });

document.querySelectorAll('.filter__accordion .accordeon-el').forEach((el, index) => {
    el.addEventListener('click', () => {
        console.log('filter el')
        document.querySelectorAll('.filter__accordion .accordeon-el').forEach((item, index) => {
            item.classList.remove('filter__accordion_active')
        })
        document.querySelectorAll('.filter__form').forEach((item, index) => {
            item.classList.remove('filter__form_active')
        })
        document.querySelectorAll('.filter__form')[index].classList.add('filter__form_active')
        el.classList.add('filter__accordion_active')
    })
})

document.querySelectorAll('.filter__more').forEach((el) => {
    el.addEventListener('click', () => {
        
        if(el.parentElement.querySelector('.filter__form').classList.contains("filter__form_active") ) {
            el.innerHTML = "More options"
            el.parentElement.querySelector('.filter__form').classList.remove('filter__form_active')
        }
        else {
            el.parentElement.querySelector('.filter__form').classList.add('filter__form_active')
            el.innerHTML = "Hide additional options"
        }
    })
})

if(document.querySelector('.filter__open')) {
    document.querySelector('.filter__open').addEventListener('click', () => { 

        document.querySelector('.filter').style.height = "100vh"
        if(window.innerWidth <= 768) {
            document.querySelector('.page').style.minHeight = "100vh"
            document.querySelector('.page').style.overflow = "visible"
        }
        document.querySelector('.filter').querySelector('.filter__block-count').classList.add('count_active')

        document.querySelectorAll('.filter').forEach((el) =>  {

            el.querySelector('.filter__block').querySelector('.close-btn.first-popup').addEventListener('click', () => {
                el.querySelector('.filter__block').classList.remove('filter__block_active')
                document.querySelector('.filter').style.height = "initial"
                if(window.innerWidth <= 768) {
                    document.querySelector('.page').style.minHeight = "auto"
                }
                document.querySelector('.filter').querySelector('.filter__block-count').classList.remove('count_active')
                enableScroll()
            })
            el.querySelector('.filter__block').classList.add('filter__block_active')
            disableScroll()
        })
    })
}

function render(el) {

    return new Promise((resolve, reject) => {
        el.scrollIntoView({ block: "center", behavior: "auto" })

        document
        .querySelector('.filter__block')
        .querySelector('.filter__block-moredetail')
        .classList.add('moredetail_active')

        resolve()
       
        if(window.innerWidth <= 768) {
            document.querySelector('.page').style.minHeight = "100vh"
            document.querySelector('.page').style.overflow = "visible"
        }
        document
        .querySelector('.filter__block')
        .querySelector('.filter__block-moredetail').querySelector('.close-btn.second-popup').addEventListener('click', () => {
            if(window.innerWidth >= 768) {
                enableScroll()
            }
            if(window.innerWidth <= 768) {
                document
                .querySelector('.filter__block').style.overflow ="scroll"
            }

            document
            .querySelector('.filter__block')
            .querySelector('.filter__block-moredetail')
            .classList.remove('moredetail_active')
        })
    })
}

document.querySelectorAll('.filter__form-moredetail').forEach((el) => {

    el.addEventListener('click', () => {

        if(window.innerWidth >= 786) {
            disableScroll()
        }

        render(el).then(() => {
            if(window.innerWidth <= 768) {
                document
                .querySelector('.filter__block').style.overflow ="hidden"
            }
            console.log('inside promise')
            if(document.querySelector('.filter__block-moredetail').classList.contains('moredetail_active')) {
                if(window.innerWidth >= 768) {
                    document.addEventListener('click', function documentClick (e) {
                        if (!e.target.closest('.filter__block-moredetail') && e.target != el) {
                            console.log('after opened')
                            document.querySelector('.filter__block-moredetail').classList.remove('moredetail_active')
                            document.removeEventListener('click', documentClick, false)
                            enableScroll()
                        }
                    })
                }

            }

        })
    })
})

document.querySelectorAll('.filtered__about-icon').forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('_checked')
    })
})

function listActive (listItem) {

    let selectedInput = []
    if(!listItem.classList.contains('list_active')) {

        document.querySelectorAll('.select-fields__wrapper-list').forEach((item) => {
            item.classList.remove('list_active')
        })

        listItem.classList.add('list_active')
        listItem.parentElement.querySelectorAll('label').forEach(element => {
            element.addEventListener('click', (e) => {
                localStorage.removeItem('oldValue');
                if(element.classList.contains('checkbox_active')) {
                    e.stopImmediatePropagation()
                    element.classList.remove('checkbox_active')
                    localStorage.setItem('selectedValues', (selectedInput.length -= 1));

                    listItem.parentElement.querySelector('p').innerHTML =  `Selected: ${localStorage.getItem('selectedValues')}`
                    if(localStorage.getItem('selectedValues') === null) {
                        localStorage.removeItem('selectedValues');
                        listItem.parentElement.querySelector('p').innerHTML =  `Selected: ${localStorage.getItem('oldValue')}`
                    }
                }
                else {
                    e.stopImmediatePropagation()
                    element.classList.add('checkbox_active')
                    selectedInput.push(element)
                    localStorage.setItem('selectedValues', selectedInput.length);
                    localStorage.setItem('oldValue', listItem.parentElement.querySelector('p').innerHTML);

                    listItem.parentElement.querySelector('p').innerHTML =  `Selected: ${localStorage.getItem('selectedValues')}`
                    if(localStorage.getItem('selectedValues') === null) {
                        localStorage.removeItem('selectedValues');
                        listItem.parentElement.querySelector('p').innerHTML =  `Selected: ${localStorage.getItem('oldValue')}`
                    }
                }
            })
        });
    }
    else {
        listItem.classList.remove('list_active')
    }
}

document.querySelectorAll('.select-fields__wrapper').forEach((el) => {
    el.addEventListener('click', () => {
        listActive(el.querySelector('.select-fields__wrapper-list'))
        document.addEventListener('click', function closeListClick (e) {
            if (!e.target.closest('.select-fields__wrapper')) {
                listActive(el.querySelector('.select-fields__wrapper-list'))
                el.querySelector('.select-fields__wrapper-list').classList.remove('list_active')
                localStorage.clear()
                document.removeEventListener('click', closeListClick, false)
            }
        })
        // localStorage.clear()
    })
})

