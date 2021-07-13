import React, { memo, useState } from "react";
import Header from "@comp/Header";
import "./css/index.less";
import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.jpg";
import img3 from "../../assets/img/3.jpg";
import img4 from "../../assets/img/用户2.jpeg";
import img5 from "../../assets/img/mountain_pic@2x.png";
import img6 from "../../assets/img/用户4.jpg";
import { QA } from "@/common/title";
import { Link } from "react-router-dom";

export default memo(function QuestionsAndAnswers() {
  //帖子关注按钮标记
  const [isFollow, setIsFollow] = useState(false);

  //帖子关注按钮的回调
  const followPostAuthor = e => {
    e.target.innerText = isFollow ? "关注" : "已关注";
    e.target.className = isFollow ? "no-follow" : "follow";
    setIsFollow(!isFollow);
  };

  return (
    <>
      <Header title={QA} />
      <div className="qa-wrap">
        <div className="post">
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
            <p className="post-content">宝马5系有买了一周的感受吗～</p>
            <div className="post-imglist">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
        <div className="reply-wrap">
          <header className="comment-title">回答（3）</header>
          <div className="comment-list">
            <div className="item">
              <div className="head">
                <div className="left-info">
                  <img src={img6} alt="" />
                  <div className="post-head">
                    <span className="name">九牧林131</span>
                    <span className="post-time">6小时前</span>
                  </div>
                </div>
                <button className="no-follow">采纳答案</button>
              </div>
              <p className="post-content">
                #内饰豪华
                1.就是快，动力随叫随到的电动特点，再者地板电就是能爆发。2.长安cs85内饰官图曝光，为长安旗下轿跑风格全新中型suv，黑红撞色内饰。
              </p>
            </div>
            <div className="item">
              <div className="head">
                <div className="left-info">
                  <img src={img6} alt="" />
                  <div className="post-head">
                    <span className="name">九牧林131</span>
                    <span className="post-time">6小时前</span>
                  </div>
                </div>
                <button className="no-follow">采纳答案</button>
              </div>
              <p className="post-content">
                #内饰豪华
                1.就是快，动力随叫随到的电动特点，再者地板电就是能爆发。2.长安cs85内饰官图曝光，为长安旗下轿跑风格全新中型suv，黑红撞色内饰。
              </p>
            </div>
            <div className="item">
              <div className="head">
                <div className="left-info">
                  <img src={img6} alt="" />
                  <div className="post-head">
                    <span className="name">九牧林131</span>
                    <span className="post-time">6小时前</span>
                  </div>
                </div>
                <button className="no-follow">采纳答案</button>
              </div>
              <p className="post-content">
                #内饰豪华
                1.就是快，动力随叫随到的电动特点，再者地板电就是能爆发。2.长安cs85内饰官图曝光，为长安旗下轿跑风格全新中型suv，黑红撞色内饰。
              </p>
            </div>
            <div className="bottom-info">没有更多了</div>
          </div>
          <div className="null-list">
            <img className="null-pic" src={img5} alt="" />
            <div className="null-info">暂无回答</div>
          </div>
        </div>
      </div>
      <div className="qa-bottom">
        <Link to="/issue/qa" className="issue">
          <span className="issue-img"></span>
          <span>我要提问</span>
        </Link>
        <div className="reply">
          <span className="reply-img"></span>
          <span>写回答</span>
        </div>
      </div>
    </>
  );
});
