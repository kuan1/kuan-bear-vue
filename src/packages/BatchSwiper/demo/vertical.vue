<template>
  <div>
    <batch-swiper :pages="pages"></batch-swiper>
  </div>
</template>

<script>
  // 竖直屏幕
  import BatchSwiper from '../index'
  import data from './vertical.js'

  import {flattenMyTree} from '../_utils'

  const base_url = 'http://7s1r2o.com1.z0.glb.clouddn.com/'
  const size = '!w1080x1920'

  function prepareData(pages) {
    return pages.reduce((collect, {materials_attr, text_attr, background, id}) => {
      const layers = flattenMyTree([...text_attr, ...materials_attr.image]).reverse()
      if (!layers.length) return collect
      return [...collect, {background: background ? base_url + background + size : '', layers, id}]
    }, [])
  }

  export default {
    computed: {
      pages() {
        return prepareData(data)
      }
    },
    components: {
      BatchSwiper
    }
  }
</script>
