<template>
  <div class="my-list">
    <div v-if="title" class="divider">{{title}}</div>
    <div v-for="(item, index) in data" @click="clickItem(item)" :key="index" class="item" :class="{pointer: arrow}">
      <div class="my-list-item">
        <div class="name">{{item.name}}</div>
        <div class="extra middle-flex">
          <span>{{item.extra}}</span>
          <i class="iconfont icon-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    arrow: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    clickItem(item) {
      this.$emit('click', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.divider {
  padding: 18px 16px;
  margin-top: 1px;
  background: #f7f7f7;
}
.item {
  background: white;
}
.name {
  color: #333;
  font-size: 16px;
}
.extra {
  color: #666;
}
.my-list-item {
  margin-left: 16px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 16px 18px 0;
}
</style>
