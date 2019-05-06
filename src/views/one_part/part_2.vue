<template>
  <div class="part-wrapper">
    <div>{{vv}}</div>
    <choice :val="value" @on-check="choose"></choice>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { State, namespace } from "vuex-class";

const someModule = namespace("npc");

@Component
export default class Part_2 extends Vue {
  @someModule.State(state => state.talkVal) stateTalkVal: any;

  private txt: string = "当然，但是我也希望你能回答我一些问题。";
  private value: string[] = [];
  private vv: string = "";

  mounted() {
    this.$NPCTalk.strEqualArr(this.txt).then(() => {
      this.value = ["没问题，我觉得很公平", "抱歉，我无法答应你"];
    });
  }

  @Watch("stateTalkVal")
  onStateTalkValChanged(newVal: string) {
    this.vv = newVal;
  }

  private choose(val: string) {
    if (val === "没问题，我觉得很公平") {
      this.$router.push("/one_part/part_3");
    } else if (val === "抱歉，我无法答应你") {
      this.txt = "哈哈，你这个样子像极了我的一位老朋友。";
      this.$NPCTalk.strEqualArr(this.txt);
      setTimeout(() => {
        this.txt = "那我们的谈话就到这结束吧?";
        this.$NPCTalk.strEqualArr(this.txt).then(() => {
          this.value = ["好", "不"];
        });
      }, 2000);
    } else if (val === "好") {
      this.$router.push("/end/end_1");
    } else if (val === "不") {
      this.txt = "那你就要按规矩来，“朋友”";
      this.$NPCTalk.strEqualArr(this.txt).then(() => {
        this.value = ["好吧"];
      });
    } else {
      this.$router.push("/one_part/part_3");
    }
  }
}
</script>

<style lang="less" scoped>
</style>


