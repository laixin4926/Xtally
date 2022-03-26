<template>
  <div>
    <ul class="tabs" :class="{ [classPrefix + 'tabs']: classPrefix }">
      <li
        v-for="item in dataSource"
        :key="item.value"
        class="tabs-item"
        :class="liClass(item)"
        :style="{ height: height }"
        @click="select(item)"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

type DataSourceItem = {
  text: string;
  value: string;
};

@Component
export default class Tabs extends Vue {
  @Prop({ required: true, type: Array })
  dataSource!: DataSourceItem[];
  @Prop(String)
  readonly value!: string;
  @Prop(String)
  classPrefix?: string;
  @Prop({ type: String, default: " 40px" })
  height!: string;

  liClass(item: DataSourceItem) {
    return {
      [this.classPrefix + "-tabs-item"]: this.classPrefix,
      selected: item.value === this.value,
    };
  }
  select(item: DataSourceItem) {
    this.$emit("update:value", item.value);
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  background: #f3e1f3;
  display: flex;
  text-align: center;
  font-size: 18px;
  align-items: center;
  justify-content: center;

  &-item {
    width: 30%;
    /* height: 58px; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
    position: relative;
    border-radius: 10px;

    background: #c1dcff;
    &.selected {
      background: #f8f8f8;
      &::after {
        display: none;
      }
    }
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;

      background: rgb(93, 96, 99);
    }
  }
}
</style>