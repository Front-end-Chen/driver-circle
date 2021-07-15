import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import TabFooter from "@comp/TabFooter";
import Header from "@comp/Header";
import CircleItem from "@comp/CircleItem";
import PostItem from "@comp/PostItem";
import IssueModal from "@comp/IssueModal";
import { getAsycCircles } from "@/redux/actions/circles";
import { getAsycPosts } from "@/redux/actions/posts";
import "./css/index.less";
import { HOME } from "@/common/title";

export default memo(function Home(props) {
  //使用useDispatch将dispatch映射到组件中
  const dispatch = useDispatch();
  //获取车友圈信息-模拟生命周期进行副作用的操作
  useEffect(() => {
    dispatch(getAsycCircles());
    dispatch(getAsycPosts());
  }, [dispatch]);
  //将redux中的state映射到组件中
  //获取redux中circlesInfo数据
  const circles = useSelector(state => state.circlesInfo.circles, shallowEqual);
  //获取redux中posts数据
  const posts = useSelector(state => state.posts, shallowEqual);

  return (
    <>
      {/* 头部 */}
      <Header title={HOME} />
      {/* 首页主体部分 */}
      <div className="home">
        {/* 热门车友圈 */}
        <div className="hot-driver-circle">
          <header className="title">热门车友圈</header>
          <div className="circle-list">
            {circles.map(circle => {
              return <CircleItem key={circle.id} circle={circle} />;
            })}
          </div>
        </div>
        {/* 帖子列表 */}
        <div className="posts">
          {posts.map(post => {
            return <PostItem key={post.id} post={post} circles={circles} />;
          })}
        </div>
      </div>
      {/* 底部导航栏 */}
      <TabFooter />
      {/* 发布类型选择模态框 */}
      <IssueModal />
    </>
  );
});
