<template>
  <div class="goods-list-box">
    <p v-show="isRecommend">推荐商品</p>
    <div class="goods-list">
      <!-- 循环部分 -->
      <div
        :key="index"
        @click="goodItemClick(item)"
        class="goods-list-item"
        v-for="(item,index) in goods">
        <img @load="imgLoad" alt="" v-lazy="showImage(index)">
        <div class="goods-info">
          <p>{{item.title}}</p>
          <span class="price">¥{{item.price}}</span>
          <span class="collect">{{item.cfav}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Array,
        default() {
          return [];
        }
      },
      isRecommend: {
        type: Boolean,
        default() {
          return false;
        }
      }
    },
    methods: {
      imgLoad() {
        // 发射事件总线
        this.$bus.$emit("imgLoad");
      },
      // 跳转到详情页
      goodItemClick(item) {
        if (item.iid) {
          this.$router.push(`/detail/${item.iid}`).catch(err => {
          });
        } else {
          this.$router.go(0);
        }
      },
      // 动态显示图片
      showImage(index) {
        return this.goods[index].img || this.goods[index].image || this.goods[index].show.img;
      }
    }
  };
</script>

<style scoped>
  @import "../../../assets/css/base.css";

  .goods-list-box {
    width: 100%;
  }

  .goods-list-box p {
    font-size: 15px;
    padding-left: 10px;
    margin-top: 10px;
  }

  .goods-list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }

  .goods-list-item {
    width: 48%;
    padding-bottom: 40px;
    position: relative;
  }

  .goods-list-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 14px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 30px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
