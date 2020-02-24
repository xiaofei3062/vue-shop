<template>
  <div class="product-detail">
    <product-detail-nav-bar @titleItemClick="titleItemClick" ref="detailNavBar" />
    <scroll :probe-type="3" @backTopScroll="detailScroll" class="scroll-height" ref="scroll">
      <detail-swiper :swiper-list="topImages" class="detail-set-scroll" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shops" />
      <detail-images-info :images-info="detailsInfo" @imgLoad="imgLoad" />
      <detail-param-info :param-info="paramsInfo" class="detail-set-scroll" />
      <detail-comment-info :comment-info="commentInfo" class="detail-set-scroll" />
      <goods-list :goods="recommendList" :is-recommend="true" class="detail-set-scroll" />
    </scroll>

    <!-- 回到顶部,监听组件的原生事件必须要用native修饰符变成原生组件 -->
    <transition name="scroll">
      <back-top @click.native="backTop" v-show="curPosition >= 1500" />
    </transition>

    <detail-bottom-bar @addToCart="addToCart" />
  </div>
</template>

<script>
import ProductDetailNavBar from "./children/ProductDetailNavBar";
import DetailSwiper from "./children/DetailSwiper";
import DetailBaseInfo from "./children/DetailBaseInfo";
import DetailShopInfo from "./children/DetailShopInfo";
import Scroll from "@/components/common/scroll/Scroll";
import DetailImagesInfo from "./children/DetailImagesInfo";
import DetailParamInfo from "./children/DetailParamInfo";
import DetailCommentInfo from "./children/DetailCommentInfo";
import GoodsList from "@/components/content/goods/GoodsList";
import DetailBottomBar from "./children/DetailBottomBar";
import BackTop from "@/components/content/backTop/BackTop";

import { getProductDetail, getRecommend, Goods, GoodsParams, Shop } from "@/network/productDetail";
import { backTopMixin, imgListenerMixin } from "@/common/mixin";

export default {
  name: "ProductDetail",
  data() {
    return {
      detailId: "",
      // 轮播图数据
      topImages: [],
      goods: {},
      shops: {},
      detailsInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommendList: [],
      detailClassList: [],
      detailIndex: 0
    };
  },
  mixins: [imgListenerMixin, backTopMixin],
  components: {
    DetailBottomBar,
    GoodsList,
    DetailCommentInfo,
    DetailParamInfo,
    DetailImagesInfo,
    Scroll,
    DetailShopInfo,
    DetailBaseInfo,
    DetailSwiper,
    ProductDetailNavBar,
    BackTop
  },
  beforeCreate() {
    // 进入详情页隐藏tabBar
    this.$store.commit("setTabBarShow", false);
  },
  created() {
    // 获取页面传过来的id
    this.detailId = this.$route.params.id;

    // 发送网络请求
    this.getProductDetail();
    this.getRecommend();
  },
  // 路由离开的时候恢复tabBar
  beforeRouteLeave(to, from, next) {
    this.$store.commit("setTabBarShow", true);
    next();
  },
  destroyed() {
    // 取消detail组件事件总线的监听
    this.$bus.$off("imgLoad", this.imgListener);
  },
  methods: {
    // 请求详情数据
    getProductDetail() {
      getProductDetail(this.detailId).then(res => {
        const data = res.result;
        // console.log(data);

        // 获取轮播图数据
        this.topImages = data.itemInfo.topImages;

        // 获取商品数据,调用封装的ES6的class
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);

        // 获取店铺数据
        this.shops = new Shop(data.shopInfo);

        // 获取下面的图片展示数据
        this.detailsInfo = data.detailInfo;

        // 获取尺寸数据
        this.paramsInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule || {});

        // 获取评论数据
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0] || {};
        }
      });
    },
    // 请求推荐数据
    getRecommend() {
      getRecommend().then(res => {
        // console.log(res);
        this.recommendList = res.data.list;
      });
    },
    imgLoad() {
      this.$refs.scroll.refresh();
      // 图片加载完获取classList
      this.getClassList();
    },
    // navBar点击
    titleItemClick(index) {
      // 根据数组下标滚动到对应的元素内容位置
      this.$nextTick(() => {
        let el = document.getElementsByClassName("detail-set-scroll");
        this.$refs.scroll.scrollToElement(el[index], 300);
      });
    },
    // 获取classList
    getClassList() {
      // Array.from() 将伪数组转换成纯数组
      this.detailClassList = [];
      this.detailClassList = Array.from(document.getElementsByClassName("detail-set-scroll"));
      let maxValue = 10000000;
      this.detailClassList.push({ offsetTop: maxValue });
      console.log(this.detailClassList);
    },
    // 监听详情页滚动事件,并动态设置navBar的index
    detailScroll(position) {
      let detailPosition = position ? -position.y : 0;
      this.curPosition = detailPosition;

      for (let i = 0; i < this.detailClassList.length - 1; i++) {
        if (
          detailPosition >= this.detailClassList[i].offsetTop &&
          detailPosition < this.detailClassList[i + 1].offsetTop
        ) {
          if (this.detailIndex !== i) {
            this.detailIndex = i;
            this.$refs.detailNavBar.currentIndex = this.detailIndex;
          }
          break;
        }
      }
    },
    // 添加购物车
    addToCart() {
      // 1.获取需要展示到购物车的商品信息
      const obj = {
        image: this.topImages[0],
        title: this.goods.title,
        desc: this.goods.desc,
        price: this.goods.lowNowPrice,
        id: this.detailId
      };

      // 2.将商品数据传到购物车页面
      this.$store.dispatch("setCateGoryData", obj);
    }
  }
};
</script>

<style scoped>
.product-detail {
  width: 100%;
  height: 100%;
}

/* BScroll固定高度和区域 */
.scroll-height {
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 50px;
  left: 0;
  overflow: hidden;
  width: 100%;
  background-color: #ffffff;
}

/* vue的淡入淡出动画 */
.scroll-enter-active,
.scroll-leave-active {
  transition: all 0.3s;
}

.scroll-enter,
.scroll-leave-to {
  opacity: 0;
}

.scroll-enter-to,
.scroll-leave {
  opacity: 1;
}
</style>
