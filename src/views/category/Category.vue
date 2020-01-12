<template>
  <div class="category">
    <nav-bar class="category-nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <slide-bar :slide-bar-list="list[currentIndex].categoryList" @slideBarItemClick="slideBarItemClick" />
    <scroll class="scroll-height">
      <subcategory :category-list="list[currentIndex].subcategoryList" />
      <tab-control :titles="titleList" @tabClick="tabClick" />
      <goods-list :goods="list[currentIndex].categoryDetailList" />
    </scroll>
  </div>
</template>

<script>
import SlideBar from "./children/SlideBar";
import NavBar from "@/components/common/navbar/NavBar";
import { getCategory, getCategoryDetail, getSubcategory } from "@/network/category";
import Subcategory from "./children/Subcategory";
import Scroll from "@/components/common/scroll/Scroll";
import TabControl from "@/components/content/tabControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";

export default {
  name: "Category",
  data() {
    return {
      list: [
        {
          categoryList: [],
          subcategoryList: [],
          categoryDetailList: []
        }
      ],
      titleList: ["流行", "新款", "精选"],
      curMiniWallkey: "10062603",
      currentType: "pop",
      currentIndex: 0
    };
  },
  components: { GoodsList, TabControl, Scroll, Subcategory, NavBar, SlideBar },
  methods: {
    slideBarItemClick({ maitKey, miniWallkey, index }) {
      // console.log(maitKey, miniWallkey);
      // 将miniWallkey动态添加到数组中,如果数据中包含当前的miniWallkey则证明数据请求过了
      this.curMiniWallkey = miniWallkey;
      this.currentIndex = index;
      if (this.list.includes(maitKey)) return;
      this.getSubcategory(this.list[index].categoryList[index].maitKey, index);
      this.getCategoryDetail(this.list[index].categoryList[index].miniWallkey, "pop", index);
      this.getCategoryDetail(this.list[index].categoryList[index].miniWallkey, "new", index);
      this.getCategoryDetail(this.list[index].categoryList[index].miniWallkey, "sell", index);
    },
    getCategory() {
      getCategory().then(res => {
        // console.log(res.data.category.list);
        let index = this.currentIndex;
        this.list[index].categoryList = res.data.category.list;
        const obj = {
          categoryList: this.list[index].categoryList,
          subcategoryList: this.list[index].subcategoryList,
          categoryDetailList: this.list[index].categoryDetailList
        };
        this.list.push(obj);
        Array.from(new Set(this.list));
        // 初始化请求第一条数据,并且给数组赋值第一个默认值
        if (this.list[index].categoryList.length > 0) {
          this.getSubcategory(this.list[index].categoryList[0].maitKey, 0);
          this.getCategoryDetail(this.list[index].categoryList[0].miniWallkey, "pop", 0);
          this.getCategoryDetail(this.list[index].categoryList[0].miniWallkey, "new", 0);
          this.getCategoryDetail(this.list[index].categoryList[0].miniWallkey, "sell", 0);
        }
      });
    },
    getSubcategory(key, index) {
      getSubcategory(key).then(res => {
        // console.log(res.data.list);
        this.list[index].subcategoryList = res.data.list;
        const obj = {
          categoryList: this.list[index].categoryList,
          subcategoryList: this.list[index].subcategoryList,
          categoryDetailList: this.list[index].categoryDetailList
        };
        this.list.push(obj);
        Array.from(new Set(this.list));
      });
    },
    getCategoryDetail(key, type, index) {
      getCategoryDetail(key, type).then(res => {
        // console.log(res);
        this.list[index].categoryDetailList = res;
        const obj = {
          categoryList: this.list[index].categoryList,
          subcategoryList: this.list[index].subcategoryList,
          categoryDetailList: this.list[index].categoryDetailList
        };
        this.list.push(obj);
        Array.from(new Set(this.list));
      });
    },
    tabClick(index) {
      this.getCategoryDetail(this.list[index].categoryList[index].miniWallkey, this.currentType, 0);
    }
  },
  created() {
    this.getCategory();
  }
};
</script>

<style scoped>
.category-nav-bar {
  font-weight: 600;
  color: white;
  background-color: #ff8198;
}

.scroll-height {
  position: fixed;
  top: 44px;
  right: 0;
  bottom: 50px;
  left: 100px;
  overflow: hidden;
}
</style>
