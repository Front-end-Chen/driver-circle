import React, { memo } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import TabFooter from "./components/TabFooter";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default memo(function App() {
  return (
    <>
      <Header title="车友圈" />
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        <Redirect to="/home" />
      </Switch>
      <TabFooter />
    </>
  );
});
