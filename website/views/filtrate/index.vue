<template>
  <div class="filterate">
    <filtrate :radioList="radioList" :condition="condition" :payload="payload" :list="headerList"/>
  </div>
</template>

<script>
import filtrate from '../../../src/Filtrate'
export default {
  name: 'test',
  components: {
    filtrate
  },
  data() {
    return {
      condition: {
        district: [
          { title: '测试112', value: 'test' }
        ],
        cate: [
          { title: '测试22', value: 'test' }
        ],
        price: [
          { title: '测试33', value: 'test' }
        ],
        table_num: [
          { title: '测试434', value: 'test' }
        ],
        sort: [
          { title: '测试5455', value: 'test', select: 'sort' }
        ]
      },
      payload: {
        district: ['test'],
        price: [],
        cate: [],
        table_num: [],
        sort: []
      },
      headerList: [
        { name: '区域', key: 'district' },
        { name: '价格', key: 'price' },
        { name: '类型', key: 'cate' },
        { name: '桌数', key: 'table_num' },
        { name: '', key: 'sort' }
      ],
      radioList: ['sort', 'price', 'table_num']
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.filterate {
  height: 100vh;
}
</style>
