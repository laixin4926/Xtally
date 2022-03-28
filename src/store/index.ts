import clone from "@/lib/clone";
import createId from "@/lib/createId";
import Vue from "vue";
import Vuex from "vuex";
import router from "@/router";

Vue.use(Vuex);

const defaultIconList: Omit<Tag, 'id'>[] = [
  {icon: '房子', name: '房屋', type: '-'},
  {icon: '孩子', name: '幼儿', type: '-'},
  {icon: '话筒2', name: '话费', type: '-'},
  {icon: '酒杯', name: '应酬', type: '-'},
  {icon: '口红', name: '化妆品', type: '-'},
  {icon: '礼物', name: '礼物', type: '-'},
  {icon: '龙头花洒', name: '洗浴', type: '-'},
  {icon: '皮球', name: '运用', type: '-'},

  {icon: '钱', name: '转账', type: '+'},
  {icon: '钱包', name: '储蓄', type: '+'},
]

const store = new Vuex.Store({
  state: {
    recordList: [],
    createRecordError: null,
    createTagError: null,
    tagList: [],
    currentTag: undefined,
  } as RootState,
  mutations: {
    setCurrentTag(state, id: string) {
      state.currentTag = state.tagList.filter((t) => t.id === id)[0];
    },
    updateTag(state, payload: { id: string; name: string }) {
      const { id, name } = payload;

      const idList = state.tagList.map((item) => item.id);
      console.log(idList);
      if (idList.indexOf(id) >= 0) {
        const names = state.tagList.map((item) => item.name);
        if (names.indexOf(name) >= 0) {
          window.alert("标签名重复了");
        } else {
          const tag = state.tagList.filter((item) => item.id === id)[0];
          tag.name = name;
          store.commit("saveTags");
        }
      }
    },
    removeTag(state, id: string) {
      let index = -1;
      for (let i = 0; i < state.tagList.length; i++) {
        if (state.tagList[i].id === id) {
          index = i;
          break;
        }
      }
      if (index >= 0) {
        state.tagList.splice(index, 1);
        store.commit("saveTags");
        router.back();
      } else {
        window.alert("删除失败");
      }
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(
        window.localStorage.getItem("recordList") || "[]"
      ) as RecordItem[];
    },
    createRecord(state, record: RecordItem) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date().toISOString();
      state.recordList.push(record2);
      store.commit("saveRecords");
    },
    saveRecords(state) {
      window.localStorage.setItem(
        "recordList",
        JSON.stringify(state.recordList)
      );
    },
    fetchTags(state) {
      state.tagList = JSON.parse(
        window.localStorage.getItem("tagList") || "[]"
      );
      if (!state.tagList || state.tagList.length === 0) {
        defaultIconList.forEach((item) => store.commit('createTag', item))
      }
    },
    createTag(state, payload: Omit<Tag, 'id'>) {
      state.createTagError = null;
      const names = state.tagList.map((item) => item.name);
      if (names.indexOf(payload.name) >= 0) {
        state.createTagError = new Error("tag name duplicated");
        return;
      }
      const id = createId().toString();
      state.tagList.push({ id, ...payload });
      store.commit("saveTags");
    },
    saveTags(state) {
      window.localStorage.setItem("tagList", JSON.stringify(state.tagList));
    },
    findTag(state, id: string) {
      return state.tagList.filter((t) => t.id === id)[0];
    },
  },
});

export default store;
