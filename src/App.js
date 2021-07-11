import React, { memo } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import MyProfile from './pages/MyProfile'
import Login from "./pages/Login";
import IssueQuestion from "./pages/IssueQuestion";
import IssueImageAndText from "./pages/IssueImageAndText";
import MyActivity from "./pages/MyActivity";
import MyComment from "./pages/MyComment";
import CheckCircle from "./pages/CheckCircle";

export default memo(function App() {
  return (
    <>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/myprofile" component={MyProfile}/>
        <Route path="/login" component={Login}/>
        <Route path="/myactivity" component={MyActivity}/>
        <Route path="/mycomment" component={MyComment}/>
        <Route path="/issueimageandtext" component={IssueImageAndText}/>
        <Route path="/issuequestion" component={IssueQuestion}/>
        <Route path="/checkcircle" component={CheckCircle}/>
        <Redirect to="/home" />
      </Switch>
    </>
  );
});
