import axios from "axios";
import qs from "qs";
import { Toast } from "vant";
import Loading from "../store/index";

// 公用接口
const url = "http://106.54.54.237:8000/api/hy";
const url2 = "http://123.207.32.32:8000/api/hy";

let config = {
  baseURL: url2
};

const _axios = axios.create(config);

// 请求拦截
_axios.interceptors.request.use(
  req => {
    // 当getters里面的isLoading为true再显示请求加载
    if (Loading.getters.isLoading) {
      Toast.loading({
        forbidClick: true,
        message: "加载中..."
      });
    }
    return req;
  },
  err => {
    return Promise.reject(err);
  }
);

// 响应拦截
_axios.interceptors.response.use(
  res => {
    if (res.status === 200 || res.status === 201) {
      Toast.clear();
      return res.data;
    }
  },
  err => {
    Toast.clear();
    return Promise.reject(err);
  }
);

// 全局注册axios qs
window.axios = _axios;
window.qs = qs;
