import React, { memo } from "react";
import Header from "@comp/Header";
import { CHECKCIRCLE } from "@/common/title";
import './css/index.less'

export default memo(function CheckCircle(props) {
  const checkCircle = (e) => {
    console.log(e);
    console.log(e.target.innerText.split("↵")[0]);
  }
  return (
    <>
      <Header title={CHECKCIRCLE} />
      <div className="carcircle-list">
        <div className="item" onClick={checkCircle}>
          <img className="car-pic" src="http://p1-dcd.byteimg.com/img/tos-cn-i-0000/8609e223106a45c39ca4a935ebf3ed8b~tplv-resize:220:0.png" alt="" />
          <div className="right-info">
            <header className="car-name">特斯拉 Model S</header>
            <span className="people-num">6722人加入</span>
            <span className="posts-num">519条内容</span>
          </div>
        </div>
        <div className="item">
          <img className="car-pic" src="https://p1-dcd.byteimg.com/img/tos-cn-i-0000/489cb3b87ef24850925d7bd9c8376cc3~tplv-resize:220:0.png" alt="" />
          <div className="right-info">
            <header className="car-name">Huracán</header>
            <span className="people-num">3050人加入</span>
            <span className="posts-num">236条内容</span>
          </div>
        </div>
        <div className="item">
          <img className="car-pic" src="http://p3-dcd.byteimg.com/img/tos-cn-i-0000/a7167bf5ced34dffb9fffa319f6a3c1c~tplv-resize:220:0.png" alt="" />
          <div className="right-info">
            <header className="car-name">奥迪A4L</header>
            <span className="people-num">2860人加入</span>
            <span className="posts-num">460条内容</span>
          </div>
        </div>
        <div className="item">
          <img className="car-pic" src="https://p1-dcd.byteimg.com/img/tos-cn-i-0000/1fee9842e9ba4560b87ef84cc2b7d8ab~tplv-resize:220:0.png" alt="" />
          <div className="right-info">
            <header className="car-name">哈弗H6</header>
            <span className="people-num">1068人加入</span>
            <span className="posts-num">184条内容</span>
          </div>
        </div>
      </div>
    </>
  );
});
