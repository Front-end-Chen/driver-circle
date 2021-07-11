import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import { TextareaItem } from "antd-mobile";
import Header from "@comp/Header";
import { ISSUE } from "@/common/title";
import "./css/index.less";

export default memo(function IssueQuestion() {
  const [content, setContent] = useState("");
  //保存输入内容的回调
  const saveInput = val => {
    console.log(val);
    setContent(val);
  };
  return (
    <div>
      <Header title={ISSUE} />
      <div className="issue-main">
        <TextareaItem
          onChange={saveInput}
          className="issue-input"
          placeholder="分享汽车生活…"
          rows={7}
          count={200}
        />
      </div>
      <div className="issue-bottom">
        <Link to="/checkcircle" className="left">
          <span className="icon-left"></span>
          <span className="check-circle">选择车圈</span>
          <span className="icon-right"></span>
        </Link>
        <div className="right">
          <span className="input-sum">{content.length}/200</span>
          <button className="issue">发布</button>
        </div>
      </div>
    </div>
  );
});
