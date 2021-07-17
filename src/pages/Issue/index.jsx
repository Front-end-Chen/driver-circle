import React, { memo, useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { issuePosts } from "@/api";
import { saveCheckCircle } from "@/redux/actions/circles";
import { getAsycUserInfo } from "@/redux/actions/user";
import { getAsycPosts } from "@/redux/actions/posts";
import { TextareaItem, ImagePicker, Modal, Toast } from "antd-mobile";
import Header from "@comp/Header";
// import PicturesWall from "@comp/PicturesWall";
import { ISSUE } from "@/common/title";
import "./css/index.less";

export default memo(function Issue(props) {
  //保存输入的内容
  const [content, setContent] = useState("");
  //模态框显示标记
  const [isVisible, setIsVisible] = useState(false);
  //文件对象数组
  const data = [
    // {
    //   url:
    //     "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    //   id: "-1",
    // },
  ];
  //保存文件的列表
  const [files, setFiles] = useState(data);
  // const pictureWallRef = useRef();

  //获取路由params参数-传递过来的发布帖子类型type
  const { type } = props.match.params;

  //使用useDispatch将dispatch映射到组件中
  const dispatch = useDispatch();

  //将redux中的checkcircle映射到组件中
  const checkcircle = useSelector(
    state => state.circlesInfo.checkcircle,
    shallowEqual
  );

  //将redux中的user映射到组件中
  const user = useSelector(state => state.user, shallowEqual);

  useEffect(() => {
    //刷新丢失user信息，从localStorage中获取username发请求查询
    if (JSON.stringify(user) === "{}") {
      let username = localStorage.getItem("username");
      dispatch(getAsycUserInfo(username));
    }
  }, [dispatch, user]);

  //从localStorage中获取缓存的草稿数据
  const postTmp = JSON.parse(
    localStorage.getItem("postTmp" + user.id || "") || "{}"
  );
  //设置草稿内容到页面
  let contentTmp = postTmp.content || "";
  useEffect(() => {
    if (contentTmp) {
      setContent(contentTmp);
    }
  }, [contentTmp]);

  //设置草稿选择车圈到页面
  if (!checkcircle.id) {
    if (postTmp.checkcircle && postTmp.checkcircle.id) {
      dispatch(saveCheckCircle(postTmp.checkcircle));
    }
  }

  //保存输入内容的回调
  const saveInput = val => {
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
    if (content) {
      setIsVisible(true);
    } else {
      //清除选了的车友圈
      dispatch(saveCheckCircle({}));
      props.history.replace("/home");
    }
  };
  //模态框保存草稿按钮的回调
  const saveContent = () => {
    let postTmp = { content, checkcircle };
    localStorage.setItem("postTmp" + user.id, JSON.stringify(postTmp));
    setIsVisible(false);
    props.history.replace("/home");
  };
  //模态框丢弃按钮的回调
  const noSave = () => {
    localStorage.removeItem("postTmp" + user.id);
    dispatch(saveCheckCircle({}));
    setIsVisible(false);
    props.history.replace("/home");
  };

  //发布帖子按钮回调
  const issuePost = async () => {
    let post;
    let issueuserinfo = { id: user.id, username: user.username, ico: user.ico };
    //未选择发布帖子的所属车友圈，提示并退出
    if (!checkcircle.id) {
      Toast.fail("没有选择车友圈！", 1.5);
      return;
    }
    if (type === "qa") {
      let solved = false,
        replynum = 0,
        reply = [];
      post = {
        type,
        content,
        issuedate: Date.now(),
        solved,
        replynum,
        issueuserinfo,
        cid: checkcircle.id,
        reply,
      };
    } else {
      let commentnum = 0,
        supportnum = 0,
        imgs = [],
        comments = [];
      post = {
        type,
        content,
        issuedate: Date.now(),
        commentnum,
        supportnum,
        issueuserinfo,
        cid: checkcircle.id,
        imgs,
        comments,
      };
    }
    const result = await issuePosts(post);
    if (result.id) {
      setContent("")
      localStorage.removeItem("postTmp" + user.id);
      dispatch(saveCheckCircle({}));
      Toast.success("发布成功！", 1.5);
      dispatch(getAsycPosts());
      props.history.replace("/home");
    } else {
      Toast.fail("发布失败！", 1.5);
    }
  };

  //点击选择车圈按钮回调-保存输入框的内容到localStorage，防止页面跳转回来时输入的文字丢失
  const toCheckCircle = () => {
    let postTmp = { content, checkcircle };
    localStorage.setItem("postTmp" + user.id, JSON.stringify(postTmp));
  };

  const Issue = (
    <>
      {/* 头部 */}
      <Header title={ISSUE} backFun={showModal} />
      {/* 发布页面主体-输入框与文件上传。发帖的文件上传暂未实现！ */}
      <div className="issue-main">
        <TextareaItem
          onChange={saveInput}
          className="issue-input"
          placeholder="分享汽车生活…"
          rows={7}
          count={200}
          value={content}
        />
        {type === "qa" ? (
          ""
        ) : (
          //普通上传组件，不带上传文件功能
          <ImagePicker
            files={files}
            onChange={handleChange}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={files.length < 9}
            length="3"
          />
          //高级上传组件，自带发请求上传文件，但需后端配合
          //<PicturesWall ref={pictureWallRef} />
        )}
      </div>
      {/* 底部操作区 */}
      <div className="issue-bottom">
        <Link to="/checkcircle" onClick={toCheckCircle} className="left">
          <span className="icon-left"></span>
          <span className="check-circle">
            {checkcircle.circlename ? checkcircle.circlename : "选择车圈"}
          </span>
          <span className="icon-right"></span>
        </Link>
        <div className="right">
          <span className="input-sum">{content.length}/200</span>
          <button className="issue" onClick={issuePost}>
            发布
          </button>
        </div>
      </div>
      {/* 退出提示框 */}
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
  //从localStorage中读取登录标记判断是否登录
  const isLogin = localStorage.getItem("isLogin");
  return isLogin ? Issue : <Redirect to="/login" />;
});
