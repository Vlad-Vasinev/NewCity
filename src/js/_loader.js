
window.onload = function () {
  document.body.classList.add('loaded_hiding')
  setTimeout(function () {
    document.body.classList.add('loaded')
    document.body.classList.remove('loaded_hiding')
  }, 700)
}

// window.onload = function () {
//   document.body.classList.add('body_color')
// }

// window.onload = function () {
//   document.body.className += ' loaded_hiding'; // Добавляем класс

//   setTimeout(function () {
//     document.body.className += ' loaded'; // Добавляем другой класс
//     document.body.className = document.body.className.replace(' loaded_hiding', ''); // Убираем первый класс
//   }, 700);
// }

// document.addEventListener('DOMContentLoaded', function () {
//   document.body.classList.add('loaded_hiding');
//   setTimeout(function () {
//     document.body.classList.add('loaded');
//     document.body.classList.remove('loaded_hiding');
//   }, 700);
// });