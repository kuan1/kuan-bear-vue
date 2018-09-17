<template>
  <el-pagination
    v-if="total"
    @size-change="handleSizeChange"
    layout="sizes, prev, pager, next"
    :current-page="payload.page"
    :page-size="payload.per_page"
    :page-sizes="[12, 25, 50, 100]"
    :total="total"
    @current-change="changePage"
  >
  </el-pagination>
</template>

<script>
  export default {
    props: {
      payload: {
        type: Object
      },
      total: {
        type: Number,
        default: 0
      },
      change: {
        type: Function,
        default() {
          return () => {}
        }
      }
    },
    data() {
      return {
        per_page: this.payload.per_page
      }
    },
    methods: {
      handleSizeChange(per_page) {
        this.per_page = per_page
        const payload = {
          per_page: per_page
        }
        this.change(payload)
      },
      changePage(e) {
        const payload = {
          page: e
        }
        this.change(payload)
        this.$emit('change')
      }
    }
  }
</script>
