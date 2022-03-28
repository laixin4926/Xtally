<template>
  <layout>
    <Tags></Tags>
  </layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import Icon from "@/components/Icon.vue";
import Tags from "../components/money/Tags.vue";
export default {
  components: { Layout, Tags, Icon },
  data() {
    return {
      tags: [
        { icons: "日用品", title: "日用花销" },
        { icons: "酒杯", title: "交际" },
        { icons: "房子", title: "租房" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>