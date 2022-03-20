import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Daohang from "@/components/Daohang.vue";
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import tagListModel from "./models/tagListModel";

Vue.config.productionTip = false;
Vue.component("Layout", Layout);
Vue.component("Icon", Icon);
Vue.component("Daohang", Daohang);

window.tagList = tagListModel.fetch();
window.createTag = (name: string) => {
  const message = tagListModel.create(name);
  if (message === "duplicated") {
    window.alert("标签名重复了");
  } else if (message === "success") {
    window.alert("添加成功");
  }
};
window.removeTag = (id: string) => {
  return tagListModel.remove(id);
};
/* window.updataTag = (id: string, name: string) => {
  return tagListModel.update(id, name);
}; */
new Vue({
  router: router,
  store,
  render: (h) => h(App),
}).$mount("#app");
