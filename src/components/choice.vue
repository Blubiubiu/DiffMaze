<template>
  <div class="choice-wrapper">
    <div
      :class="choosedIdx === index? 'choice-active': ''"
      v-for="(item, index) in choice"
      :key="index"
      @click="choose(item)"
      @mouseover="change(index)"
    >{{item}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component
export default class Choice extends Vue {
  @Prop({
    type: Array,
    default: () => []
  })
  val!: string[];

  private choice: string[] = this.val;
  private choosedIdx: number = 0;

  private choose(val: string) {
    this.$emit("on-check", val);
    this.choosedIdx = 0;
  }

  private change(idx: number) {
    this.choosedIdx = idx;
  }

  @Watch("val")
  onValChanged(newVal: string[]) {
    this.choice = newVal;
  }

  mounted() {
    document.getElementsByTagName("body")[0].onkeydown = e => {
      if (e.keyCode == 37) {
        if (this.choosedIdx) this.choosedIdx--;
      } else if (e.keyCode == 39) {
        if (this.choosedIdx < this.choice.length - 1) this.choosedIdx++;
      } else if (e.keyCode == 13) {
        if (this.choice && this.choice.length) {
          this.$emit("on-check", this.choice[this.choosedIdx]);
          this.choice = [];
          this.choosedIdx = 0;
        }
      }
    };
  }
}
</script>

<style lang="less" scoped>
.choice-wrapper {
  position: fixed;
  left: 30px;
  right: 30px;
  bottom: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 24px;
  z-index: 99;
  > div {
    padding: 5px 20px;
    border: 1px solid #000;
    border-radius: 4px;
    cursor: pointer;
  }
  .choice-active {
    border-color: rgba(255, 255, 255 .5);
    box-shadow: 0 0 4px #fff;
  }
}
</style>

