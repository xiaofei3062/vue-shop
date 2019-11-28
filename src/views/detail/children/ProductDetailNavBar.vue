<template>
  <div class="product-detail-nav-bar">
    <nav-bar>
      <div @click="backHomePage" class="back-img" slot="left">
        <img alt="" src="@/assets/img/common/back.svg" />
      </div>
      <div class="title" slot="center">
        <span
          :class="{ active: index === currentIndex }"
          :key="index"
          @click="titleItemClick(index)"
          class="title-item"
          v-for="(item, index) in titles"
        >
          {{ item }}
        </span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";

export default {
  name: "ProductDetailNavBar",
  components: { NavBar },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleItemClick(index) {
      this.currentIndex = index;
      this.$emit("titleItemClick", index);
    },
    backHomePage() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
@import "../../../assets/css/base.css";

.title {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-item {
  flex: 1;
  font-size: 14px;
}

.active {
  color: var(--color-high-text);
}

.back-img {
  text-align: center;
}

.back-img img {
  width: 22px;
  margin-top: 11px;
}
</style>
