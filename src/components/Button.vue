<template>
  <div>
    <button class="button" @click="$emit('click', $event)"><slot /></button>
  </div>
</template>

<script  lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class BUtton extends Vue {}
</script>

<style lang ="scss" scoped>
.button {
  background: #c0d8f8;
  color: rgb(8, 7, 7);
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>