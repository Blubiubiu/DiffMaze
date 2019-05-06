<template>
  <div class="part-wrapper">
    <div>{{txt}}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Part_5_1 extends Vue {
    private txt: string = "不出意外，这种问题果然难不住你。"
}
</script>

