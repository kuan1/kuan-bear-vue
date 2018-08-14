<template>
  <p class="progress">
    <span :style="{width: `${percent}%`, 'animation-duration': `${time}s`}">{{percent}}%</span>
  </p>
</template>

<script>
  export default {
    props: {
      percent: {
        type: Number,
        default: 70
      },
      time: {
        type: Number,
        default: 15
      }
    }
  }
</script>

<style lang="scss" scoped>
  @keyframes progress {
    from {
      background-position: -100%;
    }
    to {
      background-position: 100%;
    }
  }

  .progress{
    width: 100%;
    min-width: 200px;
    height: 20px;
    border:1px solid #ccc;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 0 5px 0px #ddd inset;
    text-align: left;
  }

  .progress span {
    display: inline-block;
    width: 20%;
    height: 100%;
    background: #2989d8; /* Old browsers */
    background: linear-gradient(45deg, #2989d8 33%, #7db9e8 34%,#7db9e8 59%,#2989d8 60%); /* W3C */
    background-size: 40px 20px;
    text-align: center;
    color:#fff;
    animation: progress 15s linear infinite;
  }
</style>
