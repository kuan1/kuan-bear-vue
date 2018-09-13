<template>
  <section class="search-box">
    <div class="item" v-for="(item, key) in data" :key="key">
      <el-input
        v-if="typeof item === 'string'"
        :placeholder="typeof item === 'string' ? item : item.label"
        :value="payload[key]"
        @change="toSearch($event, key)"
      ></el-input>
      <el-select
        v-else-if="item.type === 'select'" :key="key"
        :placeholder="item.label"
        :value="payload[key]"
        @input="toSearch($event, key)">
        <el-option
          v-for="item in data[key].options"
          :key="item.value"
          :value="item.value" :label="item.label"></el-option>
      </el-select>
    </div>
    <slot :search="toSearch"></slot>
    <div class="item">
      <el-button type="warning" @click="resetSearch">清空搜索</el-button>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      search: Function,
      data: {
        type: Object,
        default() {
          return {}
        }
      },
      payload: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
      }
    },
    methods: {
      changeInput(e, key) {
        const {value} = e.target
        this.toSearch(value, key)
      },
      toSearch(value, key) {
        const payload = {
          ...this.payload,
          page: 1,
          [key]: value
        }
        this.$emit('change', payload)
        this.search(payload)
      },
      resetSearch() {
        const keys = {}
        Object.entries(this.payload).forEach(([key]) => {
          keys[key] = ''
        })
        const payload = {
          ...keys,
          page: 1,
          per_page: 12
        }
        this.search(payload)
        this.$emit('change', payload)
        this.$emit('reset')
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss">
  .search-box {
    display: flex;
    margin-bottom: 5px;
    .item {
      margin-bottom: 15px;
      padding-right: 10px;
    }
  }
</style>
