import React, { memo } from "react";
import dayjs from "dayjs";
import "./css/index.less";

export default memo(function QaCommentItem(props) {
  const { isSolved } = props;
  const { issueico, username, replydate, content, bestreply } = props.reply;

  return (
    <div className="item">
      <div className="head">
        <div className="left-info">
          <img src={issueico} alt="" />
          <div className="post-head">
            <span className="name">{username}</span>
            <span className="post-time">{dayjs(replydate).format("MM-DD HH:mm")}</span>
          </div>
        </div>
        {isSolved ? (
          <button className={bestreply ? "best" : "no-show"}></button>
        ) : (
          <button className="no-best">采纳答案</button>
        )}
      </div>
      <p className="post-content">{content}</p>
    </div>
  );
});
