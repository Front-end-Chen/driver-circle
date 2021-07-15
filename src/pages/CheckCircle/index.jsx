import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Header from "@comp/Header";
import CheckCircleItem from "@comp/CheckCircleItem";
import { getAsycCircles } from "@/redux/actions/circles";
import { CHECKCIRCLE } from "@/common/title";
import "./css/index.less";

export default memo(function CheckCircle() {
  //使用useDispatch将dispatch映射到组件中
  const dispatch = useDispatch();
  //将redux中的state映射到组件中
  const circles = useSelector(state => state.circlesInfo.circles, shallowEqual);
  //如果redux中有数据则直接使用，否则发请求获取-模拟生命周期进行副作用的操作
  useEffect(() => {
    if(circles.length === 0){
      dispatch(getAsycCircles())
    }
  }, [dispatch, circles]);

  return (
    <>
      <Header title={CHECKCIRCLE} />
      <div className="carcircle-list">
        {circles.map(circle => {
          return <CheckCircleItem key={circle.id} circle={circle} />;
        })}
      </div>
    </>
  );
});
