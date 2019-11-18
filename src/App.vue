<template>
  <div class="container">
    <keep-alive exclude="ProductDetail,Cart">
      <router-view></router-view>
    </keep-alive>
    <!-- 控制tabBar显示和隐藏 -->
    <tab-bar v-show="$store.getters.tabBarShow"></tab-bar>
  </div>
</template>

<script>
  import TabBar from "./components/common/tabbar/TabBar";

  export default {
    name: "App",
    components: { TabBar }
  };
</script>

<style>
  @import "../public/css/base.css";

  .container {
    width: 100%;
    height: 100%;
    font-size: 16px;
  }

  .van-button--normal {
    padding: 0 15px !important;
  }
</style>
