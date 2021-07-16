import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import TabFooter from "@comp/TabFooter";
import Header from "@comp/Header";
import { getAsycUserInfo, deleteUserInfo } from "@/redux/actions/user";
import "./css/index.less";
import arrow from "../../assets/img/arrow_ic.png";
import { MYPROFILE } from "@/common/title";

export default memo(function MyProfile(props) {
  const dispatch = useDispatch();
  //从redux中获取user信息
  let user = useSelector(state => state.user, shallowEqual);

  useEffect(() => {
    //刷新丢失user信息，从localStorage中获取username发请求查询
    if (JSON.stringify(user) === "{}") {
      let username = localStorage.getItem("username");
      dispatch(getAsycUserInfo(username));
    }
  }, [dispatch, user]);

  //防闪屏同时避免报错，为空直接返回空元素
  if (JSON.stringify(user) === "{}") return <></>;

  //退出登录按钮回调
  const exit = () => {
    //清除localStorage数据并跳转到首页
    localStorage.removeItem("isLogin");
    localStorage.removeItem("username");
    dispatch(deleteUserInfo());
    props.history.replace("/home");
  };

  const MyProfile = (
    <>
      <Header title={MYPROFILE} />
      <div className="myprofile">
        <div className="profile">
          <img src={user.ico || ""} alt="" />
          <div>
            <header className="name">{user.username || ""}</header>
            <p>
              {user.profile || ""}
              <button className="modify"></button>
            </p>
          </div>
        </div>
        <div className="mypostinfo">
          <Link to="/myactivity" className="item myactivity">
            <span>我的动态</span>
            <img src={arrow} alt="" />
          </Link>
          <Link to="/mycomment" className="item mycomment">
            <span>我的评论</span>
            <img src={arrow} alt="" />
          </Link>
        </div>
        <Link to="/login" className="switch-accounts">
          切换账号
        </Link>
        <button className="exit" onClick={exit}>
          退出
        </button>
      </div>
      <TabFooter />
    </>
  );
  //从localStorage中读取登录标记判断是否登录
  const isLogin = localStorage.getItem("isLogin");
  return isLogin ? MyProfile : <Redirect to="/login" />;
});
