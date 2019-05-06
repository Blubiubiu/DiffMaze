<template>
  <div class="part-wrapper">
    <div class="count-container">
      <span class="bottom-current">{{num}}</span>
      <span class="bottom-next">{{count}}</span>
      <span :class="status? 'top-current': 'top-current current-changing'">{{num}}</span>
      <span :class="status? 'top-next': 'top-next next-changing'">{{count}}</span>
    </div>
    <div class="count-container">
      <span class="bottom-current">{{num}}</span>
      <span class="bottom-next">{{count}}</span>
      <span :class="status? 'top-current': 'top-current current-changing'">{{num}}</span>
      <span :class="status? 'top-next': 'top-next next-changing'">{{count}}</span>
    </div>
    <div class="count-container">
      <span class="bottom-current">{{num}}</span>
      <span class="bottom-next">{{count}}</span>
      <span :class="status? 'top-current': 'top-current current-changing'">{{num}}</span>
      <span :class="status? 'top-next': 'top-next next-changing'">{{count}}</span>
    </div>
    <div class="count-container">
      <span class="bottom-current">{{num}}</span>
      <span class="bottom-next">{{count}}</span>
      <span :class="status? 'top-current': 'top-current current-changing'">{{num}}</span>
      <span :class="status? 'top-next': 'top-next next-changing'">{{count}}</span>
    </div>

    <div @click="status=!status">点击旋转</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 9,
      num: 0,
      status: false
    };
  },
  mounted() {
    setInterval(() => {
      if (this.count > 0) {
        this.status = !this.status;
        setTimeout(() => {
          this.status = !this.status;
        }, 100);
        this.count--;
        this.num = this.count + 1;
      }
    }, 1000);
  }
};
</script>

<style lang="less" scoped>
.count-container {
  position: relative;
  width: 60px;
  height: 100px;
  background: #fff;
  color: #000;
  text-align: center;
  font-family: helvetica neue, Helvetica, sans-serif;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.8);
  display: inline-block;
  margin: 0 10px;
  .bottom-current,
  .bottom-next {
    position: absolute;
    width: 100%;
    left: 0;
    line-height: 100px;
    text-align: center;
    font-size: 80px;
    background: #fff;
    box-shadow: inset 0 10px 25px rgba(0,0,0,.4);
  }
  .bottom-current {
    top: 0;
    height: 50%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 9;
    overflow: hidden;
  }
  .bottom-current::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #fff;
  }
  .bottom-next {
    bottom: 0;
    border-radius: 10px;
    z-index: 8;
  }
  .top-current {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    line-height: 100px;
    text-align: center;
    overflow: hidden;
    font-size: 80px;
    background: #fff;
    border-radius: 10px;
    transform-origin: center center;
    transform: rotateX(0deg);
    box-shadow: inset 0 10px 25px rgba(0,0,0,.4);
    z-index: 8;
  }
  .top-next::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #fff;
  }
  .current-changing {
    transition: all 0.25s linear;
    transform: rotateX(-90deg);
  }
  .top-next {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 50%;
    line-height: 100px;
    text-align: center;
    overflow: hidden;
    font-size: 80px;
    background: #fff;
    transform-origin: center bottom;
    transform: rotateX(90deg);
    border-radius: 10px;
    z-index: 9;
    box-shadow: inset 0 10px 25px rgba(0,0,0,.4);
  }
  .next-changing {
    transition: all 0.25s linear 0.25s;
    transform: rotateX(0deg);
  }
}
</style>

