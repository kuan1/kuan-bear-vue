<template>
  <div class="my-nav-container" :class="{open}">
    <div class="logo-container">
      <router-link class="logo" to="/">
        <slot>kuan-bear-vue</slot>
      </router-link>
    </div>
    <div v-if="data.length" @click="open = !open" class="menu-btn"></div>
    <nav class="links">
      <router-link v-for="(item, key) in data" :key="key" :to="item.to" :class="{active: item.active}" class="link animated fadeIn">{{item.name}}</router-link>
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
  },
  watch: {
    $route() {
      this.open = false
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
.menu-btn {
  width: 18px;
  height: 16px;
  position: relative;
  display: none;
  &::after,
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background: #fff;
    position: absolute;
    bottom: 0;
    transition: transform 0.3s;
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
    top: 48px;
    width: 100%;
    height: 100%;
    z-index: 1000;
    flex-direction: column;
    align-items: center;
    background: $color;
    font-size: 16px;
    line-height: 2;
    padding-top: 30px;
    box-sizing: border-box;
    clip-path: circle(0 at 100% 0);
    transition: clip-path 0.3s ease-in, visibility 0.3s;
  }
  .menu-btn {
    display: block;
  }
  .open {
    .links {
      visibility: visible;
      clip-path: circle(1000px at 100% 0);
      background: #333;
    }
    .menu-btn {
      &::after,
      &::before {
        top: 0;
        bottom: 0;
        margin: auto;
        box-shadow: none;
      }
      &:after {
        transform: rotate(45deg);
      }
      &:before {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
