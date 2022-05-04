<template>
  <Layout>
    <div class="tags">
      <NewTags
        :visible="dialogVisible"
        @confirm="onConfirm"
        @cancel="dialogVisible = false"
      />

      <router-link
        class="tag"
        v-for="tag in tags"
        :key="tag.id"
        :to="`/labels/edit/${tag.id}`"
      >
        <span>{{ tag.name }}</span>
        <Icon name="right" />
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Button class="createTag" @click="dialogVisible = true">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Button from "@/components/Button.vue";
import { mixins } from "vue-class-component";
import TagHelper from "@/mixins/TagHelper";
import NewTags from "@/components/NewTags.vue";
import { Dialog, Field } from "vant";
Vue.use(Field);
Vue.use(Dialog);

const map: { [key: string]: string } = {
  "tag name duplicated ": "标签名重复了",
};
@Component({
  components: { Button, NewTags },
})
export default class Labels extends Vue {
  dialogVisible: boolean = false;
  get tags() {
    return this.$store.state.tagList;
  }
  beforeCreate() {
    this.$store.commit("fetchTags");
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
  background: white;
  font-size: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f59f9f;

    margin-bottom: 5px;
    padding-left: 16px;

    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}
.createTag {
  background: #c1dcff;
  color: white;
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

