import React, { memo } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import MyProfile from './pages/MyProfile'
import Login from "./pages/Login";
import IssueQuestion from "./pages/IssueQuestion";
import IssueImageAndText from "./pages/IssueImageAndText";

export default memo(function App() {
  return (
    <>
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/myprofile" component={MyProfile}/>
        <Route path="/login" component={Login}/>
        <Route path="/issuequestion" component={IssueQuestion}/>
        <Route path="/issueimageandtext" component={IssueImageAndText}/>
        <Redirect to="/home" />
      </Switch>
    </>
  );
});
