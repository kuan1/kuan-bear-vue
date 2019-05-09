<template>
  <div class="sk-three-bounce">
    <div class="sk-child sk-bounce1"></div>
    <div class="sk-child sk-bounce2"></div>
    <div class="sk-child sk-bounce3"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scope>
/* https://github.com/tobiasahlin/SpinKit/blob/master/scss/spinners/7-three-bounce.scss
 *  Usage:
 *
      <div class="sk-three-bounce">
        <div class="sk-child sk-bounce1"></div>
        <div class="sk-child sk-bounce2"></div>
        <div class="sk-child sk-bounce3"></div>
      </div>
 *
 */
$spinkit-spinner-margin: 5px;
$spinkit-size: 22px;
$spinkit-spinner-color: rgba(0, 0, 0, 0.36);
$delayRange: 0.5s;

.sk-three-bounce {
  $animationDuration: 1.4s;
  $delayRange: 0.32s;
  margin: $spinkit-spinner-margin;
  width: $spinkit-size * 2;
  text-align: center;

  .sk-child {
    width: $spinkit-size / 2;
    height: $spinkit-size / 2;
    background-color: $spinkit-spinner-color;

    border-radius: 100%;
    display: inline-block;
    animation: sk-three-bounce $animationDuration ease-in-out 0s infinite both;
  }

  .sk-bounce1 {
    animation-delay: -$delayRange;
  }
  .sk-bounce2 {
    animation-delay: -$delayRange / 2;
  }
}

@keyframes sk-three-bounce {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
</style>
