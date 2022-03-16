<template>
  <Layout>
    <Tags />
    <Notes />
    <Types />
    <NumberPad />
  </Layout>
</template>

<script lang="ts">
import Tags from "@/components/money/Tags.vue";
import Notes from "@/components/money/Notes.vue";
import Layout from "@/components/Layout.vue";
import Types from "@/components/money/Types.vue";
import NumberPad from "@/components/money/NumberPad.vue";

export default {
  components: { Tags, Notes, Layout, Types, NumberPad },
};
</script>
