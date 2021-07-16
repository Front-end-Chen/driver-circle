import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Header from "@comp/Header";
import PostItem from "@comp/PostItem";
import CommentItem from "@comp/CommentItem";
import IssueComment from "@comp/IssueComment";
import { getAsycCircles } from "@/redux/actions/circles";
import { getAsycPosts } from "@/redux/actions/posts";
import "./css/index.less";
import nullimg from "../../assets/img/mountain_pic@2x.png";
import { POST } from "@/common/title";

export default memo(function Post(props) {
  //获取路由params参数-传递过来的帖子IDpid
  const { pid } = props.match.params;
  //缓存选中的帖子
  const [checkpost, setCheckPost] = useState({});
  //使用useDispatch将dispatch映射到组件中
  const dispatch = useDispatch();
  //将redux中的state映射到组件中
  //获取全部车友圈信息
  const circles = useSelector(state => state.circlesInfo.circles, shallowEqual);
  //获取全部帖子信息
  const posts = useSelector(state => state.posts, shallowEqual);

  //模拟生命周期进行副作用的操作
  //如果redux中有数据，查询当前circle信息直接使用，否则发请求获取circles信息
  useEffect(() => {
    //防止刷新页面车友圈信息显示为空
    if (circles.length === 0) {
      dispatch(getAsycCircles());
    }
  }, [dispatch, circles]);
  //模拟生命周期进行副作用的操作
  //如果redux中有数据，查询当前post信息直接使用，否则发请求获取posts信息
  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getAsycPosts());
      return;
    }
    //遍历帖子数组找到选中的帖子信息
    const checkpost = posts.find(post => {
      return post.id === pid * 1;
    });
    setCheckPost(checkpost);
  }, [dispatch, posts, pid]);

  //评论不为空显示的内容
  const hascomments = (
    <div className="comment-list">
      {/* 注意先判断checkpost.comments是否有值 */}
      {checkpost.comments
        ? checkpost.comments.map(comment => {
            return <CommentItem key={comment.id + 10} comment={comment} />;
          })
        : ""}
      <div className="bottom-info">没有更多了</div>
    </div>
  );
  //评论为空显示的内容
  const nullComment = (
    <div className="null-list">
      <img className="null-pic" src={nullimg} alt="" />
      <div className="null-info">抢先评论，这里需要你的态度</div>
    </div>
  );

  return (
    <>
      <Header title={POST} />
      <div className="post-wrap">
        <div className="posts">
          {/* 注意先判断checkpost是否为空对象 */}
          {JSON.stringify(checkpost) === "{}" ? (
            ""
          ) : (
            <PostItem
              noTo={true}
              key={checkpost.id}
              post={checkpost}
              circles={circles}
            />
          )}
        </div>
        <div className="comments-wrap">
          <header className="comment-title">评论</header>
          {/* 注意先判断checkpost.comments是否有值 */}
          {checkpost.comments
            ? checkpost.comments.length === 0
              ? nullComment
              : hascomments
            : ""}
        </div>
      </div>
      <IssueComment />
    </>
  );
});
