<template>
  <div class="slide-bar">
    <scroll class="slide-bar-height">
      <template v-for="(item, index) in slideBarList">
        <button
          :class="currentIndex === index ? 'active' : ''"
          :key="index"
          @click="slideBarItemClick(item, index)"
          class="slide-bar-item"
        >
          {{ item.title }}
        </button>
      </template>
    </scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "SlideBar",
  components: { Scroll },
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    slideBarList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    slideBarItemClick(item, index) {
      const obj = {
        maitKey: item.maitKey,
        index
      };
      this.currentIndex = index;
      this.$emit("slideBarItemClick", obj);
    }
  }
};
</script>

<style scoped>
.slide-bar {
  width: 100%;
}

.slide-bar-height {
  position: fixed;
  top: 44px;
  right: 0;
  bottom: 49px;
  left: 0;
  overflow: hidden;
  width: 100px;
  background-color: #f6f6f6;
}

.slide-bar-item {
  font-size: 14px;
  line-height: 45px;
  width: 100px;
  height: 45px;
  user-select: none;
  text-align: center;
  color: #666666;
  border: 0;
  outline: none;
  background: none;
}

.slide-bar-item.active {
  font-weight: 700;
  color: #ff5777;
  border-left: 3px solid #ff5777;
  background-color: #ffffff;
}
</style>
