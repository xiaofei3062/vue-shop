export default {
  tabBarShow: state => state.tabBarShow,
  cartList: state => state.cartList,
  // 把getters传给自己,getters默认在第二个参数
  cartListLength: (state, getters) => getters.cartList.length,
  // 映射请求加载
  isLoading: state => state.isLoading
};
