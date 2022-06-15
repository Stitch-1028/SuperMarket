<template>
  <div id="app">
    <TheHeader></TheHeader>
    <router-view></router-view>
    <TheFooter v-show="$route.meta.show"></TheFooter>
  </div>
</template>

<script>
// 导入头部
import TheHeader from "./components/Header";
import TheFooter from "./components/Footer";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
  mounted() {
        // 通知vuex发请求,获取数据，存储仓库中
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
