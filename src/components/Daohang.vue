<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon class="icon" name="标签" />
      标签
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon class="icon" name="Pen-01" />
      记账
    </router-link>

    <router-link to="/statistics" class="item" active-class="selected">
      <Icon class="icon" name="账单" />
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected {
    color: $color-highlight;
  }
}
</style>
