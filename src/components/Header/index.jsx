import React, { memo } from "react";
import { withRouter } from "react-router-dom";
import { NavBar, Icon } from "antd-mobile";

import "./css/index.less";

function Header(props) {
  const { title, backFun } = props;
  const back = () => {
    props.to ? props.history.replace(props.to) : props.history.goBack();
  };
  return (
    <div className="header-wrap">
      <NavBar
        className="header"
        mode="light"
        icon={<Icon type="left" className="left" />}
        onLeftClick={backFun ? backFun : back}
        rightContent={<Icon type="ellipsis" />}
      >
        {title}
      </NavBar>
    </div>
  );
}
export default withRouter(memo(Header));
