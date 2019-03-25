<template>
  <div class="test-container">
    <ul v-if="$route.fullPath === '/'">
      <li v-for="item in routes" :key="item">
        <router-link :to="{path:`/${item}`}">{{item}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import * as BearVue from '../src/index.js'

export default {
  data() {
    return {
      routes: Object.keys(BearVue).filter(item => item !== 'default')
    }
  }
}
</script>

<style lang="scss">
.test-container {
  max-width: 90%;
  width: 800px;
  box-sizing: border-box;
  margin: 10px auto;
  background: #fafafa;
  padding: 20px;
  line-height: 2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  font-size: 16px;
}
li {
  list-style: disc;
  list-style-position: inside;
}
</style>
