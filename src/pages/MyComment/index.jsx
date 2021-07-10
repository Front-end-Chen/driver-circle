import React, { memo } from "react";
import { Modal } from "antd-mobile";
import Header from "@comp/Header";
import "./css/index.less";
import { MYCOMMENT } from "@/common/title";
import img1 from "../../assets/img/用户1.jpeg";
import img2 from "../../assets/img/empty_pic@2x.png";

const alert = Modal.alert;

export default memo(function MyComment() {
  const deleteItem = () => {
    alert("确认要删除该条内容吗？", "", [
      {
        text: "取消",
        onPress: () => console.log("cancel"),
        style: { color: "#3296FA" },
      },
      {
        text: "删除",
        onPress: () => console.log("ok"),
        style: { color: "#F85959" },
      },
    ]);
  };

  return (
    <>
      <Header title={MYCOMMENT} />
      <div className="info-list">
        <div className="item">
          <img className="avatar" src={img1} alt="" />
          <div className="right-info">
            <header className="username">这是用户名字123</header>
            <p className="info-content">宝马3系去哪里买比较好</p>
            <span className="info-date">06-29</span>
            <button onClick={deleteItem} className="delete-item"></button>
          </div>
        </div>
        <div className="item">
          <img className="avatar" src={img1} alt="" />
          <div className="right-info">
            <header className="username">这是用户名字123</header>
            <p className="info-content">
              后雨刷不工作了怎么办啊？后雨刷不工作后雨刷不工作了怎么办啊？后雨刷不
            </p>
            <span className="info-date">06-29</span>
            <button onClick={deleteItem} className="delete-item"></button>
          </div>
        </div>
        <div className="item">
          <img className="avatar" src={img1} alt="" />
          <div className="right-info">
            <header className="username">这是用户名字123</header>
            <p className="info-content">奥迪A8去哪里买比较好</p>
            <span className="info-date">06-29</span>
            <button onClick={deleteItem} className="delete-item"></button>
          </div>
        </div>
        <div className="bottom-info">已显示全部内容</div>
      </div>
      <div className="null-list">
        <img className="null-pic" src={img2} alt=""/>
        <div className="null-info">暂无内容</div>
      </div>
    </>
  );
});
