//对axios进行二次封装(请求、响应拦截器)
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css";
//在当前模块中引入store
import store from "@/store";

const requests = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

//请求拦截器
requests.interceptors.request.use((config) => {
  //config是配置对象
  //可以让进度条开始冬
  if (store.state.detail.uuid_token) {
    config.headers.userTempId = store.state.detail.uuid_token;
  }
  //进度条开始
  nprogress.start();
  return config;
});
//响应拦截器
requests.interceptors.response.use(
  (res) => {
    //进度条结束
    nprogress.done();
    return res.data;
  },
  (error) => {
    //响应失败的回调函数
    // return Promise.reject(new Error('failed'))
  }
);

//对外暴露
export default requests;
