<template>
  <div class="slide-bar">
    <scroll class="slide-bar-height">
      <template v-for="(item,index) in slideBarList">
        <div
          :class="currentIndex===index?'active':''"
          :key="index"
          @click="slideBarItemClick(item,index)"
          class="slide-bar-item">{{item.title}}
        </div>
      </template>
    </scroll>
  </div>
</template>

<script>
  import Scroll from "../../../components/common/scroll/Scroll";

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
          miniWallkey: item.miniWallkey,
          index
        };
        this.currentIndex = index;
        this.$emit("slideBarItemClick", obj);
      }
    }
  };
</script>

<style scoped>
  @import "../../../assets/css/base.css";

  .slide-bar {
    width: 100%;
  }

  .slide-bar-height {
    width: 100px;
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    background-color: #f6f6f6;
    overflow: hidden;
  }

  .slide-bar-item {
    width: 100px;
    height: 45px;
    font-size: 14px;
    color: #666666;
    text-align: center;
    line-height: 45px;
  }

  .slide-bar-item.active {
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #ffffff;
    border-left: 3px solid var(--color-high-text);
  }
</style>
