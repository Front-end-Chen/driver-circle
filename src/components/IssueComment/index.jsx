import React, { memo, useState } from "react";
import "./css/index.less";

export default memo(function IssueComment() {
  //保存发布评论的input内容
  const [issueContent, setIssueContent] = useState("");

  //保存input输入内容
  const saveIssueContent = e => {
    setIssueContent(e.target.value);
  };

  return (
    <div className="issue-comment-wrap">
      <input
        className="issue-content"
        type="text"
        onChange={saveIssueContent}
        placeholder="说点什么吧…"
        value={issueContent}
      />
      <button className="issue-comment">发布</button>
    </div>
  );
});
