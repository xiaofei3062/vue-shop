import Vue from "vue";
import Router from "vue-router";

// 使用箭头函数import引入,可以实现路由懒加载
const Home = () => import("../views/home/Home");
const Category = () => import("../views/category/Category");
const Cart = () => import("../views/cart/Cart");
const Profile = () => import("../views/profile/Profile");
const Login = () => import("../views/login/Login");
const Register = () => import("../views/register/Register");
const ProductDetail = () => import("../views/detail/ProductDetail");

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/category", name: "category", component: Category },
    { path: "/cart", name: "cart", component: Cart },
    { path: "/profile", name: "profile", component: Profile },
    { path: "/login", name: "login", component: Login },
    { path: "/register", name: "register", component: Register },
    { path: "/detail/:id", name: "detail", component: ProductDetail },
    { path: "*", redirect: "/" }
  ]
});
