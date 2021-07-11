import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "lib-flexible"; //引入rem适配库
// import '@/utils/rem' //引入自定义的rem适配代码
import App from "./App";
import "@/assets/css/base.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);