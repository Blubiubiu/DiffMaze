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
export default class Part_1 extends Vue {
  @someModule.State(state => state.talkVal) stateTalkVal: any;

  private value: string[] = [];
  private txt: string = "那么，现在，你想知道什么？";
  private vv: string = "";

  mounted() {
    this.$NPCTalk.strEqualArr(this.txt).then(() => {
      this.value = ["关于你", "关于这个世界"];
    });
  }

  @Watch("stateTalkVal")
  onStateTalkValChanged(newVal: string) {
    this.vv = newVal;
  }

  private choose(val: string) {
    if (val === "关于你") {
      this.txt = "我？我就是一个平淡无奇的“人”。";
      this.$NPCTalk.strEqualArr(this.txt).then((res: any) => {
        this.value = ["能再多说些吗?", "那关于这个世界呢?"];
      });
    } else if (val === "关于这个世界") {
      this.txt = "这个世界？嗯......这可真是个让人很难回答的问题啊。";
      this.$NPCTalk.strEqualArr(this.txt).then((res: any) => {
        this.value = ["能再多说些吗?", "那关于你呢?"];
      });
    } else if (val === "那关于你呢?") {
      this.txt = "我？我就是一个平淡无奇的“人”。。";
      this.$NPCTalk.strEqualArr(this.txt).then((res: any) => {
        this.value = ["能再多说些吗?"];
      });
    } else if (val === "那关于这个世界呢?") {
      this.txt = "这个世界？嗯......这可真是个让人很难回答的问题啊。";
      this.$NPCTalk.strEqualArr(this.txt).then((res: any) => {
        this.value = ["能再多说些吗?"];
      });
    } else {
      this.$router.push("/one_part/part_2");
    }
  }
}
</script>

