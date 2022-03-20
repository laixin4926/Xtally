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
    <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
  </Layout>
</template>@/components/money/FormItem.vue

<script lang="ts">
import Tags from "@/components/money/Tags.vue";
import FormItem from "@/components/money/FormItem.vue";
import Types from "@/components/money/Types.vue";
import NumberPad from "@/components/money/NumberPad.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { Tags, FormItem, Types, NumberPad },
})
export default class Money extends Vue {
  tags = window.tagList;

  recordList = window.recordList;
  record: RecordItem = { tags: [], note: "", type: "-", amount: 0 };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.note = value;
  }

  saveRecord() {
    window.createRecord(this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

