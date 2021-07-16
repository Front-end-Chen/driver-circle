import React, { memo, useState, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Header from "@comp/Header";
import PostItem from "@comp/PostItem";
import QaIssueBar from "@comp/QaIssueBar";
import QaCommentItem from "@comp/QaCommentItem";
import { getAsycPosts } from "@/redux/actions/posts";
import "./css/index.less";
import nullImg from "../../assets/img/mountain_pic@2x.png";
import { QA } from "@/common/title";

export default memo(function QuestionsAndAnswers(props) {
  //获取路由params参数-传递过来的问答IDqid
  const { qid } = props.match.params;
  //缓存选中的问答
  const [checkpost, setCheckPost] = useState({});
  //使用useDispatch将dispatch映射到组件中
  const dispatch = useDispatch();
  //将redux中的state映射到组件中
  //获取全部帖子信息
  const posts = useSelector(state => state.posts, shallowEqual);

  //模拟生命周期进行副作用的操作
  //如果redux中有数据，查询当前post信息直接使用，否则发请求获取posts信息
  useEffect(() => {
    if (posts.length === 0) {
      dispatch(getAsycPosts());
      return;
    }
    //遍历帖子数组找到选中的帖子信息
    const checkpost = posts.find(post => {
      return post.id === qid * 1;
    });
    setCheckPost(checkpost);
  }, [dispatch, posts, qid]);

  //处理回答是否有最佳答案
  const hasReply = () => {
    if (checkpost.solved) {
      return (
        <div className="reply-list">
          {/* 注意先判断checkpost.reply是否有值 */}
          {checkpost.reply
            ? checkpost.reply.map(re => {
                return (
                  <QaCommentItem isSolved={true} key={re.id + 10} reply={re} />
                );
              })
            : ""}
          <div className="bottom-info">没有更多了</div>
        </div>
      );
    }

    return (
      <div className="reply-list">
        {/* 注意先判断checkpost.reply是否有值 */}
        {checkpost.reply
          ? checkpost.reply.map(re => {
              return <QaCommentItem key={re.id + 10} reply={re} />;
            })
          : ""}
        <div className="bottom-info">没有更多了</div>
      </div>
    );
  };

  const nullReply = (
    <div className="null-list">
      <img className="null-pic" src={nullImg} alt="" />
      <div className="null-info">暂无回答</div>
    </div>
  );

  return (
    <>
      <Header title={QA} />
      <div className="qa-wrap">
        <div className="posts">
          {/* 注意先判断checkpost是否为空对象 */}
          {JSON.stringify(checkpost) === "{}" ? (
            ""
          ) : (
            <PostItem
              noShow={true}
              noTo={true}
              key={checkpost.id}
              post={checkpost}
            />
          )}
        </div>
        <div className="reply-wrap">
          <header className="comment-title">
            回答（{checkpost.reply ? checkpost.reply.length : ""}）
          </header>
          {/* 注意先判断checkpost.reply是否有值 */}
          {JSON.stringify(checkpost) !== "{}"
            ? checkpost.reply.length === 0
              ? nullReply
              : hasReply()
            : ""}
        </div>
      </div>
      <QaIssueBar />
    </>
  );
});
