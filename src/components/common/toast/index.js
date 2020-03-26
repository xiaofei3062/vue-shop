import MyToast from "./MyToast";

const myToast = {};

// 将对象安装到Vue上
myToast.install = function (Vue) {
  // 1.创建组件构造器
  const toastConstructor = Vue.extend(MyToast);

  // 2.new的方式,根据组件构造器,可以创建出来一个组件对象
  const toast = new toastConstructor();

  // 3.将组件对象手动挂载到某个元素上
  toast.$mount(document.createElement("div"));

  // 4.myToast.$el就已经挂载到上面创建的div了,然后将div挂载到body上即可
  document.body.appendChild(toast.$el);

  // 最后将myToast挂载到Vue的原型上
  Vue.prototype.$mytoast = toast;
};

export default myToast;
