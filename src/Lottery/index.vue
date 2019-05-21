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
export default {
  props: {
    lotteryAngle: { // 初始度数
      type: Number,
      default: 0
    },
    total: { // 奖品个数
      type: Number,
      required: true
    },
    index: { // 中奖下标
      type: Number,
      required: true
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
      acceleration: 0.5, // 加速的加速度0.5
      r_acceleration: 0.1, // 减速的加速度0.1
      firstTimes: 48, // 48次
      prizeNum: this.total, // 奖品个数
      disabled: false
    }
  },
  watch: {
    index() {
      if (this.index >= 0) {
        this.startRotate()
      }
    }
  },
  computed: {
    difference() {
      return (this.prizeNo / this.prizeNum) * 360 - 360 / this.prizeNum / 2
    },
    prizeNo() {
      return this.index
    }
  },
  methods: {
    clickLottery() {
      this.$emit('click')
      // this.startRotate()
    },
    startRotate() {
      if (this.disabled) return
      this.disabled = true
      let self = this
      let difference = this.difference
      let speed = 0
      let acceleration = self.acceleration // 加速的加速度
      let racceleration = self.r_acceleration // 减速的加速度
      let firstTimes = self.firstTimes //  执行48次 加速到highSpeed
      let highSpeed = firstTimes * acceleration // 最高速度
      let oneAngel = self.angle + firstTimes * (firstTimes - 1) / 2 * acceleration + highSpeed // 第一阶段的旋转度数
      let secondTimes = 10 // 速度为highSpeed 继续执行10次
      let twoAngel = oneAngel + secondTimes * firstTimes * acceleration // 第二阶段的旋转度数
      let three = highSpeed / racceleration // 执行three次 速度从highSpeed减速到0
      let add = 360 - (twoAngel + three * (three - 1) / 2 * racceleration) % 360 + difference // 使最后刚好转到起点位置
      let twoAngelEnd = twoAngel + add // 第三阶段开始
      let threeAngel = twoAngelEnd + three * (three - 1) / 2 * racceleration // 最后的旋转度数
      function cicle() {
        if (self.angle < oneAngel) {
          speed += acceleration
          self.angle += speed
        } else if (self.angle >= oneAngel && self.angle < twoAngel) {
          self.angle += speed
        } else if (self.angle.toFixed(2) === twoAngel.toFixed(2)) {
          self.angle += add
        } else if (self.angle > twoAngel && self.angle <= threeAngel) {
          speed -= racceleration
          if (speed <= 0) {
            speed = 0
            self.angle = threeAngel % 360
            self.flag = true
            self.$emit('end', {
              prizeNo: self.prizeNo,
              prizeNum: self.prizeNum
            })
            self.disabled = false
            return false
          }
          self.angle += speed
        }
        requestAnimationFrame(cicle)
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
