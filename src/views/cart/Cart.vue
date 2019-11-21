<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车(<span>{{cartLength}}</span>)</div>
    </nav-bar>
    <!-- 购物车列表 -->
    <cart-list></cart-list>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import CartList from "./children/CartList";

  import { mapGetters } from "vuex";

  export default {
    name: "Cart",
    computed: {
      // 对象写法可以自己命名
      ...mapGetters({
        cartLength: "cartListLength"
      })

      // 数组写法,默认名字
      // ...mapGetters(["cartListLength"])
    },
    components: { CartList, NavBar }
  };
</script>

<style scoped>
  @import "../../assets/css/base.css";

  .nav-bar {
    background-color: var(--color-tint);
    color: white;
  }

  /deep/ .van-submit-bar {
    bottom: 49px;
    border-top: 1px solid #cccccc;
  }

  /deep/ .van-submit-bar__text {
    text-align: center;
  }
</style>
