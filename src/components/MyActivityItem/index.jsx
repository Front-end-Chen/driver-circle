import React, { memo } from "react";
import { Modal } from "antd-mobile";
import dayjs from "dayjs";
import "./css/index.less";

const alert = Modal.alert;

export default memo(function MyActivityItem(props) {
  const { ico, username } = props;
  const {
    type,
    content,
    issuedate,
    commentnum,
    replynum,
    previewimg,
  } = props.post;

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
        <p className="info-content">
          {type === "qa" ? "问题:" + content : content}
        </p>
        <span className="info-date">
          {dayjs(issuedate).format("MM-DD HH:mm")}
        </span>
        <span className="comment-sum">
          {type === "imgtext" ? commentnum + "评论" : replynum + "回答"}
        </span>
        <button onClick={deleteItem} className="delete-item"></button>
      </div>
      {type === "imgtext" && previewimg ? (
        <img className="item-img" src={previewimg} alt="" />
      ) : (
        ""
      )}
    </div>
  );
});
