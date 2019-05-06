<template>
  <div class="part-wrapper">
    <div>{{vv}}</div>
    <answer v-if="status" @on-send="talk"></answer>
    <choice :val="value" v-else @on-check="choose"></choice>
  </div>
</template>

<script lang = "ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { State, namespace } from "vuex-class";

const someModule = namespace("npc");

@Component
export default class Part_3 extends Vue {
  @someModule.State(state => state.talkVal) stateTalkVal: any;

  private txt: string = "上世纪90年代最早的浏览器名称?";
  private value: string[] = [];
  private vv: string = "";
  private status: boolean = true;

  mounted() {
    this.$NPCTalk.strEqualArr(this.txt);
  }

  @Watch("stateTalkVal")
  onStateTalkValChanged(newVal: string) {
    this.vv = newVal;
  }

  private talk(val: any) {
    if (val) {
      if (val.toLowerCase() === "worldwideweb") {
        this.txt = "不错，那么现在你想要问我什么!";
        this.$NPCTalk.strEqualArr(this.txt).then(() => {
          this.value = [
            "为什么要问这个问题",
            "再跟我聊聊你吧",
            "再跟我聊聊这个世界吧",
            "我没有想知道的了"
          ];
        });
      } else {
        this.txt = val + "?有趣的答案，那么现在你想要问我什么!";
        this.$NPCTalk.strEqualArr(this.txt).then(() => {
          this.value = [
            "为什么要问这个问题",
            "再跟我聊聊你吧",
            "再跟我聊聊这个世界吧"
          ];
        });
      }
      this.status = false;
    }
  }

  private choose(val: string) {
    switch (val) {
      case "为什么要问这个问题":
        this.txt =
          "嗯......原因有很多，最简单的原因是:我们现在通过它进行交流。";
        this.$NPCTalk.strEqualArr(this.txt);
        setTimeout(() => {
          this.$router.push("/one_part/part_4");
        }, 2000);
        break;
      case "再跟我聊聊你吧":
        this.txt = "你想要知道哪方面?";
        this.$NPCTalk.strEqualArr(this.txt).then(() => {
          this.value = ["年龄", "性别", "身份"];
        });
        this.value = ["年龄", "性别", "身份"];
      case "年龄":
        this.txt = "我应该算是101岁吧!";
        this.$NPCTalk.strEqualArr(this.txt);
        setTimeout(() => {
          this.$router.push("/one_part/part_4");
        }, 1500);
        break;
      case "性别":
        this.txt = "我应该算是男性吧!";
        this.$NPCTalk.strEqualArr(this.txt);
        setTimeout(() => {
          this.$router.push("/one_part/part_4");
        }, 1500);
        break;
      case "身份":
        this.txt = "我应该算是个当权者吧!";
        this.$NPCTalk.strEqualArr(this.txt);
        setTimeout(() => {
          this.$router.push("/one_part/part_4");
        }, 1500);
        break;
      case "再跟我聊聊这个世界吧":
        this.txt =
          "随着科技的发展，人类已经踏上了新一层文明的阶梯。战争，温饱，环境等问题也已经不复存在。";
        this.$NPCTalk.strEqualArr(this.txt).then(() => {
          this.value = ["那不是很好吗", "哦"];
        });
        break;
      case "那不是很好吗":
        this.txt = "也许吧!";
        this.$NPCTalk.strEqualArr(this.txt);
        setTimeout(() => {
          this.$router.push("/one_part/part_4");
        }, 1500);
        break;
      case "哦":
        this.$router.push("/one_part/part_4");
        break;
      case "我没有想知道的了":
        this.$router.push("/feeder_part/part_1");
        break;
    }
  }
}
</script>

