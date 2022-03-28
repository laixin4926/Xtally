<template>
  <Layout class-prefix="layout">
    <!-- {{ record }} -->
    <Tabs :data-source="recordTypeList" :value.sync="record.type" />

    <Date
      field-name="日期:"
      :value="record.data"
      @update:value="onUpdateDates"
    />

    <FormItem
      field-name="备注:"
      placeholder="在这里输入备注"
      :value="record.notes"
      @update:value="onUpdateNotes"
    />

    <InputMoney
      field-name="费用:"
      placeholder="在这里输入备注"
      :value="record.amount"
      @update:value="onUpdateInputs"
    />

    <Tags />
    <!--  <Submit :value.sync="record.amount" @submit="saveRecord"> -->

    <Submit :value.sync="record.amount" @submit="saveRecord" />
  </Layout>
</template>

<script lang="ts">
import Tags from "@/components/money/Tags.vue";
import FormItem from "@/components/money/FormItem.vue";
import InputMoney from "@/components/money/InputMoney.vue";
import Submit from "@/components/money/Submit.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import recordTypeList from "../constants/recordTypeList";
import Tabs from "../components/Tabs.vue";
import Date from "@/components/money/Date.vue";

@Component({
  components: { Tags, FormItem, Submit, Tabs, Date, InputMoney },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }
  recordTypeList = recordTypeList;
  record: RecordItem = { tags: [], note: "", data: "", type: "-", amount: 0 };

  created() {
    this.$store.commit("fetchRecords");
  }
  onUpdateNotes(value: string) {
    this.record.note = value;
  }

  onUpdateDates(value: string) {
    this.record.data = value;
  }
  onUpdateInputs(value: number) {
    this.record.amount = value;
  }
  saveRecord() {
    this.$store.commit("createRecord", this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert("已保存");
    }
  }
}
</script>

<style scoped lang="scss">
</style>

