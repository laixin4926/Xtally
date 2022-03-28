<template>
  <div class="numberPad">
    <div class="output">{{ output }}</div>
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class NumberPad extends Vue {
  @Prop(Number) readonly value!: number;
  output = this.value.toString();
  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent!;
    if (this.output.length === 16) {
      return;
    }
    if (this.output === "0") {
      if ("0123456789".indexOf(input) >= 0) {
        this.output = input;
      } else {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf(".") >= 0 && input === ".") {
      return;
    }
    this.output += input;
  }
  remove() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = this.output.slice(0, -1);
    }
  }
  clear() {
    this.output = "0";
  }
  ok() {
    const number = parseFloat(this.output);
    this.$emit("update:value", number);
    this.$emit("submit", number);
    this.output = "0";
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  .output {
    @extend %clearFix;
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas, monospace;
    padding-right: 16px;
    text-align: right;
    color: #29314e;
    height: 56px;
  }
  .buttons {
    @extend %clearFix;
    > button {
      width: 25%;
      height: 58px;
      float: left;
      background: transparent;
      border: 2px #f1f5fa double;

      &.ok {
        height: 58 * 2px;
        float: right;
      }
      &.zero {
        width: 25 * 2%;
      }
      $bg: #f1f5fa;
      &:nth-child(6),
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(5),
      &:nth-child(3),
      &:nth-child(9),
      &:nth-child(7),
      &:nth-child(11),
      &:nth-child(10) {
        border-radius: 30%;
        background: darken($bg, 4%);
      }
      &:nth-child(4),
      &:nth-child(8) {
        background: darken($bg, 4 * 2%);
      }

      &:nth-child(13),
      &:nth-child(14) {
        background: darken($bg, 4 * 2%);
      }

      &:nth-child(12) {
        background: #f3bfea;
      }
    }
  }
}
</style>