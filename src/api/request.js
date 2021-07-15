import axios from "axios";
import qs from "querystring";
import { Toast } from "antd-mobile";
import { BASE_URL, TIME_OUT } from "../common/config";

//创建axios实例
const instance = axios.create({
  baseURL: BASE_URL, //配置请求基本URL
  timeout: TIME_OUT, //配置请求超时时间
});

//axios默认发送post请求时是以json格式，此处处理转换成urlencoded形式
//请求拦截器
instance.interceptors.request.use(config => {
  // console.log(config);

  //从配置对象中获取method和data
  const { method, data } = config;
  if (method.toLowerCase() === "post") {
    //若传递过来的参数是对象，转换成urlencoded形式
    if (data instanceof Object) {
      config.data = qs.stringify(data);
    }
  }
  return config;
});

//响应拦截器
instance.interceptors.response.use(
  response => {
    //请求若成功，返回真正的数据
    return response.data;
  },
  error => {
    // debugger;

    //请求若失败，提示错误（这里可以处理所有请求的异常）
    Toast.fail(error.message, 1.5);
    //中断Promise链
    return new Promise(() => {});
  }
);

export default instance;
