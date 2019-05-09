<template>
  <div :style="outStyle">
    <div :style="innerStyle" class="layer-inner fullview-ctrl center-flex">
      <div class="full">
        <iframe v-if="item.style.url" class="fullview-iframe" :src="item.style.url"></iframe>
      </div>
      <div v-if="!openIframe" @click="openFullView" class="full btn-content center-flex">
        <img class="btn" src="./btn-VR.png" alt="">
        <p class="tip">点击全景查看</p>
      </div>
    </div>
  </div>
</template>
<script>
import { formatTrans } from '../_utils';

export default {
  name: 'fullviewCtrl',
  props: {
    item: {
      type: Object,
      default() {
        return {
          style: {},
        };
      },
    },
    index: {
      type: Number,
    },
    isShow: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      openIframe: false,
      formatTrans,
    };
  },
  watch: {
    isShow(isShow) {
      if (isShow && !this.openIframe) {
        this.showIframe();
      }
    },
  },
  computed: {
    outStyle() {
      const { item } = this;
      return [
        item.style,
        {
          maskSize: '',
          maskRepeat: '',
          maskPosition: '',
          maskImage: '',
          borderColor: '',
          borderStyle: '',
          borderWidth: '',
          borderRadius: '',
          transform: '',
          backgroundImage: '',
          backgroundColor: '',
          backgroundRepeat: '',
          backgroundSize: '',
          boxShadow: '',
        }];
    },
    innerStyle() {
      const { style = {} } = this.item;
      const {
        maskSize,
        maskRepeat,
        maskPosition,
        maskImage,
        borderColor,
        borderStyle,
        borderWidth,
        borderRadius,
        boxShadow,
        backgroundImage,
        backgroundSize,
        backgroundColor,
        backgroundRepeat,
      } = style;
      return {
        maskSize,
        maskRepeat,
        maskPosition,
        maskImage,
        borderColor,
        borderStyle,
        borderWidth: `${borderWidth}px`,
        borderRadius,
        boxShadow,
        backgroundImage,
        backgroundSize,
        transform: formatTrans(style),
        backgroundColor,
        backgroundRepeat,
      };
    },

  },
  methods: {
    openFullView() {
      this.openIframe = true;
    },
    showIframe() {
      setTimeout(() => {
        this.openIframe = true;
      }, 3000);
    },
  },
  mounted() {
    if (this.isShow) {
      this.showIframe();
    }
  },
};
</script>
<style lang="scss" scoped>
.full {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.fullview-ctrl {
  position: absolute;
  background-size: cover !important;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
}

.fullview-iframe {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.layer-inner {
  width: 100%;
  height: 100%;
}

.btn {
  margin: 0 auto;
  width: 0.8rem;
  height: 0.8rem;
}

.btn-content {
  transform: translate3d(0, 0, 0);
}

.tip {
  text-align: center;
  color: white;
  font-size: 0.26rem;
  margin-top: 0.32rem;
}
</style>
