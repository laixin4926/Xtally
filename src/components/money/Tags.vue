<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li
        v-for="tag in tagList"
        :key="tag.id"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
        @click="toggle(tag)"
      >
        {{ tag.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import TagHelper from "@/mixins/TagHelper";

@Component
export default class Tags extends mixins(TagHelper) {
  get tagList() {
    return this.$store.state.tagList;
  }
  selectedTags: string[] = [];
  created() {
    this.$store.commit("fetchTags");
  }
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:value", this.selectedTags);
  }
}
</script>
<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 10px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 20px;

  > .current {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    padding-left: 16px;
    margin-bottom: 6px;

    > li {
      $bg: #c1e2f8;
      background: $bg;
      $h: 28px;
      line-height: $h;
      border-radius: 20px 10px 50px 30px;
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
      margin-bottom: 2px;

      &.selected {
        background: #f3bfea;
        color: white;
      }
    }
  }
  > .new {
    border-radius: 10px;
    margin-top: 20px;
    padding: 5px;

    background: rgb(250, 248, 248);

    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #999;

    button {
      background: transparent;
      border: none;
      color: rgb(22, 21, 21);

      padding: 0 4px;
      float: left;
    }
  }
}
</style>