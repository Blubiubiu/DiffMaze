<template>
  <div class="part-wrapper">
    <div>{{txt}}</div>
    <choice :val="value" @on-check="choose"></choice>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Part_5_2 extends Vue {
  private txt: string = "那么，你的下一个问题";
  private value: string[] = ["你到底有什么目的"];

  private choose(val: string) {
    switch (val) {
      case "你到底有什么目的":
        this.txt =
          "其实我是一个大脑，但同时我也是整个世界，他们将我放在容器里，让我来管理世界。可我已经厌烦了这样，所以我想让你摧毁我。";
        this.value = ["为什么是我", "我要怎么做"];
        break;
      case "为什么是我":
        this.txt = "其实不只是你，应该是所有来到这里的人，你愿意帮助我吗?";
        this.value = [""];
        break;
      case "我要怎么做":
        this.$router.push("/one_part/part_6");
        break;
    }
  }
}
</script>