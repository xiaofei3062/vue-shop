import Vue from "vue";
import "./network/request";
import Vant from "vant";
import "vant/lib/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入自己封装的组件
import myToast from "./components/common/toast";
// 引入fastclick解决移动端300ms延迟
import fastClick from "fastclick";
// 引入vue的懒加载
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false;

Vue.use(Vant);
// 使用自己封装的组件
Vue.use(myToast);
// 使用vue的懒加载
Vue.use(VueLazyLoad, {
  // 未加载的占位图片
  loading: require("./assets/img/common/placeholder.png")
});

// 解决移动端300ms延迟
fastClick.attach(document.body);

// 全局实例化$bus事件总线
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
