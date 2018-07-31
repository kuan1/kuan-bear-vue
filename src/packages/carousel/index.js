import Carousel from './Carousel'
import CarouselItem from './CarouselItem'

const install = (Vue) => {
  Vue.component('carousel', Carousel)
  Vue.component('carousel-item', CarouselItem)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  Carousel,
  CarouselItem
}

export default {
  Carousel,
  CarouselItem,
  install
}
