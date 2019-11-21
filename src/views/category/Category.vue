<template>
  <div class="category">
    <nav-bar class="category-nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <slide-bar :slide-bar-list="categoryList" @slideBarItemClick="slideBarItemClick"></slide-bar>
    <scroll class="scroll-height">
      <subcategory :category-list="subcategoryList"></subcategory>
      <tab-control :titles="titleList" @tabClick="tabClick"></tab-control>
      <goods-list :goods="categoryDetailList"></goods-list>
    </scroll>
  </div>
</template>

<script>
  import SlideBar from "./children/SlideBar";
  import NavBar from "../../components/common/navbar/NavBar";
  import { getCategory, getCategoryDetail, getSubcategory } from "../../network/category";
  import Subcategory from "./children/Subcategory";
  import Scroll from "../../components/common/scroll/Scroll";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";

  export default {
    name: "Category",
    data() {
      return {
        categoryList: [],
        subcategoryList: [],
        categoryDetailList: [],
        titleList: ["流行", "新款", "精选"],
        curMiniWallkey: "10062603",
        keyList: [],
        keyList2: [],
        dataList: [],
        curIndex: 0,
        curType: "pop",
        dataList2: [],
        list: []
      };
    },
    components: { GoodsList, TabControl, Scroll, Subcategory, NavBar, SlideBar },
    methods: {
      slideBarItemClick({ maitKey, miniWallkey, index }) {
        // console.log(maitKey, miniWallkey);
        // 将miniWallkey动态添加到数组中,如果数据中包含当前的miniWallkey则证明数据请求过了
        this.curMiniWallkey = miniWallkey;
        this.curIndex = index;
        if (this.keyList.includes(miniWallkey) && this.keyList2.includes(maitKey)) {
          this.subcategoryList = this.dataList[index];
          this.categoryDetailList = this.dataList2[index][0];
        } else {
          this.keyList[index] = miniWallkey;
          this.keyList2[index] = maitKey;
          this.getCategoryDetail(miniWallkey, "pop", index);
          this.getCategoryDetail(miniWallkey, "new", index);
          this.getCategoryDetail(miniWallkey, "sell", index);
          this.getSubcategory(maitKey, index);
        }
      },
      getCategory() {
        getCategory().then(res => {
          // console.log(res.data.category.list);
          this.categoryList = res.data.category.list;
          // 初始化请求第一条数据,并且给数组赋值第一个默认值
          if (this.categoryList.length > 0) {
            this.getSubcategory(this.categoryList[0].maitKey, 0);
            this.getCategoryDetail(this.categoryList[0].miniWallkey, "pop", 0);
            this.getCategoryDetail(this.categoryList[0].miniWallkey, "new", 0);
            this.getCategoryDetail(this.categoryList[0].miniWallkey, "sell", 0);
            this.keyList.push(this.categoryList[0].miniWallkey);
            this.keyList2.push(this.categoryList[0].maitKey);
          }
        });
      },
      getSubcategory(key, index) {
        getSubcategory(key).then(res => {
          // console.log(res.data.list);
          this.dataList[index] = res.data.list;
          if (this.dataList.length > 1) {
            this.subcategoryList = this.dataList[index];
          } else {
            this.subcategoryList = this.dataList[0];
          }
        });
      },
      getCategoryDetail(key, type, index) {
        this.list = [];
        getCategoryDetail(key, type).then(res => {
          // console.log(res);
          this.list.push(res);
          this.dataList2[index] = this.list;
          if (this.dataList2.length > 1) {
            this.categoryDetailList = this.dataList2[index][index];
          } else {
            this.categoryDetailList = this.dataList2[0][0];
          }
        });
      },
      tabClick(index) {
        this.categoryDetailList = this.dataList2[this.curIndex][index];
      }
    },
    created() {
      this.getCategory();
    }
  };
</script>

<style scoped>
  @import "../../assets/css/base.css";

  .category-nav-bar {
    background-color: var(--color-tint);
    color: white;
    font-weight: 600;
  }

  .scroll-height {
    position: fixed;
    left: 100px;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
</style>
