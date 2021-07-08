import React, { memo, useState } from "react";
import Header from "@comp/Header";
import "./css/index.less";
import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.jpg";
import img3 from "../../assets/img/3.jpg";
import img4 from "../../assets/img/用户1.jpeg";
import img5 from "../../assets/img/用户2.jpeg";
import img6 from "../../assets/img/用户3.png";
import img7 from "../../assets/img/更多@2x.png";

export default memo(function Home() {
  //车友圈加入按钮标记
  const [isJoin, setIsJoin] = useState(false);
  //帖子关注按钮标记
  const [isFollow, setIsFollow] = useState(false);

  //车友圈加入按钮的点击回调
  const joinCarCircle = e => {
    e.target.innerText = isJoin ? "加入" : "已加入";
    e.target.className = isJoin ? "no-join" : "join";
    setIsJoin(!isJoin);
  };

  //帖子关注按钮的点击回调
  const followPostAuthor = e => {
    e.target.innerText = isFollow ? "关注" : "已关注";
    e.target.className = isFollow ? "no-follow" : "follow";
    setIsFollow(!isFollow);
  };

  return (
    <>
      <Header title="车友圈" />
      <div className="home">
        <div className="hot-driver-circle">
          <header className="title">热门车友圈</header>
          <div className="circle-list">
            <div className="item">
              <header className="item-title">奥迪A4L车友圈</header>
              <div className="imglist">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
              </div>
              <div className="info">
                <div className="head-imglist">
                  <img src={img4} alt="" />
                  <img src={img5} alt="" />
                  <img src={img6} alt="" />
                  <img src={img7} alt="" />
                </div>
                <span className="sum">3216位活跃车友</span>
                <button className="no-join" onClick={e => joinCarCircle(e)}>
                  加入
                </button>
              </div>
            </div>
            <div className="item">
              <header className="item-title">宝马5系车友圈</header>
              <div className="imglist">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
              </div>
              <div className="info">
                <div className="head-imglist">
                  <img src={img4} alt="" />
                  <img src={img5} alt="" />
                  <img src={img6} alt="" />
                  <img src={img7} alt="" />
                </div>
                <span className="sum">3216位活跃车友</span>
                <button className="no-join" onClick={e => joinCarCircle(e)}>
                  加入
                </button>
              </div>
            </div>
            <div className="item">
              <header className="item-title">奥迪A4L车友圈</header>
              <div className="imglist">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
              </div>
              <div className="info">
                <div className="head-imglist">
                  <img src={img4} alt="" />
                  <img src={img5} alt="" />
                  <img src={img6} alt="" />
                  <img src={img7} alt="" />
                </div>
                <span className="sum">3216位活跃车友</span>
                <button className="no-join" onClick={e => joinCarCircle(e)}>
                  加入
                </button>
              </div>
            </div>
          </div>
        </div>
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
              <button className="no-follow" onClick={e => followPostAuthor(e)}>
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
                  <button className="support"></button>
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
              <button className="no-follow" onClick={e => followPostAuthor(e)}>
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
                  <button className="support"></button>
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
              <button className="no-follow" onClick={e => followPostAuthor(e)}>
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
                  <button className="support"></button>
                  <span>2314</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
