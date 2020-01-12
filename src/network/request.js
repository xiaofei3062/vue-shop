import axios from "axios";
import qs from "qs";
import { Toast } from "vant";

// 此接口为测试接口,真实接口请联系微信coderwhy001
const url = "http://127.0.0.1:8000/api";

let config = {
  baseURL: url
};

const _axios = axios.create(config);

// 请求拦截
_axios.interceptors.request.use(
  req => {
    Toast.loading({
      forbidClick: true,
      message: "加载中..."
    });
    return req;
  },
  err => {
    return Promise.reject(err);
  }
);

// 响应拦截
_axios.interceptors.response.use(
  res => {
    Toast.clear();
    return res.data;
  },
  err => {
    Toast.clear();
    return Promise.reject(err);
  }
);

// 全局注册axios qs
window.axios = _axios;
window.qs = qs;
