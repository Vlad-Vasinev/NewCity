import "./functions/ymaps"
//APP.Plugins.Ymaps.init()
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())

// Определение ширины экрана
import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
window.isMobile = isMobile

import { aPixels } from './functions/aPixels';

window.aPixels = aPixels

import ionRangeSlider from '../../node_modules/ion-rangeslider/js/ion.rangeSlider'

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-мен
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
import { disableScroll } from './functions/disable-scroll';
window.disableScroll = disableScroll

// Реализация включения скролла (не забудьте вызвать функцию)
import { enableScroll } from './functions/enable-scroll';
window.enableScroll = enableScroll

//import { jQuery } from '../../node_modules/jquery/dist/jquery'

//import { Fancybox } from '../resources/fancybox.umd.js'
import { Fancybox } from '../../node_modules/@fancyapps/ui/dist/fancybox/fancybox.umd';

Fancybox.bind('[data-fancybox="gallery"]', { //added to workspace
  Image: {
    hideScrollbar: false, // Показывать ли полосу прокрутки
    protect: true, // Защита изображения от копирования и загрузки
    click: 'close', // Действие при клике на изображение (close - закрыть, next - следующее изображение)
    zoom: false, // Возможность увеличения изображения
    width: 800, // Ширина изображения
    height: 600,
  }
});

// Fancybox.bind('[data-fancybox]', {

// })
// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение свайпера
import Swiper, { Navigation, Pagination, EffectFade, Autoplay, Zoom} from 'swiper';
Swiper.use([Navigation, Pagination, EffectFade, Autoplay, Zoom]);
window.Swiper = Swiper


// import { fileDrag } from './functions/fileDrag';

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

import { validateForms } from './functions/validate-forms';
