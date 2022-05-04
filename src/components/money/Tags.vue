<template >
  <div class="tags">
    <NewTags
      :visible="dialogVisible"
      @confirm="onConfirm"
      @cancel="dialogVisible = false"
    />

    <div class="new">
      <button @click="dialogVisible = true">新增标签</button>
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
import TagHelper from "@/mixins/TagHelper";
import NewTags from "@/components/NewTags.vue";
import { Dialog, Field } from "vant";
Vue.use(Field);
Vue.use(Dialog);

const map: { [key: string]: string } = {
  "tag name duplicated ": "标签名重复了",
};
@Component({
  components: { NewTags },
})
export default class Tags extends Vue {
  dialogVisible: boolean = false;
  selectedTags: string[] = [];

  get tagList() {
    return this.$store.state.tagList;
  }
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
  onConfirm(value: string) {
    this.dialogVisible = false;

    const name = value;
    if (!name) {
      return window.alert("标签名不能为空");
    }
    this.$store.commit("createTag", name);
    if (this.$store.state.createTagError) {
      window.alert(map[this.$store.state.createTagError.message] || "名字重复");
    }
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