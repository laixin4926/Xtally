<template>
  <Layout class-prefix="layout"
    >{{ record }}
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <FormItem
      field-name="备注"
      placeholder="在这里输入备注"
      @update:value="onUpdateNotes"
    />
    <Tags />
  </Layout>
</template>@/components/money/FormItem.vue

<script lang="ts">
import Tags from "@/components/money/Tags.vue";
import FormItem from "@/components/money/FormItem.vue";
import Types from "@/components/money/Types.vue";
import NumberPad from "@/components/money/NumberPad.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import store from "../store/index";

@Component({
  components: { Tags, FormItem, Types, NumberPad },
  computed: {
    count() {
      return this.$store.state.recordList;
    },
  },
})
export default class Money extends Vue {
  record: RecordItem = { tags: [], note: "", type: "-", amount: 0 };

  created() {
    this.$store.commit("fetchRecords");
  }
  onUpdateNotes(value: string) {
    this.record.note = value;
  }

  saveRecord() {
    this.$store.commit("createRecord", this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

