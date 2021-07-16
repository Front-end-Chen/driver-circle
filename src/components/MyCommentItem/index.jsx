import React, { memo } from "react";
import { Modal } from "antd-mobile";
import dayjs from "dayjs";
import "./css/index.less";

const alert = Modal.alert;

export default memo(function MyCommentItem(props) {
  const { ico, username } = props;
  const { commentdate, content, replydate } = props.comment;

  //删除评论按钮回调
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
    <div className="item">
      <img className="avatar" src={ico} alt="" />
      <div className="right-info">
        <header className="username">{username}</header>
        <p className="info-content">{content}</p>
        <span className="info-date">
          {dayjs(replydate ? replydate : commentdate).format("MM-DD HH:mm")}
        </span>
        <button onClick={deleteItem} className="delete-item"></button>
      </div>
    </div>
  );
});
