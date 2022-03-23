<template>
  <Layout>
    <Tabs
      class-prefix="type"
      :data-source="recordTypeList"
      :value.sync="type"
    />
    <Tabs
      class-prefix="interval"
      :data-source="intercalList"
      :value.sync="interval"
      height="36px"
    />
    <div>
      type:{{ type }}
      <br />
      interval :{{ interval }}
    </div>

    <div>
      <ol>
        <li v-for="(group, index) in result" :key="index">
          <h3 class="title">{{ group.title }}</h3>
          <ol>
            <li v-for="item in group.items" :key="item.id" class="record">
              {{ item.amount }} {{ item.createdAt }}
            </li>
          </ol>
        </li>
      </ol>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tabs from "../components/Tabs.vue";
import intervalList from "../constants/intervalList";
import recordTypeList from "../constants/recordTypeList";

@Component({
  components: { Tabs },
})
export default class Statistics extends Vue {
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  get result() {
    const { recordList } = this;
    type HashTableValue = { title: string; items: RecordList[] };
    const hashTable: { [key: string]: HashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [data, time] = recordList[i].createdAt!.split("T");
      hashTable[data] = hashTable[data] || { title: data, items: [] };
      hashTable[data].items.push(recordList[i]);
    }
    return hashTable;
  }

  beforeCreated() {
    this.$store.commit("fetchRecords");
  }

  type = "-";
  interval = "day";
  intercalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>

<style scoped lang="scss">
::v-deep {
  .type-tabs-item {
    background: #c4c4c4;
    &.selected {
      background: white;
      &::after {
        display: none;
      }
    }
  }
  .interval-tabs-item {
    height: 48px;
  }
}
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title {
  @extend %item;
}
.record {
  background: white;
  @extend %item;
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
</style>
