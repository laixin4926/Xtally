import Types from '@/components/money/Types.vue';
<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
.types {
  background: rgb(187, 233, 236);
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    height: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: rgb(93, 96, 99);
    }
  }
}
</style>