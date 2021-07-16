import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./css/index.less";

export default memo(function QaIssueBar() {
  return (
    <div className="qa-bottom">
      <Link to="/issue/qa" className="issue">
        <span className="issue-img"></span>
        <span>我要提问</span>
      </Link>
      <div className="reply">
        <span className="reply-img"></span>
        <span>写回答</span>
      </div>
    </div>
  );
});
