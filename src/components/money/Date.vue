<template>
  <div>
    <label class="formItem">
      <span class="name">{{ this.fieldName }}</span>
      <input
        type="date"
        :value="value"
        @input="onValueChanged($event.target.value)"
        :placeholder="this.placeholder"
      />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class FormItem extends Vue {
  @Prop({ default: "" }) readonly value!: string;
  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string;
  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.formItem {
  font-size: 14px;
  padding-left: 50px;
  display: flex;
  align-items: center;
  margin: 20px 30px 0 0;

  .name {
    padding-right: 16px;
  }
  input {
    height: 34px;
    padding-left: 5px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
    border: 1px solid #999;
  }
}
</style>