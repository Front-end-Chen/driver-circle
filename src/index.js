import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "lib-flexible"; //引入rem适配库
// import '@/utils/rem' //引入自定义的rem适配代码
import "@/assets/css/base.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
