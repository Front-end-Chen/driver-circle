import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Header from "@comp/Header";
import MyCommentItem from "@comp/MyCommentItem";
import { getAsycUserInfo } from "@/redux/actions/user";
import "./css/index.less";
import { MYCOMMENT } from "@/common/title";
import nullImg from "../../assets/img/empty_pic@2x.png";

export default memo(function MyComment() {
  const dispatch = useDispatch();
  //从redux中获取user信息
  let user = useSelector(state => state.user, shallowEqual);

  useEffect(() => {
    //刷新丢失user信息，从localStorage中获取username发请求查询
    if (JSON.stringify(user) === "{}") {
      let username = localStorage.getItem("username");
      dispatch(getAsycUserInfo(username));
    }
  }, [dispatch, user]);

  //防闪屏同时避免报错，为空直接返回空元素
  if (JSON.stringify(user) === "{}") return <></>;

  const hasComment = (
    <div className="info-list">
      {user.commentposts.map(comment => {
        return (
          <MyCommentItem
            key={comment.commentdate}
            comment={comment}
            ico={user.ico}
            username={user.username}
          />
        );
      })}
      <div className="bottom-info">已显示全部内容</div>
    </div>
  );

  const nullComment = (
    <div className="null-list">
      <img className="null-pic" src={nullImg} alt="" />
      <div className="null-info">暂无内容</div>
    </div>
  );

  return (
    <>
      <Header title={MYCOMMENT} />
      {user.commentposts.length === 0 ? nullComment : hasComment}
    </>
  );
});
