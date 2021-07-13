import React, { memo } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import MyProfile from './pages/MyProfile'
import Login from "./pages/Login";
import Issue from "./pages/Issue";
import MyActivity from "./pages/MyActivity";
import MyComment from "./pages/MyComment";
import CheckCircle from "./pages/CheckCircle";
import CircleDetail from "./pages/CircleDetail";
import Post from "./pages/Post";
import QuestionsAndAnswers from "./pages/QuestionsAndAnswers";

export default memo(function App() {
  return (
    <>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/myprofile" component={MyProfile}/>
        <Route path="/login" component={Login}/>
        <Route path="/myactivity" component={MyActivity}/>
        <Route path="/mycomment" component={MyComment}/>
        <Route path="/issue/:type" component={Issue}/>
        <Route path="/checkcircle" component={CheckCircle}/>
        <Route path="/circledetail/:cid" component={CircleDetail}/>
        <Route path="/post/:pid" component={Post}/>
        <Route path="/qa/:qid" component={QuestionsAndAnswers}/>
        <Redirect to="/home" />
      </Switch>
    </>
  );
});
