import React, { memo } from "react";
import { NavBar, Icon } from "antd-mobile";

import "./css/index.less";

export default memo(function Header(props) {
  const { title } = props;
  return (
    <div className="header-wrap">
      <NavBar
        className="header"
        mode="light"
        icon={<Icon type="left" className="left" />}
        onLeftClick={() => console.log("onLeftClick")}
        rightContent={<Icon type="ellipsis" />}
      >
        {title}
      </NavBar>
    </div>
  );
});
