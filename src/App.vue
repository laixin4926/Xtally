<template>
  <div id="app">
    <router-view />
    <!-- //将router的路径内容页面显示在这里 -->
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-family: $font-hei;
  font-size: 16px;
  line-height: 1.5;
}

#app {
  max-width: 500px;
  margin: 0 auto;
}
</style>
