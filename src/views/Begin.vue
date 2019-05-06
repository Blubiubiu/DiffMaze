<template>
  <div class="begin-wrapper">
    <div style="text-align: center;">
      <div>Every choice you make will change the world</div>
      <div>你的每个选择都将改变世界</div>

      <div class="enter animated" @click="$router.push('/one_part')">Click to start</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.begin-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  div {
    margin-bottom: 20px;
  }
  .animated {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 20px;
    font-size: 20px;
    cursor: pointer;
    text-align: center;
    animation: flash 2s linear infinite;
  }
}
@keyframes flash {
  0%,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}
</style>


