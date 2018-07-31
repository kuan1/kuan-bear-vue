<template>
  <div :style="{'font-size': fontSize, 'background-color': color}" ref="circleBar" class="circle-bar">
    <div :style="{'background-color': bg}" ref="leftCircle" class="circle-bar-left"></div>
    <div :style="{'background-color': bg}" ref="rightCircle" class="circle-bar-right"></div>
    <!-- 遮罩层，显示百分比 -->
    <div class="mask">
      <slot>
        <span class="percent">{{percent}}%</span>
      </slot>
    </div>
  </div>
</template>

<script>
  import {css, css3} from '../../utils/styleUtil'

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
      }
    },
    computed: {
      fontSize() {
        const size = this.size.toString()
        if (/^\d*$/.test(size)) {
          return `${size}px`
        }
        return size
      }
    },
    watch: {
      percent() {
        this.setPercent()
      }
    },
    methods: {
      setPercent() {
        const {percent} = this
        const {circleBar, leftCircle, rightCircle} = this.$refs
        const color = css(circleBar, 'background-color')

        if (percent <= 50) {
          const rotate = 'rotate(' + (percent * 3.6) + 'deg)'
          css3(rightCircle, 'transform', rotate)
        } else {
          const rotate = 'rotate(' + ((percent - 50) * 3.6) + 'deg)'
          css(rightCircle, 'background-color', color) // 背景色设置为进度条的颜色
          css3(rightCircle, 'transform', 'rotate(0deg)') // 右侧不旋转
          css3(leftCircle, 'transform', rotate) // 左侧旋转
        }
      }
    },
    mounted() {
      this.setPercent()
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

  .circle-bar-left, .circle-bar-right {
    width: 1em;
    height: 1em;
    background-color: #eee;
    transition: transform .3s;
  }

  /*
      这里采用clip剪切了圆，实现左右两个半圆，右半圆在后面，因此在更上一层，
      clip的用法参考：http://www.w3school.com.cn/cssref/pr_pos_clip.asp
   */
  .circle-bar-right {
    clip: rect(0, auto, auto, .5em);
  }

  .circle-bar-left {
    clip: rect(0, .5em, auto, 0);
  }

  .mask {
    width: 0.8em;
    height: 0.8em;
    background-color: #fff;
    text-align: center;
    line-height: 0.2em;
    color: rgba(0, 0, 0, 0.5);
  }

  .mask :first-child {
    font-size: 0.3em;
    height: 0.8em;
    line-height: 0.8em;
    display: block;
  }

  /*所有的后代都水平垂直居中，这样就是同心圆了*/
  .circle-bar * {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }

  /*自身以及子元素都是圆*/
  .circle-bar, .circle-bar > * {
    border-radius: 50%;
  }
</style>
