<template>
  <div class="wrapper">
    <div v-if="!status">
      <p>从我出生到现在，世界并没有因为遭受天灾变为末日，也没有被机器人统治，更没有被外星生物所占领</p>
      <p class="fadeIn" style="margin-top: 30px;">对了，我忘记告诉你，现在是</p>
    </div>
    <div v-else>{{time}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false,
      time: ""
    };
  },
  mounted() {
    let i = 0;
    let arr = ["2", "0", "7", "7"];
    setTimeout(() => {
      this.status = true;
      setInterval(() => {
        if (i > 3) return;
        this.time = this.time + arr[i];
        i++;
      }, 700);
      setTimeout(() => {
        this.$router.push("/one_part/part_1");
      }, 5500);
    }, 8000);
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
.fadeIn {
  animation-name: fadeIn;
  animation-duration: 10s;
  animation-fill-mode: both;
}
</style>

