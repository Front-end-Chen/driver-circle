import React, { memo, useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Login from "./pages/Login";
import Issue from "./pages/Issue";
import MyActivity from "./pages/MyActivity";
import MyComment from "./pages/MyComment";
import CheckCircle from "./pages/CheckCircle";
import CircleDetail from "./pages/CircleDetail";
import Post from "./pages/Post";
import QuestionsAndAnswers from "./pages/QuestionsAndAnswers";

//注意: 自定义Hooks要用useXXX定义
//自定义切换路由回到顶部hooks
//监听pathname的变化，执行副作用，让页面回到顶部
//若数据动态加载可以加延时
const useScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default memo(function App() {
  //使用切换路由回到顶部hooks
  useScrollToTop();
  return (
    <>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/myprofile" component={MyProfile} />
        <Route path="/login" component={Login} />
        <Route path="/myactivity" component={MyActivity} />
        <Route path="/mycomment" component={MyComment} />
        <Route path="/issue/:type" component={Issue} />
        <Route path="/checkcircle" component={CheckCircle} />
        <Route path="/circledetail/:cid" component={CircleDetail} />
        <Route path="/post/:pid" component={Post} />
        <Route path="/qa/:qid" component={QuestionsAndAnswers} />
        <Redirect to="/home" />
      </Switch>
    </>
  );
});
