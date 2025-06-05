import { isDesktop } from "./_house-lf";

function slideEffectButton() {
  document.querySelectorAll('.slide-button').forEach(
    (el) => {
      const container = document.createElement('div')
      const innerSpan = el.querySelector('span')

      container.className = 'slide-button-inner'
      container.appendChild(innerSpan.cloneNode(true))
      container.appendChild(innerSpan.cloneNode(true))
      innerSpan.remove()
      el.insertBefore(container, el.firstChild);
    }
  )

}

if(isDesktop()) {
  slideEffectButton()
}