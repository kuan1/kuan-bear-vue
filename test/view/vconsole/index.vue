<template>
  <div class="vconsole">
    <router-link :to="{query: {vconsole: '1'}}" replace>
      <div class="k-button primary">显示vconsole</div>
    </router-link>
    <router-link :to="{query: {vconsole: ''}}">
      <div class="k-button">隐藏</div>
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

<style>
</style>
