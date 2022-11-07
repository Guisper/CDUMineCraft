import * as Swiper from './swiper-bundle.min'
import { clickToSlide } from './anchor'
// 页面整体竖向滚动
const pageSilde = new Swiper('#page', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

clickToSlide('.btn button', pageSilde)

// 第二页
const swiper = new Swiper('.mySwiper', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true
})

new Swiper('.ideal', {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },
  thumbs: {
    swiper
  }
})

// 第三页游戏实录的立方体
new Swiper('.cube', {
  effect: 'cube',
  autoplay: {
    delay: 1500,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94
  },
  pagination: {
    el: '.swiper-pagination'
  }
})
