import Notes from '@/components/money/Notes.vue';
<template>
  <div>
    <label class="FormItem">
      <span class="name">{{ this.fieldName }}</span>
      <input type="text" v-model="value" :placeholder="this.placeholder" />
    </label>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class FormItem extends Vue {
  @Prop({ default: "" }) value!: string;
  @Prop({ required: true }) fieldName!: string;
  @Prop() placeholder?: string;
  @Watch("value")
  onValueChanged(value: string, oldValue: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.FormItem {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 58px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>