<template>
  <div :style="{'font-size': fontSize, 'background-color': color}" ref="circleBar" class="circle-bar">
    <div :style="leftStyle" class="circle-bar-left"></div>
    <div :style="rightStyle" class="circle-bar-right"></div>
    <!-- 遮罩层，显示百分比 -->
    <div :style="{'background-color': markColor}" class="mask">
      <slot>
        <span class="percent">{{percent}}%</span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'circleBar',
  props: {
    size: {
      type: [Number, String],
      default: 100
    },
    percent: {
      type: Number,
      default: 20
    },
    color: {
      type: String,
      default: 'rgb(255, 216, 129)'
    },
    bg: {
      type: String,
      default: '#f5f5f5'
    },
    markColor: {
      type: String,
      default: 'white'
    }
  },
  computed: {
    fontSize() {
      const size = this.size.toString()
      if (/^\d*$/.test(size)) {
        return `${size}px`
      }
      return size
    },
    rightStyle() {
      const { color, percent } = this
      if (percent <= 50) {
        const rotate = 'rotate(' + (percent * 3.6) + 'deg)'
        return {
          transform: rotate,
          '-webkit-transform': rotate,
          'background-color': this.bg
        }
      }
      return {
        transform: 'rotate(0deg)',
        '-webkit-transform': 'rotate(0deg)',
        'background-color': color,
      }
    },
    leftStyle() {
      const { percent } = this
      const rotate = 'rotate(' + ((percent - 50) * 3.6) + 'deg)'
      return percent > 50 ? { transform: rotate, 'background-color': this.bg } : {
        'background-color': this.bg
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/*支持IE9及以上*/
.circle-bar {
  width: 1em;
  height: 1em;
  position: relative;
  background-color: #333;
}

.circle-bar-left,
.circle-bar-right {
  width: 1em;
  height: 1em;
  background-color: #eee;
  transition: transform 0.3s linear;
}

.circle-bar-right {
  clip: rect(0, auto, auto, 0.5em);
}

.circle-bar-left {
  clip: rect(0, 0.5em, auto, 0);
}

.mask {
  width: 0.9em;
  height: 0.9em;
  background-color: #fff;
  text-align: center;
  line-height: 0.2em;
  color: rgba(0, 0, 0, 0.5);
}

.percent {
  font-size: 0.2em;
  height: 0.5em;
  line-height: 0.5em;
  display: block;
}

.circle-bar * {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.circle-bar,
.circle-bar > * {
  border-radius: 50%;
}
</style>
