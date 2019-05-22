<template>
  <div class="lottery-content">
    <img
      v-bind:style="{ transform: 'rotate3d(0,0,1,'+angle+'deg)'}"
      :src="bg"
      class="lottery-bg"
      alt
    >
    <img :src="goBg" class="lottery-pointer" @click="clickLottery">
  </div>
</template>

<script>
const requestAnimationFrame =
  window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame
  || window.msRequestAnimationFrame || ((callback) => window.setTimeout(callback, 1000 / 60))

const cancelAnimationFrame = window.cancelAnimationFrame ||
  window.webkitCancelAnimationFrame ||
  window.mozCancelAnimationFrame ||
  window.oCancelAnimationFrame ||
  window.msCancelAnimationFrame ||
  window.clearTimeout;

export default {
  props: {
    index: { // 中奖下标
      type: Number,
      required: true
    },
    lotteryAngle: { // 初始度数
      type: Number,
      default: 0
    },
    total: { // 奖品个数
      type: Number,
      default: 8
    },
    bg: {
      type: String,
      required: true,
      default: ''
    },
    goBg: {
      type: String,
      required: true,
      default: ''
    }
  },
  data() {
    return {
      angle: this.lotteryAngle, // 初始度数
      acceleration: 0.4, // 加速的加速度0.5
      deceleration: 0.05, // 减速的加速度0.1
      firstTimes: 48, // 48次
      disabled: false
    }
  },
  watch: {
    index(index) {
      if (index >= 0) {
        this.startRotate()
      }
    }
  },
  beforeDestroy() {
    if (this.timer) {
      cancelAnimationFrame(this.timer)
    }
  },
  methods: {
    clickLottery() {
      this.$emit('click')
    },
    startRotate() {
      if (this.disabled) return
      this.disabled = true
      const difference = (this.index / this.total) * 360 - 360 / this.total / 2
      const {
        acceleration, // 加速度
        deceleration, // 加速度 
        firstTimes   // 执行48次 加速到highSpeed
      } = this // 加速的加速度
      const highSpeed = firstTimes * acceleration // 最高速度
      // v = a * 1; s = vt + (a*t**2)/2
      const oneAngel = this.angle + firstTimes * firstTimes / 2 * acceleration + highSpeed / 2 // 加速阶段的旋转度数
      const secondTimes = 10 // 速度为highSpeed 匀速圈数
      const twoAngel = oneAngel + secondTimes * highSpeed // 第二阶段的旋转度数
      const three = highSpeed / deceleration // 减速到0 执行three次
      let add = 360 - (twoAngel + three * (three - 1) / 2 * deceleration) % 360 + difference // 使最后刚好转到起点位置
      let twoAngelEnd = twoAngel + add // 第三阶段开始
      let threeAngel = twoAngelEnd + three * (three - 1) / 2 * deceleration // 最后的旋转度数
      const self = this
      let speed = 0 // 初始速度
      function cicle() {
        if (self.angle < oneAngel) {
          speed += acceleration
          // console.log(speed)
          self.angle += speed
        } else if (self.angle >= oneAngel && self.angle < twoAngel) {
          self.angle += speed
        } else if (self.angle.toFixed(2) === twoAngel.toFixed(2)) {
          self.angle += add
        } else if (self.angle > twoAngel && self.angle <= threeAngel) {
          speed -= deceleration
          if (speed <= 0) {
            speed = 0
            self.angle = threeAngel % 360
            self.flag = true
            self.$emit('end', {
              index: self.index,
              total: self.total
            })
            self.disabled = false
            return false
          }
          self.angle += speed
        }
        self.timer = requestAnimationFrame(cicle)
      }
      cicle()
    }
  }
}
</script>

<style scoped lang="scss">
.lottery-bg,
.lottery-pointer {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.lottery-content {
  width: 330px;
  height: 330px;
  margin: 0 auto;
  position: relative;
}
.lottery-bg {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    0deg,
    rgba(253, 216, 227, 1),
    rgba(255, 208, 222, 1),
    rgba(251, 234, 238, 1)
  );
  border-radius: 50%;
}
.lottery-pointer {
  width: 82px;
  height: 82px;
}
</style>
