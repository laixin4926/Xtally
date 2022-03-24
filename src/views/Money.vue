<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />

    <Tabs :data-source="recordTypeList" :value.sync="record.type" />

    <FormItem
      field-name="备注"
      placeholder="在这里输入备注"
      :value="record.notes"
      @update:value="onUpdateNotes"
    />
    <Tags @update:value="record.tags = $event" />
  </Layout>
</template>@/components/money/FormItem.vue

<script lang="ts">
import Tags from "@/components/money/Tags.vue";
import FormItem from "@/components/money/FormItem.vue";

import NumberPad from "@/components/money/NumberPad.vue";
import Vue from "vue";

import { Component } from "vue-property-decorator";
import store from "../store/index";
import recordTypeList from "../constants/recordTypeList";
import Tabs from "../components/Tabs.vue";

@Component({
  components: { Tags, FormItem, NumberPad, Tabs },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }
  recordTypeList = recordTypeList;
  record: RecordItem = { tags: [], note: "", type: "-", amount: 0 };

  created() {
    this.$store.commit("fetchRecords");
  }
  onUpdateNotes(value: string) {
    this.record.note = value;
  }

  saveRecord() {
    this.$store.commit("createRecord", this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert("已保存");
    }
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

