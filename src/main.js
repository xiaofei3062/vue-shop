import Vue from "vue";
import "./network/request";
import Vant from "vant";
import "vant/lib/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入vue的懒加载
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false;

Vue.use(Vant);
// 使用vue的懒加载
Vue.use(VueLazyLoad, {
  // 未加载的占位图片
  loading: require("@/assets/img/common/placeholder.png")
});

// 全局实例化$bus事件总线
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
