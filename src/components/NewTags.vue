<template>
  <div>
    <van-dialog
      v-model="visible"
      title="标题"
      show-cancel-button
      @confirm="$emit('confirm', value)"
      @cancel="$emit('cancel')"
    >
      <van-field v-model="value" placeholder="请输入用户名" key="111" />
    </van-dialog>
  </div>
</template>

<script>
export default {
  props: ["visible"],
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>