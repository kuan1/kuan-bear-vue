<template>
  <div class="vconsole">
    <router-link :to="{query: {vconsole: '1'}}" replace>
      <button class="k-button primary">显示</button>
    </router-link>
    <router-link :to="{query: {vconsole: ''}}">
      <button class="k-button">隐藏</button>
    </router-link>
    <v-console />
  </div>
</template>

<script>
import VConsole from '../../../src/VConsole'

export default {
  components: {
    VConsole
  }
}
</script>

<style lang="scss">
.k-button {
  background: white;
}
</style>
