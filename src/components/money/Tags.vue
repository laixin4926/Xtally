<template>
  <div class="tags">
    <ul class="current" v-if="tagList">
      <li
        v-for="tag in tagList"
        :key="tag.id"
        :class="{ selected: selectedTags.find(t => t.id === tag.id) }"
        @click="toggle(tag)"
      >
        <Icon
          class="icon"
          :name="tag.icon"
        >
        </Icon>
        {{ tag.name }}
      </li>
      <li @click="goToCreate">
        <Icon class="icon" name="add" />
        添加
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import TagHelper from "@/mixins/TagHelper";
import {Prop} from "vue-property-decorator";

@Component
export default class Tags extends mixins(TagHelper) {
  @Prop() selectedTags: Tag[] = [];
  get tagList() {
    return this.$store.state.tagList;
  }
  created() {
    this.$store.commit("fetchTags");
  }
  toggle(tag: Tag) {
    const index = this.selectedTags.findIndex(t => t.id === tag.id);
    const newTags = index >= 0 ? this.selectedTags.filter(t => t.id !== tag.id) : [...this.selectedTags, tag];
    this.$emit("update:selectedTags", newTags);
  }
  goToCreate() {
    this.$router.push('/labels');
  }
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