import React, { memo, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { TextareaItem, ImagePicker, Modal } from "antd-mobile";
import Header from "@comp/Header";
import PicturesWall from "@comp/PicturesWall";
import { ISSUE } from "@/common/title";
import "./css/index.less";

export default memo(function IssueImageAndText(props) {
  //保存输入的内容
  const [content, setContent] = useState("");
  //模态框显示标记
  const [isVisible, setIsVisible] = useState(false);
  //文件对象数组
  const data = [
    {
      url:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      id: "-1",
    },
  ];
  //保存文件的列表
  const [files, setFiles] = useState(data);
  // const pictureWallRef = useRef();
  //保存输入内容的回调
  const saveInput = val => {
    console.log(val);
    setContent(val);
  };
  //处理选择图片的回调
  const handleChange = (files, type, index) => {
    console.log(files, type, index);
    setFiles(files);
  };
  //返回按钮显示模态框回调
  const showModal = e => {
    e.preventDefault(); // 修复 Android 上点击穿透
    setIsVisible(true);
  };
  //模态框保存草稿按钮的回调
  const saveContent = () => {
    console.log("保存草稿");
    setIsVisible(false);
    props.history.replace("/home")
  };
  //模态框丢弃按钮的回调
  const noSave = () => {
    setIsVisible(false);
    props.history.replace("/home")
  };
  return (
    <>
      <Header title={ISSUE} backFun={showModal} />
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
          onChange={handleChange}
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
      <Modal
        visible={isVisible}
        transparent
        animationType="slide-up"
        popup
        className="modal-issue"
        onClose={() => {
          setIsVisible(false);
        }}
      >
        <div className="modal-title">是否保存当前输入？</div>
        <div className="save-content" onClick={saveContent}>
          保存草稿
        </div>
        <div className="no-save" onClick={noSave}>
          丢弃
        </div>
      </Modal>
    </>
  );
});
