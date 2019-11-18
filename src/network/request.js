import Vue from "vue";
import axios from "axios";
import qs from "qs";
import { Toast } from "vant";

Vue.use(Toast);
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;

// 导出封装好的axios
export function request(config) {

  // 1、创建axios实例
  const instance = axios.create({
    baseURL: "http://106.54.54.237:8000/api/v1",
    timeout: 10000
  });

  // 2、axios的请求拦截器
  instance.interceptors.request.use(
    req => {
      Toast.loading({
        // loading的时候禁止点击
        forbidClick: true,
        message: "加载中..."
      });
      return req;
    },
    err => {
      return Promise.reject(err);
    }
  );

  // 3、axios的响应拦截器
  instance.interceptors.response.use(
    res => {
      // 保证最少500毫秒的加载时间
      setTimeout(() => {
        Toast.clear();
      }, 500);
      return res.data;
    },
    err => {
      return Promise.reject(err);
    }
  );

  return instance(config);

}
