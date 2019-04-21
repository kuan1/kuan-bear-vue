<template>
  <div class="my-nav-container" :class="{open}">
    <div class="logo-container">
      <router-link class="logo" to="/">kuan-bear-vue</router-link>
    </div>
    <div @click="open = true" class="menu-btn"></div>
    <nav @click="open = false" class="links">
      <router-link v-for="(item, key) in data" :key="key" :to="item.to" :class="{active: item.active}" class="link animated fadeIn">{{item.name}}</router-link>
      <i class="iconfont icon-close animated fadeIn"></i>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      open: false
    }
  }
}
</script>

<style lang="scss" scoped>
$color: #0a0a0a;
.my-nav-container {
  padding: 0 5%;
  height: 48px;
  background: $color;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #eee;
}
.logo {
  font-size: 16px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  &:hover {
    color: #ccc;
  }
}
.link {
  color: #efefef;
  padding: 0 8px;
  &.active,
  &:active,
  &:hover {
    opacity: 0.65;
  }
}
.icon-close {
  display: none;
}
.menu-btn {
  width: 18px;
  height: 16px;
  position: relative;
  &::after,
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: #fff;
    position: absolute;
    bottom: 0;
  }
  &:before {
    top: 0;
    box-shadow: 0 7px 0 0 #fff;
  }
  &:active {
    &::before {
      background: #ccc;
      box-shadow: 0 7px 0 0 #ccc;
    }
    &::after {
      background: #ccc;
    }
  }
}
@media screen and (max-width: 768px) {
  .links {
    display: flex;
    visibility: hidden;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    flex-direction: column;
    align-items: center;
    background: $color;
    font-size: 16px;
    line-height: 2;
    padding-top: 40px;
    box-sizing: border-box;
    clip-path: circle(40px at 100% 0);
    transition: all 0.5s ease-in;
  }
  .icon-close {
    display: block;
    position: absolute;
    right: 20px;
    top: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  .open {
    .links {
      visibility: visible;
      clip-path: circle(2000px at 100% 0);
      background: #333;
    }
  }
}
</style>
