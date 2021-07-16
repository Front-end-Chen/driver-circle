import React, { memo } from "react";
import dayjs from "dayjs";
import "./css/index.less";

export default memo(function CommentItem(props) {
  const { issueico, username, content, commentdate, children } = props.comment;
  
  //有回复评论的显示内容
  const replyInfo = (
    <>
      {children.map(c => {
        return (
          <p key={c} className="reply-info">
            <span className="reply-username">{c.username}:</span>
            {c.content}
          </p>
        );
      })}
    </>
  );

  return (
    <div className="item">
      <img className="avatar" src={issueico} alt="" />
      <div className="right-info">
        <header className="username">{username}</header>
        <p className="info-content">{content}</p>
        <span className="info-date">{dayjs(commentdate).format("MM-DD HH:mm")}</span>
        <button className="reply-btn">回复</button>
        {children.length !== 0 ? replyInfo : ""}
      </div>
    </div>
  );
});
