<template>
  <div class="container">
    <room>
      <div class="header">
        <div class="inner">
          <span v-for="item in 100" :key="item">导航</span>
        </div>
      </div>
    </room>
  </div>
</template>

<script>
import room from './index'
export default {
  components: {
    room
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 3000px;
  background: #f5f5f5;
}
.header {
  background: black;
  color: white;
  height: 40px;
  line-height: 40px;
  .inner {
    width: 90%;
    margin: 0 auto;
    white-space: nowrap;
    overflow: auto;
    background: black;
    mask-image: linear-gradient(
      to right,
      transparent,
      black 20px,
      black 90%,
      transparent
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      black 20px,
      black 90%,
      transparent
    );
    &::-webkit-scrollbar {
      display: none;
    }
  }
  span {
    padding: 0 10px;
  }
}
</style>
