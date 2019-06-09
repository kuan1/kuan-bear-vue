<template>
  <div class="sk-chasing-dots">
    <div class="sk-child sk-dot1"></div>
    <div class="sk-child sk-dot2"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
/* https://github.com/tobiasahlin/SpinKit/blob/master/scss/spinners/6-chasing-dots.scss
 *  Usage:
 *
      <div class="sk-chasing-dots">
        <div class="sk-child sk-dot1"></div>
        <div class="sk-child sk-dot2"></div>
      </div>
 *
 */

$spinkit-spinner-margin: 10px;
$spinkit-size: 35px;
$spinkit-spinner-color: rgba(255, 255, 255, 0.8);

.sk-chasing-dots {
  $animationDuration: 1.8s;

  margin: $spinkit-spinner-margin auto;
  width: $spinkit-size;
  height: $spinkit-size;
  position: relative;
  text-align: center;
  animation: sk-chasingDotsRotate $animationDuration infinite linear;

  .sk-child {
    width: 60%;
    height: 60%;
    display: inline-block;
    position: absolute;
    top: 0;
    background-color: $spinkit-spinner-color;
    border-radius: 100%;
    animation: sk-chasingDotsBounce $animationDuration infinite ease-in-out;
  }

  .sk-dot2 {
    top: auto;
    bottom: 0;
    animation-delay: -$animationDuration/2;
  }
}

@keyframes sk-chasingDotsRotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-chasingDotsBounce {
  0%,
  100% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
}
</style>

