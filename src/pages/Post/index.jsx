import React, { memo, useState } from "react";
import Header from "@comp/Header";
import "./css/index.less";
import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.jpg";
import img3 from "../../assets/img/3.jpg";
import img4 from "../../assets/img/用户2.jpeg";
import img5 from "../../assets/img/mountain_pic@2x.png";
import { POST } from "@/common/title";

export default memo(function Post() {
  //帖子关注按钮标记
  const [isFollow, setIsFollow] = useState(false);
  //帖子点赞按钮标记
  const [isSupport, setIsSupport] = useState(false);
  //保存发布评论的input内容
  const [issueContent, setIssueContent] = useState("");

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

  //保存input输入内容
  const saveIssueContent = e => {
    setIssueContent(e.target.value);
  };

  return (
    <>
      <Header title={POST} />
      <div className="post-wrap">
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
                <div className="support-wrap">
                  <button className="no-support" onClick={support}></button>
                  <span>2314</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comment-wrap">
          <header className="comment-title">评论</header>
          <div className="comment-list">
            <div className="item">
              <img className="avatar" src={img4} alt="" />
              <div className="right-info">
                <header className="username">奥特曼打小怪兽</header>
                <p className="info-content">
                  这车是毒药哥自己改的吧，毒药好像香港有，国内好像没有，不知道在哪儿改的
                </p>
                <span className="info-date">06-29 11:30</span>
                <button className="reply-btn">回复</button>
              </div>
            </div>
            <div className="item">
              <img className="avatar" src={img4} alt="" />
              <div className="right-info">
                <header className="username">奥特曼打小怪兽</header>
                <p className="info-content">
                  这车是毒药哥自己改的吧，毒药好像香港有，国内好像没有，不知道在哪儿改的
                </p>
                <span className="info-date">06-29 11:30</span>
                <button className="reply-btn">回复</button>
                <p className="reply-info">
                  <span className="reply-username">奥特曼打小怪兽:</span>
                  首富的儿子用第二富的理财产品，健林不抽死他阿斯顿发生了大开发哈收到福利看哈收到了发哈水淀粉asldjfh
                </p>
              </div>
            </div>
            <div className="item">
              <img className="avatar" src={img4} alt="" />
              <div className="right-info">
                <header className="username">奥特曼打小怪兽</header>
                <p className="info-content">
                  这车是毒药哥自己改的吧，毒药好像香港有，国内好像没有，不知道在哪儿改的
                </p>
                <span className="info-date">06-29 11:30</span>
                <button className="reply-btn">回复</button>
                <p className="reply-info">
                  <span className="reply-username">奥特曼打小怪兽:</span>
                  首富的儿子用第二富的理财产品，健林不抽死他阿斯顿发生了大开发哈收到福利看哈收到了发哈水淀粉asldjfh
                </p>
              </div>
            </div>
            <div className="bottom-info">没有更多了</div>
          </div>
          <div className="null-list">
            <img className="null-pic" src={img5} alt="" />
            <div className="null-info">抢先评论，这里需要你的态度</div>
          </div>
        </div>
      </div>
      <div className="issue-comment-wrap">
        <input
          className="issue-content"
          type="text"
          onChange={saveIssueContent}
          placeholder="说点什么吧…"
          value={issueContent}
        />
        <button className="issue-comment">发布</button>
      </div>
    </>
  );
});
