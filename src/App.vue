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
  @import "assets/css/base.css";

  .container {
    width: 100%;
    height: 100%;
    font-size: 16px;
  }

  .van-button--normal {
    padding: 0 15px !important;
  }

  .van-submit-bar__text {
    padding-right: 0 !important;
  }

  .van-submit-bar__text span {
    display: inline !important;
    font-size: 15px !important;
  }

  .van-checkbox__label {
    font-size: 15px !important;
  }
</style>
