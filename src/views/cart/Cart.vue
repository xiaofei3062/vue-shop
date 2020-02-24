<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">
        购物车(
        <span>{{ cartLength }}</span>
        )
      </div>
    </nav-bar>
    <!-- 购物车列表 -->
    <cart-list />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "./children/CartList";
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  computed: {
    // 对象写法可以自己命名
    ...mapGetters({
      cartLength: "cartListLength"
    })
  },
  components: { CartList, NavBar }
};
</script>

<style scoped>
.nav-bar {
  font-weight: 600;
  color: white;
  background-color: #ff8198;
}
</style>
