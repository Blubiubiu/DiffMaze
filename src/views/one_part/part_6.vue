<template>
  <div class="part-wrapper">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import Game from "@/game/pikachu/Game";
import { State, namespace } from "vuex-class";

const someModule = namespace("pikachu");

@Component
export default class Part_6 extends Vue {
  @someModule.State(state => state.direction) stateDirection: any;

  @Watch("stateDirection")
  onStateDirectionChanged(newVal: string) {
    switch (newVal) {
      case "left":
        break;
      case "right":
        break;
      case "bomb":
        break;
    }
  }

  private game: any;
  mounted() {
    this.game = new Game("canvas");
  }
  beforeDestroy() {
    this.game.destroy();
  }
}
</script>


