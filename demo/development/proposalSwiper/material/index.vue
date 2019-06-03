<template>
  <div :style="outStyle">
    <div :style="innerStyle" class="layer-inner">
    </div>
  </div>
</template>
<script>
import { parentStyle, childStyle } from '../_utils';

export default {
  name: 'material',
  props: {
    item: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  computed: {
    outStyle() {
      const { style = {} } = this.item;
      return parentStyle(style)
    },
    innerStyle() {
      const { style = {} } = this.item;
      return childStyle(style)
    },
  },
  methods: {
  },
};
</script>

<style lang="scss">
.layer-inner {
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  .img {
    width: 0.1rem;
    height: 0.1rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
</style>
