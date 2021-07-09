import React, { memo } from "react";
import { Link, Redirect } from "react-router-dom";
import TabFooter from "@comp/TabFooter";
import Header from "@comp/Header";
import "./css/index.less";
import img4 from "../../assets/img/用户1.jpeg";
import img5 from "../../assets/img/arrow_ic.png";

export default memo(function MyProfile() {
  const MyProfile = (
    <>
      <Header title="我的" />
      <div className="myprofile">
        <div className="profile">
          <img src={img4} alt="" />
          <div>
            <header className="name">懂车小王子</header>
            <p>
              简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介
              <button className="modify"></button>
            </p>
          </div>
        </div>
        <div className="mypostinfo">
          <Link to="/myprofile/myactivity" className="item myactivity">
            <span>我的动态</span>
            <img src={img5} alt="" />
          </Link>
          <Link to="/myprofile/mycomment" className="item mycomment">
            <span>我的评论</span>
            <img src={img5} alt="" />
          </Link>
        </div>
        <Link to="/login" className="switch-accounts">切换账号</Link>
      </div>
      <TabFooter />
    </>
  );
  const isLogin = localStorage.getItem("isLogin")
  return isLogin ? MyProfile : <Redirect to="/login"/>
});