import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import "./css/index.less";

export default memo(function PostItem(props) {
  //帖子关注按钮标记
  const [isFollow, setIsFollow] = useState(false);
  //帖子点赞按钮标记
  const [isSupport, setIsSupport] = useState(false);
  //提取公共属性
  const { type, id, issueuserinfo, content, issuedate, cid } = props.post;

  //处理图文类型的帖子
  const handleImgtext = () => {
    const { supportnum, commentnum, imgs } = props.post;
    const circle = props.circles.find(circle => {
      return circle.id === cid * 1;
    });
    const toLink = (
      <Link to={`/post/${id}`} className="post-link">
        <p className="post-content">{content}</p>
        <div className="post-imglist">
          {imgs
            ? imgs.length === 0
              ? ""
              : imgs.map(img => {
                  return (
                    <img
                      className={imgs.length === 3 ? "img-three" : "img-two"}
                      key={img}
                      src={img}
                      alt=""
                    />
                  );
                })
            : ""}
        </div>
      </Link>
    );

    const noLink = (
      <div className="post-link">
        <p className="post-content">{content}</p>
        <div className="post-imglist">
          {imgs
            ? imgs.length === 0
              ? ""
              : imgs.map(img => {
                  return (
                    <img
                      className={imgs.length === 3 ? "img-three" : "img-two"}
                      key={img}
                      src={img}
                      alt=""
                    />
                  );
                })
            : ""}
        </div>
      </div>
    );

    return (
      <>
        {props.noTo ? noLink : toLink}
        <div className="bottom">
          <div className="bottom-carcircle">{circle.circlename}</div>
          <div className="bottom-handle">
            <div className="comment-wrap">
              <button className="comment"></button>
              <span>{commentnum}</span>
            </div>
            <div className="support-wrap">
              <button className="no-support" onClick={support}></button>
              <span>{supportnum}</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  //处理问答类型的帖子
  const handleQa = () => {
    const { replynum, solved, reply } = props.post;
    let qaSolved;
    if (solved) {
      const bestreply = reply.find(item => {
        return item.bestreply;
      });

      const showBestReply = (
        <div className="best-reply">
          <div className="head">
            <div className="left-info">
              <img src={bestreply.issueico} alt="" />
              <div className="post-head">
                <span className="name">{bestreply.username}</span>
                <span className="post-time">
                  {dayjs(bestreply.replydate).format("MM-DD HH:mm")}
                </span>
              </div>
            </div>
          </div>
          <p className="post-content">{bestreply.content}</p>
          <span className="best-reply-img"></span>
        </div>
      );

      qaSolved = (
        <>
          <div className="bottom-qa">
            <span className="solve">已解决</span>
            <span className="reply-num">{replynum} 回答</span>
          </div>
          {props.noShow ? "" : showBestReply}
        </>
      );
    }

    const qaNoSolved = (
      <div className="bottom-qa">
        <span className="reply-num">{replynum} 回答</span>
      </div>
    );

    const toLink = (
      <Link to={`/qa/${id}`} className="post-link">
        <p className="post-content">
          <strong>问题:</strong> {content}
        </p>
      </Link>
    );

    const noLink = (
      <div className="post-link">
        <p className="post-content">
          <strong>问题:</strong> {content}
        </p>
      </div>
    );

    return (
      <>
        {props.noTo ? noLink : toLink}
        {solved ? qaSolved : qaNoSolved}
      </>
    );
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

  return (
    <div className="item">
      <div className="head">
        <div className="left-info">
          <img src={issueuserinfo.ico} alt="" />
          <div className="post-head">
            <span className="name">{issueuserinfo.username}</span>
            <span className="post-time">
              {dayjs(issuedate).format("MM-DD HH:mm")}
            </span>
          </div>
        </div>
        <button className="no-follow" onClick={followPostAuthor}>
          关注
        </button>
      </div>
      {type === "imgtext" ? handleImgtext() : handleQa()}
    </div>
  );
});
