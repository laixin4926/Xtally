import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Dialog, Field } from "vant";
import NewTags from "@/components/NewTags.vue";

Vue.use(Field);
Vue.use(Dialog);

const map: { [key: string]: string } = {
  "tag name duplicated ": "标签名重复了",
};

@Component({
  components: { NewTags },
})
export class TagHelper extends Vue {
  createTag() {
    const name = this;
    /* const name = window.prompt("请输入标签名"); */
    if (!name) {
      return window.alert("标签名不能为空");
    }
    this.$store.commit("createTag", name);
    if (this.$store.state.createTagError) {
      window.alert(map[this.$store.state.createTagError.message] || "未知错误");
    }
  }
}

export default TagHelper;
