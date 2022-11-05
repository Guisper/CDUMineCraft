import Swiper from './swiper-bundle.min'
import '../style/swiper-bundle.min.css'
import '../style/animate.min.css'

import '../style/style.less'

const swiper = new Swiper('.mySwiper', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
})

new Swiper('.mySwiper2', {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
  },
  thumbs: {
    swiper
  },
})

const anchorLink = document.querySelector('.btn button')
const target = document.querySelector('.box')

anchorLink && anchorLink.addEventListener('click', function (e) {
  if (window.scrollTo) {
    e.preventDefault()
    window.scrollTo({ 'behavior': 'smooth', 'top': target.offsetTop })
  }
})