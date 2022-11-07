import * as Swiper from './swiper-bundle.min'

const swiper = new Swiper('.mySwiper', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true
})

new Swiper('.mySwiper2', {
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
