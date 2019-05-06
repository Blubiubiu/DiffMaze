<template>
  <div class="part-wrapper">
    <div v-if="!status">那么，我们继续问题。</div>
    <div v-else>浏览器的渲染顺序?</div>
    <choice :val="value" @on-check="choose"></choice>
    <div class="dashed"></div>
    <div
      :class="[classMouth1, 'pacman-mouth1']"
      :style="{top: mouth1Top + 'px', left: mouth1Left + 'px'}"
    ></div>
    <div
      :class="[classMouth2, 'pacman-mouth2']"
      :style="{top: mouth2Top + 'px', left: mouth2Left + 'px'}"
    ></div>
    <div class="pacman-route pacman-route-top" :style="{width: routeWidthTop + 'px'}"></div>
    <div class="pacman-route pacman-route-right" :style="{height: routeHeightRight + 'px'}"></div>
    <div class="pacman-route pacman-route-bottom" :style="{width: routeWidthBottom + 'px'}"></div>
    <div class="pacman-route pacman-route-left" :style="{height: routeHeightLeft + 'px'}"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Part_4 extends Vue {
  private d: any = document.getElementById("app");
  private mouth1Top: number = 10;
  private mouth1Left: number = 10;
  private mouth2Top: number = 20;
  private mouth2Left: number = 10;
  private classMouth1: string = "pacman-mouth-name1";
  private classMouth2: string = "pacman-mouth-name2";
  private winWidth: number = this.d.clientWidth;
  private winHeight: number = this.d.clientHeight;
  private routeWidthTop: number = 0;
  private routeHeightRight: number = 0;
  private routeWidthBottom: number = 0;
  private routeHeightLeft: number = 0;
  private value: string[] = [];
  private status: boolean = false;
  private flag: boolean = true;

  private pacManAnimation: any;
  private pacManWalkAnimation: any;

  private pacMan() {
    if (this.mouth1Left < this.winWidth - 30) {
      this.mouth1Left += 1;
      this.mouth2Left += 1;
      this.routeWidthTop = this.mouth1Left;
      requestAnimationFrame(this.pacMan);
    } else if (this.mouth1Top < this.winHeight - 30) {
      this.classMouth1 = "pacman-mouth-name3";
      this.classMouth2 = "pacman-mouth-name4";
      this.mouth1Top += 1;
      this.mouth2Top += 1;
      this.routeHeightRight = this.mouth1Top;
      this.pacManAnimation = requestAnimationFrame(this.pacMan);
    } else {
      cancelAnimationFrame(this.pacManAnimation);
      this.pacManWalkAnimation = requestAnimationFrame(this.pacManWalk);
    }
  }
  private pacManWalk() {
    if (this.mouth1Left > 10) {
      this.classMouth1 = "pacman-mouth-name5";
      this.classMouth2 = "pacman-mouth-name6";
      this.mouth1Left -= 1;
      this.mouth2Left -= 1;
      this.routeWidthBottom = this.winWidth - 20 - this.mouth1Left;
      requestAnimationFrame(this.pacManWalk);
    } else if (this.mouth1Top > 10) {
      this.classMouth1 = "pacman-mouth-name7";
      this.classMouth2 = "pacman-mouth-name8";
      this.mouth1Top -= 1;
      this.mouth2Top -= 1;
      this.routeHeightLeft = this.winHeight - 30 - this.mouth1Top;
      requestAnimationFrame(this.pacManWalk);
    } else {
      cancelAnimationFrame(this.pacManWalkAnimation);
      if (this.flag) this.$router.push("/eggs/eggs_1");
    }
  }
  private choose(val: string) {
    switch (val) {
      case "从上至下":
        this.$router.push("/one_part/part_5_1");
        break;
      default:
        this.$router.push("/one_part/part_5_2");
    }
  }
  mounted() {
    this.flag = true;
    requestAnimationFrame(this.pacMan);
    setTimeout(() => {
      this.status = true;
      this.value = ["从上至下", "从下至上", "异步渲染"];
    }, 1500);
  }
  beforeDestroy() {
    this.flag = false;
    cancelAnimationFrame(this.pacManAnimation);
    cancelAnimationFrame(this.pacManWalkAnimation);
    this.mouth1Top = 10;
    this.mouth1Left = 10;
    this.mouth2Top = 20;
    this.mouth2Left = 10;
    this.classMouth1 = "pacman-mouth-name1";
    this.classMouth2 = "pacman-mouth-name2";
    this.routeWidthTop = 0;
    this.routeHeightRight = 0;
    this.routeWidthBottom = 0;
    this.routeHeightLeft = 0;
  }
}
</script>

<style lang="less" scoped>
.dashed {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  border: 1px dashed #eee;
}
.pacman-mouth1 {
  position: absolute;
  width: 20px;
  height: 10px;
  border-radius: 20px 20px 0 0;
  background-color: #d6d600;
  transform-origin: center bottom;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  z-index: 9;
}
.pacman-mouth2 {
  position: absolute;
  width: 20px;
  height: 10px;
  border-radius: 0 0 20px 20px;
  background-color: #d6d600;
  transform-origin: center top;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  z-index: 9;
}
.pacman-mouth-name1 {
  animation-name: mouth1;
}
.pacman-mouth-name2 {
  animation-name: mouth2;
}
.pacman-mouth-name3 {
  animation-name: mouth3;
}
.pacman-mouth-name4 {
  animation-name: mouth4;
}
.pacman-mouth-name5 {
  animation-name: mouth5;
}
.pacman-mouth-name6 {
  animation-name: mouth6;
}
.pacman-mouth-name7 {
  animation-name: mouth7;
}
.pacman-mouth-name8 {
  animation-name: mouth8;
}
.pacman-route {
  position: absolute;
  background-color: #000;
  z-index: 8;
}
.pacman-route-top {
  left: 10px;
  top: 20px;
  width: 0;
  height: 1px;
}
.pacman-route-right {
  right: 20px;
  top: 10px;
  width: 1px;
  height: 0;
}
.pacman-route-bottom {
  right: 10px;
  bottom: 20px;
  width: 0;
  height: 1px;
}
.pacman-route-left {
  left: 20px;
  bottom: 10px;
  width: 1px;
  height: 0;
}
@keyframes mouth1 {
  0% {
    transform: rotate(-25deg);
  }
  50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-25deg);
  }
}
@keyframes mouth2 {
  0% {
    transform: rotate(25deg);
  }
  50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(25deg);
  }
}
@keyframes mouth3 {
  0% {
    transform: rotate(65deg);
  }
  50% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(65deg);
  }
}
@keyframes mouth4 {
  0% {
    transform: rotate(115deg);
  }
  50% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(115deg);
  }
}
@keyframes mouth5 {
  0% {
    transform: rotate(25deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(25deg);
  }
}
@keyframes mouth6 {
  0% {
    transform: rotate(-25deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-25deg);
  }
}
@keyframes mouth7 {
  0% {
    transform: rotate(115deg);
  }
  50% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(115deg);
  }
}
@keyframes mouth8 {
  0% {
    transform: rotate(65deg);
  }
  50% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(65deg);
  }
}
</style>

