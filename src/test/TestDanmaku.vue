<template>
  <div class="test">
    <danmaku :data="data" :time="5">
      <danmaku-item
        v-for="(item, i) in data"
        :key="i"
        :order="i"
      >
        {{item}}发表一个说收
      </danmaku-item>
    </danmaku>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        data: [1, 2, 3, 5]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .test {
    height: 200px;
    background: #f5f5f5;
  }
</style>
