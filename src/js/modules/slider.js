import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// настройки слайдера
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 2.4,
  spaceBetween: 22,
  grabCursor: true,

  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },

  modules: [Navigation, Pagination],
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
