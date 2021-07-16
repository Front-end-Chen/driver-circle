import React, { memo, useState, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAsycPosts } from "@/redux/actions/posts";
import { issueCommentByPostID } from "@/api";
import { getAsycUserInfo } from "@/redux/actions/user";
import { Toast } from "antd-mobile";
import "./css/index.less";

export default memo(function IssueComment(props) {
  //缓存当前帖子post
  let curPost = props.post;

  //保存发布评论的input内容
  const [issueContent, setIssueContent] = useState("");
  //使用useDispatch将dispatch映射到组件中
  const dispatch = useDispatch();
  //从redux中获取user信息
  let user = useSelector(state => state.user, shallowEqual);

  useEffect(() => {
    //刷新丢失user信息，从localStorage中获取username发请求查询
    if (JSON.stringify(user) === "{}") {
      let username = localStorage.getItem("username");
      if (username) {
        dispatch(getAsycUserInfo(username));
      }
    }
  }, [dispatch, user]);

  //保存input输入内容
  const saveIssueContent = e => {
    setIssueContent(e.target.value);
  };
  //发布评论
  const issueComment = async () => {
    //从localStorage中读取登录标记判断是否登录
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin) {
      if (issueContent) {
        let comment = {
          id: Date.now(),
          order: curPost.comments.length,
          username: user.username,
          issueico: user.ico,
          content: issueContent,
          commentdate: Date.now(),
          children: [],
        };
        curPost.comments.push(comment);
        const result = await issueCommentByPostID(curPost);
        if (result.id) {
          Toast.success("评论成功！", 1.5);
          dispatch(getAsycPosts());
        } else {
          Toast.fail("评论失败！", 1.5);
        }
      } else {
        Toast.fail("输入内容为空！", 1.5);
      }
    } else {
      props.history.replace("/login");
    }
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
      <button className="issue-comment" onClick={issueComment}>
        发布
      </button>
    </div>
  );
});
