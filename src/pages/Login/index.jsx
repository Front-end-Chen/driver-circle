import React, { memo } from "react";
import Header from "@comp/Header";

export default memo(function Login() {
  return (
    <>
      <Header title="登录" />
      <div style={{ marginTop: "46px", height: "1000px" }}>Login</div>
    </>
  );
});
