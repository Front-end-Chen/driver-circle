import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import { Tabs } from "antd-mobile";
import Header from "@comp/Header";
import "./css/index.less";
import img1 from "../../assets/img/用户4.jpg";
import img2 from "../../assets/img/用户1.jpeg";
import img3 from "../../assets/img/用户2.jpeg";
import img4 from "../../assets/img/用户3.png";
import img5 from "../../assets/img/更多@2x.png";
import { HOME } from "@/common/title";

export default memo(function CircleDetail() {
  //车友圈加入按钮标记
  const [isJoin, setIsJoin] = useState(false);
  //tabs的index-控制选中的标签页以及选中的样式
  const [page, setPage] = useState(0);
  //帖子关注按钮标记
  const [isFollow, setIsFollow] = useState(false);
  //帖子点赞按钮标记
  const [isSupport, setIsSupport] = useState(false);
  //车友圈加入按钮的点击回调
  const joinCarCircle = e => {
    e.target.innerText = isJoin ? "加入" : "已加入";
    e.target.className = isJoin ? "no-join" : "join";
    setIsJoin(!isJoin);
  };

  //帖子关注按钮的回调
  const followPostAuthor = e => {
    e.target.innerText = isFollow ? "关注" : "已关注";
    e.target.className = isFollow ? "no-follow" : "follow";
    setIsFollow(!isFollow);
  };
  //帖子点赞按钮的回调
  const support = e => {
    e.target.className = isSupport ? "no-support" : "support";
    setIsSupport(!isSupport);
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
    setPage(1);
  };
  return (
    <>
      <Header title={HOME} />
      <div className="circle-detail-wrap">
        <div className="circle-profile">
          <div className="left">
            <header className="circle-name">奔驰C级车友圈</header>
            <div className="left-mid">
              <span className="circle-leader">圈主:</span>
              <img className="circle-leader-img" src={img1} alt="" />
              <div className="avatar-list">
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
              </div>
              <span className="diver-num">等30402个车友</span>
            </div>
            <span className="circle-intro text-nowrap">
              北京地区C级车友俱乐部，秉承交友，互帮互助的原则，共同打造良好的车友圈环境
            </span>
          </div>
          <div className="right">
            <button className="no-join" onClick={e => joinCarCircle(e)}>
              加入
            </button>
          </div>
        </div>
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
            <div className="item">
              <div className="head">
                <div className="left-info">
                  <img src={img4} alt="" />
                  <div className="post-head">
                    <span className="name">九牧林131</span>
                    <span className="post-time">6小时前</span>
                  </div>
                </div>
                <button className="no-follow" onClick={followPostAuthor}>
                  关注
                </button>
              </div>
              <p className="post-content">
                马自达昂克赛拉，过年回家需要一辆实用的汽车不仅要大气还要能拉货的，年货准备充足，过年了，再多的年货我也装得下
              </p>
              <div className="post-imglist">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
              </div>
              <div className="bottom">
                <div className="bottom-carcircle">奥迪A4L车友圈</div>
                <div className="bottom-handle">
                  <div className="comment-wrap">
                    <button className="comment"></button>
                    <span>699</span>
                  </div>
                  <div className="support-wrap">
                    <button className="no-support" onClick={support}></button>
                    <span>2314</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="head">
                <div className="left-info">
                  <img src={img4} alt="" />
                  <div className="post-head">
                    <span className="name">九牧林131</span>
                    <span className="post-time">6小时前</span>
                  </div>
                </div>
                <button className="no-follow" onClick={followPostAuthor}>
                  关注
                </button>
              </div>
              <p className="post-content">
                马自达昂克赛拉，过年回家需要一辆实用的汽车不仅要大气还要能拉货的，年货准备充足，过年了，再多的年货我也装得下
              </p>
              <div className="post-imglist">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
              </div>
              <div className="bottom">
                <div className="bottom-carcircle">奥迪A4L车友圈</div>
                <div className="bottom-handle">
                  <div className="comment-wrap">
                    <button className="comment"></button>
                    <span>699</span>
                  </div>
                  <div className="support-wrap">
                    <button className="no-support" onClick={support}></button>
                    <span>2314</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="head">
                <div className="left-info">
                  <img src={img4} alt="" />
                  <div className="post-head">
                    <span className="name">九牧林131</span>
                    <span className="post-time">6小时前</span>
                  </div>
                </div>
                <button className="no-follow" onClick={followPostAuthor}>
                  关注
                </button>
              </div>
              <p className="post-content">
                马自达昂克赛拉，过年回家需要一辆实用的汽车不仅要大气还要能拉货的，年货准备充足，过年了，再多的年货我也装得下
              </p>
              <div className="post-imglist">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
              </div>
              <div className="bottom">
                <div className="bottom-carcircle">奥迪A4L车友圈</div>
                <div className="bottom-handle">
                  <div className="comment-wrap">
                    <button className="comment"></button>
                    <span>699</span>
                  </div>
                  <div className="support-wrap">
                    <button className="no-support" onClick={support}></button>
                    <span>2314</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="posts">
          <div className="item">
              <div className="head">
                <div className="left-info">
                  <img src={img2} alt="" />
                  <div className="post-head">
                    <span className="name">九牧林131</span>
                    <span className="post-time">6小时前</span>
                  </div>
                </div>
                <button className="no-follow" onClick={followPostAuthor}>
                  关注
                </button>
              </div>
              <p className="post-content">
                马自达昂克赛拉，过年回家需要一辆实用的汽车不仅要大气还要能拉货的，年货准备充足，过年了，再多的年货我也装得下
              </p>
              <div className="post-imglist">
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img1} alt="" />
              </div>
              <div className="bottom">
                <div className="bottom-carcircle">奥迪A4L车友圈</div>
                <div className="bottom-handle">
                  <div className="comment-wrap">
                    <button className="comment"></button>
                    <span>699</span>
                  </div>
                  <div className="support-wrap">
                    <button className="no-support" onClick={support}></button>
                    <span>2314</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="head">
                <div className="left-info">
                  <img src={img4} alt="" />
                  <div className="post-head">
                    <span className="name">九牧林131</span>
                    <span className="post-time">6小时前</span>
                  </div>
                </div>
                <button className="no-follow" onClick={followPostAuthor}>
                  关注
                </button>
              </div>
              <p className="post-content">
                马自达昂克赛拉，过年回家需要一辆实用的汽车不仅要大气还要能拉货的，年货准备充足，过年了，再多的年货我也装得下
              </p>
              <div className="post-imglist">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
              </div>
              <div className="bottom">
                <div className="bottom-carcircle">奥迪A4L车友圈</div>
                <div className="bottom-handle">
                  <div className="comment-wrap">
                    <button className="comment"></button>
                    <span>699</span>
                  </div>
                  <div className="support-wrap">
                    <button className="no-support" onClick={support}></button>
                    <span>2314</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="head">
                <div className="left-info">
                  <img src={img4} alt="" />
                  <div className="post-head">
                    <span className="name">九牧林131</span>
                    <span className="post-time">6小时前</span>
                  </div>
                </div>
                <button className="no-follow" onClick={followPostAuthor}>
                  关注
                </button>
              </div>
              <p className="post-content">
                马自达昂克赛拉，过年回家需要一辆实用的汽车不仅要大气还要能拉货的，年货准备充足，过年了，再多的年货我也装得下
              </p>
              <div className="post-imglist">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
              </div>
              <div className="bottom">
                <div className="bottom-carcircle">奥迪A4L车友圈</div>
                <div className="bottom-handle">
                  <div className="comment-wrap">
                    <button className="comment"></button>
                    <span>699</span>
                  </div>
                  <div className="support-wrap">
                    <button className="no-support" onClick={support}></button>
                    <span>2314</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
      <div className="circle-detail-issue">
        <Link to="/issueimageandtext" className="issue-imageandtext">图文</Link>
        <Link to="/issuequestion" className="issue-question">问答</Link>
      </div>
    </>
  );
});
