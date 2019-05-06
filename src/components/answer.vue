<template>
  <div class="answer-wrapper">
    <input v-model="inputVal" ref="input" type="text" placeholder="说点什么吧" @keyup.enter="send">
    <span @click="send">对话</span>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from "vue-property-decorator";

@Component
export default class Answer extends Vue {
  $refs!: {
    input: HTMLInputElement;
  };
  private inputVal: string = "";
  @Emit("on-send")
  send() {
    let _val = this.inputVal;
    this.inputVal = "";
    return _val;
  }
  mounted() {
    this.$nextTick(() => {
      this.$refs["input"].focus();
    });
  }
}
</script>

<style lang="less" scoped>
.answer-wrapper {
  position: fixed;
  left: 0px;
  right: 0;
  bottom: 20px;
  font-size: 24px;
  text-align: center;
  span {
    margin-left: 10px;
    cursor: pointer;
  }
  input {
    width: 30%;
    height: 40px;
    line-height: 40px;
    padding: 5px 10px;
    background: #000;
    font-size: 24px;
    outline: none;
    border: none;
    border-radius: 4px;
    color: #fff;
    box-shadow: 0 0 20px #fff;
  }
}
</style>
