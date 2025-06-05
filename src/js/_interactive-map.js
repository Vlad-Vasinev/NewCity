

document.querySelectorAll('.layer-link').forEach(element => {
	element.addEventListener('click', (e) => {
		document.querySelectorAll('.house-path').forEach((el) => {
			el.classList.remove('house-path_active')
		})
		document.querySelectorAll('.layers svg').forEach((el) => {
			el.style.zIndex = "99"
		})
		element.querySelector('.house-path').classList.add('house-path_active')
		document.querySelectorAll('.layers__info').forEach((el) => {
			el.classList.remove('layers__info_active')
		})
		document.querySelectorAll('.layers__info')[e.currentTarget.getAttribute('data-link-id')].classList.add('layers__info_active')
	})
});

document.querySelectorAll('.layers__info svg').forEach((el) => {
	el.addEventListener('click', () => {
		document.querySelectorAll('.layers svg').forEach((el) => {
			el.style.zIndex = "101"
		})
		document.querySelectorAll('.house-path').forEach((el) => {
			el.classList.remove('house-path_active')
		})
		document.querySelectorAll('.layers__info').forEach((el) => {
			el.classList.remove('layers__info_active')
		})
	})
})

let layerImg = document.querySelector('.layers img')

document.querySelectorAll('.layer-link').forEach((item, index) => {
	let itemLeft = item.getBoundingClientRect().left - layerImg.getBoundingClientRect().left + (item.getBoundingClientRect().width / 2) - (document.querySelectorAll('.layers__text')[index].getBoundingClientRect().width / 2)
	document.querySelectorAll('.layers__text')[index].style.setProperty('--data-text-left', `${itemLeft}px`)
	document.querySelectorAll('.layers__info')[index].style.setProperty('--data-text-left', `${itemLeft}px`)

	let itemTop = item.getBoundingClientRect().top - layerImg.getBoundingClientRect().top + (item.getBoundingClientRect().height / 2) - (document.querySelectorAll('.layers__text')[index].getBoundingClientRect().height / 2)
	document.querySelectorAll('.layers__text')[index].style.setProperty('--data-text-top', `${itemTop}px`)
})

// const map = document.getElementById('map');
// let isDragging = false;
// let startX, startY, offsetX = 0, offsetY = 0;

// layerImg.addEventListener('mousedown', (e) => {
//   isDragging = true;
//   startX = e.clientX - offsetX;
//   startY = e.clientY - offsetY;
//   layerImg.style.cursor = 'grabbing';
// });

// document.addEventListener('mouseup', () => {
//   isDragging = false;
//   layerImg.style.cursor = 'grab';
// });

// document.addEventListener('mousemove', (e) => {
//   if (isDragging) {
//     e.preventDefault();
//     offsetX = e.clientX - startX;
//     offsetY = e.clientY - startY;
//     layerImg.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
//   }
// });

// var _startX = 0;
// var _startY = 0;
// var _offsetX = 0;           
// var _offsetY = 0;
// var _dragElement;
// document.onmousedown = OnMouseDown;
// document.onmouseup = OnMouseUp;

// function OnMouseDown(event){
//   document.onmousemove = OnMouseMove;
//     _startX = event.clientX;
//   _startY = event.clientY;
//   _offsetX = document.querySelector('.layers img').offsetLeft;
//   _offsetY = document.querySelector('.layers img').offsetTop;
//   _dragElement = document.querySelector('.layers img');

// }

// function OnMouseMove(event){
//     _dragElement.style.left = (_offsetX + event.clientX - _startX) + 'px';
//   _dragElement.style.top = (_offsetY + event.clientY - _startY) + 'px';
// }

// function OnMouseUp(event){
//   document.onmousemove = null;
//   _dragElement=null;
// }