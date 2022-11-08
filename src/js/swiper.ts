import * as Swiper from './swiper-bundle.min'
import { clickToSlide } from './anchor'

// 页面整体竖向滚动
const pageSilde = new Swiper('#page', {
  lazy: {
    loadPrevNext: true
  },
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

// 菜单
const menuButton = document.querySelector('.menu-button')
const openMenu = () => (menuSwiper as any).slidePrev()
const menuSwiper = new Swiper('#menu', {
  lazy: {
    loadPrevNext: true
  },
  slidesPerView: 'auto',
  initialSlide: 1,
  resistanceRatio: 0,
  slideToClickedSlide: true,
  on: {
    slideChangeTransitionStart() {
      const slider = this
      if (slider.activeIndex === 0) {
        menuButton.classList.add('cross')
        // required because of slideToClickedSlide
        menuButton.removeEventListener('click', openMenu, true)
      } else {
        menuButton.classList.remove('cross')
      }
    },
    slideChangeTransitionEnd() {
      const slider = this
      if (slider.activeIndex === 1) {
        menuButton.addEventListener('click', openMenu, true)
      }
    }
  }
})

// 第二页
const swiper = new Swiper('.mySwiper', {
  lazy: {
    loadPrevNext: true
  },
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true
})

new Swiper('.show', {
  lazy: {
    loadPrevNext: true
  },
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
  lazy: {
    loadPrevNext: true
  },
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
