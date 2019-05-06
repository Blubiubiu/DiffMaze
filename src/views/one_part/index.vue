<template>
  <div
    :class="shake"
    :style="{textShadow: textShadow1 + ',' + textShadow2 + ',' + textShadow3}"
  >ONE PART</div>
</template>

<script>
export default {
  name: "one_part",
  data() {
    return {
      textShadow1: "",
      textShadow2: "",
      textShadow3: "",
      shake: ""
    };
  },
  mounted() {
    setTimeout(() => {
      this.textShadow1 = "12px 20px 3px #066";
      this.textShadow2 = "-3px -10px 2px #fcf";
      this.textShadow3 = "-10px 10px 4px #009";
      this.shake = "animated shake";
    }, 500);
    setTimeout(() => {
      this.$router.push("/one_part/2077");
    }, 3000);
  }
};
</script>

<style lang="less" scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: all 2s;
}
@keyframes shake {
  0%,
  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-1px, 1px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(1px, -1px, 0);
  }
}
.shake {
  animation-name: shake;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
</style>

