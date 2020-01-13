import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const state = {
  // 默认tabBar显示
  tabBarShow: true,
  // 购物车数据
  cartList: [],
  // 是否开启请求加载
  isLoading: true
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  // 异步操作或者复杂的操作放到actions
  actions
});
