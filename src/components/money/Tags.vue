<template>
  <div class="tags">
    <!-- <div class="new">
      <button @click="createTag">新增标签</button>
    </div> -->
    <ul class="current">
      <li
        v-for="tag in tagList"
        :key="tag.id"
        :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
        @click="toggle(tag)"
      >
        {{ tag.name }}
      </li>
      <li>
        <Icon class="icon" name="房子" />
        标签
      </li>
      <li>
        <Icon class="icon" name="衣服" />
        标签
      </li>
      <li>
        <Icon class="icon" name="口红" />
        标签
      </li>
      <li>
        <Icon class="icon" name="酒杯" />
        标签
      </li>
      <li>
        <Icon class="icon" name="钱" />
        标签
      </li>
      <li>
        <Icon class="icon" name="钱包" />
        标签
      </li>
      <li>
        <Icon class="icon" name="日用品" />
        标签
      </li>
      <li>
        <Icon class="icon" name="小猪存钱罐" />
        标签
      </li>
      <li>
        <Icon class="icon" name="饮食" />
        标签
      </li>
      <li>
        <Icon class="icon" name="投资" />
        标签
      </li>
      <li>
        <Icon class="icon" name="礼物" />
        标签
      </li>
      <li>
        <Icon class="icon" name="add" />
        <router-link to="/AddTags"> 添加</router-link>
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
  /*  get tagList() {
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
  } */
}
</script>
<style lang="scss" scoped>
.tags {
  margin-top: 20px;
  position: relative;
  width: 100%;
  height: 35%;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  padding: 10px;
  background: #fde8f2;
  font-size: 14px;

  flex-grow: 1;
  display: flex;
  //flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    align-items: center;
    justify-content: center;

    > li {
      display: flex;
      align-items: center;
      flex-direction: column;
      $bg: #fff9f9;
      border: 1px solid #efc7c7;
      box-sizing: border-box;
      border-radius: 4px;
      background: $bg;
      $h: 24px;
      line-height: $h;
      padding: 0 16px;
      width: 25%;
      margin-right: 12px;
      margin-top: 4px;
      &.selected {
        background: darken($bg, 50%);
        color: white;
      }

      .icon {
        width: 32px;
        height: 32px;
      }
    }
  }
  .current::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  > .new {
    padding-top: 16px;

    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>