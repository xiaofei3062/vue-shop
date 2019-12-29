<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service" />
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop" />
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select" />
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div @click="addToCart" class="cart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addToCart");
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  z-index: 10;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  height: 58px;
  text-align: center;
  background-color: #ffffff;
}

.bar-item {
  display: flex;
  flex: 1;
  height: 58px;
}

.bar-item > div {
  flex: 1;
}

.bar-left .text {
  font-size: 13px;
}

.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 11px auto 0;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}

.bar-left .service {
  background-position: 0 -54px;
}

.bar-left .shop {
  background-position: 0 -98px;
}

.bar-right {
  font-size: 15px;
  line-height: 58px;
  height: 58px;
  color: #ffffff;
}

.bar-right .cart {
  font-size: 15px;
  color: #333333;
  background-color: #ffe817;
}

.bar-right .buy {
  font-size: 16px;
  background-color: #ff6699;
}
</style>
