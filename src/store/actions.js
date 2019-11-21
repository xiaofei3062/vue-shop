export default {
  setCateGoryData({ state, commit }, data) {
    let list = JSON.parse(localStorage.getItem("cartList")) || [];

    if (list) {
      state.cartList = list;
      // find返回的是item
      let result = state.cartList.find(item => {
        return item.id === data.id;
      });

      // 利用actions分发多个commit事件用于调试
      if (result) {
        commit("addCounter", result);
      } else {
        commit("addToCart", data);
      }
    } else {
      commit("addToCart", data);
    }
  }
};
