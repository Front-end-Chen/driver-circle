import React, { memo, useState, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Tabs } from "antd-mobile";
import Header from "@comp/Header";
import PostItem from "@comp/PostItem";
import { getAsycCircles } from "@/redux/actions/circles";
import { getAsycPosts } from "@/redux/actions/posts";
import "./css/index.less";
import img2 from "../../assets/img/用户1.jpeg";
import img3 from "../../assets/img/用户2.jpeg";
import img4 from "../../assets/img/用户3.png";
import img5 from "../../assets/img/更多@2x.png";
import { HOME } from "@/common/title";

export default memo(function CircleDetail(props) {
  //车友圈加入按钮标记
  const [isJoin, setIsJoin] = useState(false);
  //tabs的index-控制选中的标签页以及选中的样式
  const [page, setPage] = useState(0);
  //当前circle信息
  const [circle, setCircle] = useState({});
  //按热门排序-保存当前车友圈的全部posts信息
  const [curCirclePosts, setCurCirclePosts] = useState([]);
  //按时间排序-保存当前车友圈的全部posts信息
  const [curCirclePostsTime, setCurCirclePostsTime] = useState([]);

  //获取路由params参数-传递过来的车友圈IDcid
  const { cid } = props.match.params;

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
      return;
    }
    //遍历车友圈数组找到选中的车友圈信息
    let checkcircle = circles.find(circle => {
      return circle.id === cid * 1;
    });
    //缓存当前circle信息
    setCircle(checkcircle);
  }, [dispatch, circles, cid]);

  //模拟生命周期进行副作用的操作
  //如果redux中有数据，查询当前车友圈全部post信息直接使用，否则发请求获取posts信息
  useEffect(() => {
    //防止刷新页面帖子显示为空
    if (posts.length === 0) {
      dispatch(getAsycPosts());
      return;
    }
    //找出当前车圈的全部帖子
    let circlePosts = posts.filter(post => {
      return post.cid === cid * 1;
    });
    //只保存热门排序的数据
    setCurCirclePosts(circlePosts.sort((a, b) => {
      let anum = a.replynum ? a.replynum: a.commentnum
      let bnum = b.replynum ? b.replynum: b.commentnum
      return bnum - anum
    }));
  }, [dispatch, posts, cid]);

  const { circlename, leaderico, divernum, intro } = circle;

  //车友圈加入按钮的点击回调
  const joinCarCircle = e => {
    e.target.innerText = isJoin ? "加入" : "已加入";
    e.target.className = isJoin ? "no-join" : "join";
    setIsJoin(!isJoin);
  };

  //tabs标签头数据
  const tabs = [{ title: "热门" }, { title: "最新" }];
  //自定义tabs的tarbar
  const tabBar = tab => {
    return (
      <div className="tab-bar">
        <button
          className={tab.activeTab ? "no-active" : "active"}
          onClick={tabHot}
        >
          热门
        </button>
        <button
          className={tab.activeTab ? "active" : "no-active"}
          onClick={tabNew}
        >
          最新
        </button>
      </div>
    );
  };
  //热门标签点击回调
  const tabHot = e => {
    if (!page) return;
    setPage(0);
  };
  //最新标签点击回调
  const tabNew = e => {
    if (page) return;
    let CirclePosts = [...curCirclePosts]
    setCurCirclePostsTime([...CirclePosts.sort((a, b) => b.issuedate - a.issuedate)])
    setPage(1);
  };

  return (
    <>
      {/* 头部 */}
      <Header title={HOME} />
      {/* 主体部分 */}
      <div className="circle-detail-wrap">
        {/* 车友圈简介 */}
        <div className="circle-profile">
          <div className="left">
            <header className="circle-name">{circlename}</header>
            <div className="left-mid">
              <span className="circle-leader">圈主:</span>
              <img className="circle-leader-img" src={leaderico} alt="" />
              <div className="avatar-list">
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
              </div>
              <span className="diver-num">等{divernum}个车友</span>
            </div>
            <span className="circle-intro text-nowrap">{intro}</span>
          </div>
          <div className="right">
            <button className="no-join" onClick={e => joinCarCircle(e)}>
              加入
            </button>
          </div>
        </div>
        {/* 帖子标签栏切换-热门排序/最新排序 */}
        <Tabs
          tabs={tabs}
          renderTabBar={tab => tabBar(tab)}
          initialPage={0}
          page={page}
          swipeable={false}
          useOnPan={false}
          animated={false}
        >
          <div className="posts">
            {curCirclePosts
              .map(post => {
                return <PostItem key={post.id} post={post} circles={circles} />;
              })}
          </div>
          <div className="posts">
            {curCirclePostsTime
              .map(post => {
                return (
                  <PostItem key={post.id + 10} post={post} circles={circles} />
                );
              })}
          </div>
        </Tabs>
      </div>
      {/* 底部发布跳转按钮 */}
      <div className="circle-detail-issue">
        <Link to="/issue/imgtext" className="issue-imageandtext">
          图文
        </Link>
        <Link to="/issue/qa" className="issue-question">
          问答
        </Link>
      </div>
    </>
  );
});
