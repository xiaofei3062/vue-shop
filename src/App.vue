<template>
  <div class="shop-container">
    <keep-alive exclude="ProductDetail">
      <router-view />
    </keep-alive>
    <!-- 控制tabBar显示和隐藏 -->
    <tab-bar v-show="$store.getters.tabBarShow" />
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";

export default {
  name: "App",
  components: { TabBar }
};
</script>
