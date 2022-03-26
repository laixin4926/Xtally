<template>
  <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot />
    </div>
    <Daohang />
  </div>
</template>

<script>
export default {
  props: ["classPrefix"],
};
</script>

<style lang="scss" scoped>
.layout-wrapper {
  background: #faeff9;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  overflow: auto;
  flex-grow: 1;
}
</style>