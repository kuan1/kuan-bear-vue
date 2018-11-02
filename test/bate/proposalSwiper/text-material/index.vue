<template>
  <div :style="parentStyle(item.style)" :class="item.class">
    <div :style="childStyle(item.style)" class="layer-inner">{{item.initial.text}}
    </div>
  </div>
</template>

<script>
import { parentStyle, childStyle } from '../_utils';

export default {
  name: 'textMaterial',
  props: {
    item: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  computed: {
    text() {
      const { initial } = this.item;
      return initial.text;
    },
  },
  data() {
    return {
      parentStyle,
      childStyle,
    };
  },
};
</script>

