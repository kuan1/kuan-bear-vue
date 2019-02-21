<template>
  <table class="my-pagination">
    <tr>
      <td
        v-for="(item, index) in data" :key="index"
        :class="{active: item === page}"
        @click="change(item)"
      >{{ item }}</td>
    </tr>
  </table>
</template>

<script>
  export default {
    name: 'my-pagination',
    props: {
      page: {
        type: Number,
        default: 1
      },
      size: {
        type: Number,
        default: 10
      },
      total: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        visible: false,
        data: []
      }
    },
    methods: {
      init() {
        const { total, page, size } = this
        this.data = getPaginationData({ total, page, size })
      },
      change(page) {
        if (page === '...') return
        this.$emit('update:page', page)
        this.$emit('change', page)
      }
    },
    mounted() {
      this.init()
    }
  }

  // 获取连续数组
  function getContinueMap(start = 0, end = 0) {
    const data = []
    for (let i = start; i < end; i++) {
      data.push(i)
    }
    return data
  }

  // 获取分页数据
  function getPaginationData({ total = 0, page = 1, size = 10, buttonNum = 7 }) {
    const totalPage = Math.ceil((total) / size)
    let data = []
    // 开始数据
    let start = page - Math.floor((buttonNum - 2) / 2)
    if (start <= 2) {
      start = 1
    } else {
      // 左侧显示省略号
      data.push(1)
      data.push('...')
    }

    // 结束数据
    let end = start + buttonNum - 2
    if (end >= totalPage - 1) {
      end = totalPage
      if (start > 3) {
        start = Math.max(3, end - (buttonNum - 2))
      }
      data = data.concat(getContinueMap(start, end + 1))
    } else {
      // 右侧显示省略号
      data = data.concat(getContinueMap(start, end))
      data.push('...')
      data.push(totalPage)
    }
    return data
  }
</script>

<style lang="scss" scoped>
  .my-pagination {
    border-collapse: collapse;
    text-align: center;
    td {
      border: 1px solid #dfdfdf;
      user-select: none;
      min-width: 32px;
      height: 32px;
      line-height: 30px;
      cursor: pointer;
      font-weight: 500;
    }
    .active {
      color: #eee;
      background: #333;
    }
  }
</style>
