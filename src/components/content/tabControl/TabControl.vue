<template>
  <div class="tab-control">
    <div
      :class="{active:index===curIndex}"
      :key="index"
      @click="tabControlClick(index)"
      class="tab-control-item"
      v-for="(item,index) in titles"
    ><span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        curIndex: 0
      };
    },
    methods: {
      tabControlClick(index) {
        this.curIndex = index;
        this.$emit("tabClick", index);
      }
    }
  };
</script>

<style scoped>
  @import "../../../assets/css/base.css";

  .tab-control {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    justify-content: space-between;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    font-size: 15px;
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 2px solid var(--color-high-text);
  }
</style>
