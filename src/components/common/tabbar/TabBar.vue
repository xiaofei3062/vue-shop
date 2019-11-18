<template>
  <div class="tab-bar">
    <div
      :key="index"
      @click="tabBarClick(index)"
      class="tab-bar-item"
      v-for="(item,index) in tabBarList"
    >
      <img :src="item.icon" alt v-if="!setTabBar(index)" />
      <img :src="item.active" alt v-else />
      <div :style="{'color':setTabBar(index)?'#ff5777':'black'}">{{item.txt}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    data() {
      return {
        tabBarList: [
          {
            icon: require("assets/img/tabbar/home.png"),
            active: require("assets/img/tabbar/home_active.png"),
            txt: "首页",
            path: "/"
          },
          {
            icon: require("assets/img/tabbar/category.png"),
            active: require("assets/img/tabbar/category_active.png"),
            txt: "分类",
            path: "/category"
          },
          {
            icon: require("assets/img/tabbar/cart.png"),
            active: require("assets/img/tabbar/cart_active.png"),
            txt: "购物车",
            path: "/cart"
          },
          {
            icon: require("assets/img/tabbar/profile.png"),
            active: require("assets/img/tabbar/profile_active.png"),
            txt: "我的",
            path: "/profile"
          }
        ]
      };
    },
    methods: {
      tabBarClick(index) {
        this.$router.replace(this.tabBarList[index].path).catch(err => {
        });
      },
      setTabBar(index) {
        return this.$route.path === this.tabBarList[index].path;
      }
    }
  };
</script>

<style scoped>
  .tab-bar {
    display: flex;
    background: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);
    z-index: 10;
  }

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 13px;
  }

  .tab-bar-item img {
    width: 23px;
    height: 23px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 3px;
  }
</style>
