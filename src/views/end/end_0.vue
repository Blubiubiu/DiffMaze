<template>
  <div class="end-wrapper">
    <div class="end-txt">—— THE END ——</div>
    <div class="leaf-wrapper">
      <div class="falling-leaves">
        <div class="leaf-scene">
          <img
            :src="require('@/assets/images/leaf.png')"
            v-for="(item, index) in options.numLeaves"
            :style="{'transform': options.style[index]}"
            :key="index"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { State, namespace } from "vuex-class";
import Leaf from "@/util/leaf";

const someModule = namespace("leaf");

interface Options {
  numLeaves: number;
  style: string[];
  leaf: any;
}

@Component
export default class End extends Vue {
  @someModule.State(state => state.style) StateStyle: any;

  private options: Options = {
    numLeaves: 50,
    style: [],
    leaf: null
  };

  private leaf: any;

  private d = document.getElementById("app") as HTMLElement;

  created() {
    this.leaf = new Leaf(
      this.d.clientWidth,
      this.d.clientHeight,
      this.options.style,
      this.options.numLeaves
    );
    this.leaf.init();
    this.leaf.render();
  }
  destroyed() {
    this.leaf.destroy();
  }

  @Watch("StateStyle")
  onStateStyleChanged(newVal: any) {
    this.options.style = newVal;
    this.$forceUpdate();
  }
}
</script>

<style lang="less" scoped>
.end-txt {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Brush Script MT';
    color: rgba(255, 255, 255, .9);
}
.leaf-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
}
.falling-leaves {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.leaf-scene {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 400px;
}
.leaf-scene img {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  display: block;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  z-index: 99;
}
.entry {
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 20px;
  font-size: 16px;
  color: red;
  z-index: 999;
}
</style>


