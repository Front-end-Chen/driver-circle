import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import "./css/index.less";

export default memo(function TabFooter() {
  return (
    <div className="tabfooter">
      <NavLink to="/home" activeClassName="driveractive">
        <div className="tab-item">
          <div className="driver"></div>
          <span>车友圈</span>
        </div>
      </NavLink>
      <NavLink to="/login" activeClassName="myactive">
        <div className="tab-item">
          <div className="my"></div>
          <span>我的</span>
        </div>
      </NavLink>
    </div>
  );
});
