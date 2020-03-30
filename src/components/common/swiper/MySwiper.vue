<template>
  <div class="swiper-list">
    <van-swipe :autoplay="4000" indicator-color="#ff0000">
      <van-swipe-item :key="index" v-for="(item, index) in swiperList">
        <img :src="item.image" @load="swiperLoad" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "MySwiper",
  props: {
    swiperList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: true
    };
  },
  methods: {
    swiperLoad() {
      if (this.isLoad) {
        this.$emit("swiperLoad");
        this.isLoad = false;
      }
    }
  }
};
</script>

<style scoped>
.swiper-list /deep/ .van-swipe__indicator {
  width: 10px;
  height: 10px;
  opacity: 0.8;
  border-radius: 100%;
  background-color: white;
}

.swiper-list {
  overflow: hidden;
  width: 100%;
}

.swiper-list img {
  display: block;
  width: 100%;
}
</style>
