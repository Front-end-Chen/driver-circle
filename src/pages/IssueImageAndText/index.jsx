import React, { memo, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { TextareaItem, ImagePicker } from "antd-mobile";
import Header from "@comp/Header";
import PicturesWall from "@comp/PicturesWall";
import { ISSUEIMAGEANDTEXT } from "@/common/title";
import "./css/index.less";

export default memo(function IssueImageAndText() {
  const [content, setContent] = useState("");
  const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    id: '-1',
  }];
  const [files, setFiles] = useState(data);
  //   const pictureWallRef = useRef();
  const saveInput = val => {
    console.log(val);
    setContent(val);
  };

  const onChange = (files, type, index) => {
    console.log(files, type, index);
    setFiles(files);
  }
  return (
    <>
      <Header title={ISSUEIMAGEANDTEXT} />
      <div className="issue-main">
        <TextareaItem
          onChange={saveInput}
          className="issue-input"
          placeholder="分享汽车生活…"
          rows={7}
          count={200}
        />
        <ImagePicker
          files={files}
          onChange={onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 9}
          length="3"
        />
        {/* <PicturesWall ref={pictureWallRef} /> */}
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
    </>
  );
});
