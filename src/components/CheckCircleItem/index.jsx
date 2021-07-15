import React, { memo } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveCheckCircle } from "@/redux/actions/circles";
import "./css/index.less";

function CheckCircleItem(props) {
  const { circlename, carico, divernum, postsnum } = props.circle;

  //使用useDispatch将dispatch映射到组件中
  const dispatch = useDispatch();
  const checkCircle = e => {
    dispatch(saveCheckCircle(props.circle))
    props.history.goBack()
  };
  return (
    <div className="item" onClick={checkCircle}>
      <img className="car-pic" src={carico} alt="" />
      <div className="right-info">
        <header className="car-name">{circlename}</header>
        <span className="people-num">{divernum}人加入</span>
        <span className="posts-num">{postsnum}条内容</span>
      </div>
    </div>
  );
};

export default withRouter(memo(CheckCircleItem));
