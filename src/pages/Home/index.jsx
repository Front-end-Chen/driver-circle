import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import { Popover, Modal } from "antd-mobile";
import TabFooter from "@comp/TabFooter";
import Header from "@comp/Header";
import "./css/index.less";
import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.jpg";
import img3 from "../../assets/img/3.jpg";
import img4 from "../../assets/img/用户1.jpeg";
import img5 from "../../assets/img/用户2.jpeg";
import img6 from "../../assets/img/用户3.png";
import img7 from "../../assets/img/更多@2x.png";
// import img8 from "../../assets/img/图文.png";
// import img9 from "../../assets/img/问答.png";
import { HOME } from "@/common/title";
// const Item = Popover.Item;

export default memo(function Home(props) {
  //车友圈加入按钮标记
  const [isJoin, setIsJoin] = useState(false);
  //帖子关注按钮标记
  const [isFollow, setIsFollow] = useState(false);
  //帖子点赞按钮标记
  const [isSupport, setIsSupport] = useState(false);
  //模态框显示标记
  const [isVisible, setIsVisible] = useState(false);

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

  //发布按钮显示模态框回调
  const showModal = e => {
    e.preventDefault(); // 修复 Android 上点击穿透
    setIsVisible(true);
  };

  //模态框图文按钮的回调
  const issueImageAndText = () => {
    setIsVisible(false);
    props.history.push("/issueimageandtext");
  };

  //模态框问答按钮的回调
  const issueQuestion = () => {
    setIsVisible(false);
    props.history.push("/issuequestion");
  };

  return (
    <>
      <Header title={HOME} />
      <div className="home">
        <div className="hot-driver-circle">
          <header className="title">热门车友圈</header>
          <div className="circle-list">
            <div className="item">
              <Link to="/circledetail/132155460" className="circledetail-link">
                <header className="item-title">奥迪A4L车友圈</header>
                <div className="imglist">
                  <img src={img1} alt="" />
                  <img src={img2} alt="" />
                  <img src={img3} alt="" />
                </div>
              </Link>
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
              <Link to="/circledetail/132155460" className="circledetail-link">
                <header className="item-title">宝马5系车友圈</header>
                <div className="imglist">
                  <img src={img1} alt="" />
                  <img src={img2} alt="" />
                  <img src={img3} alt="" />
                </div>
              </Link>
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
              <Link to="/circledetail/132155460" className="circledetail-link">
                <header className="item-title">奥迪A4L车友圈</header>
                <div className="imglist">
                  <img src={img1} alt="" />
                  <img src={img2} alt="" />
                  <img src={img3} alt="" />
                </div>
              </Link>
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
              <button className="no-follow" onClick={followPostAuthor}>
                关注
              </button>
            </div>
            <Link to="/post/67709540" className="post-link">
              <p className="post-content">
                马自达昂克赛拉，过年回家需要一辆实用的汽车不仅要大气还要能拉货的，年货准备充足，过年了，再多的年货我也装得下
              </p>
              <div className="post-imglist">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
              </div>
            </Link>
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
              <button className="no-follow" onClick={e => followPostAuthor(e)}>
                关注
              </button>
            </div>
            <Link to="/post/67709540" className="post-link">
              <p className="post-content">
                马自达昂克赛拉，过年回家需要一辆实用的汽车不仅要大气还要能拉货的，年货准备充足，过年了，再多的年货我也装得下
              </p>
              <div className="post-imglist">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
              </div>
            </Link>
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
            <Link to="/post/67709540" className="post-link">
              <p className="post-content">
                马自达昂克赛拉，过年回家需要一辆实用的汽车不仅要大气还要能拉货的，年货准备充足，过年了，再多的年货我也装得下
              </p>
              <div className="post-imglist">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
              </div>
            </Link>
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
        <button className="issue" onClick={showModal}>
          发布
        </button>
      </div>
      <TabFooter />

      {/* 更佳方案 */}
      <Modal
        visible={isVisible}
        transparent
        className="modal-home"
        onClose={() => {
          setIsVisible(false);
        }}
      >
        <div className="issue-imageandtext" onClick={issueImageAndText}>
          图文
        </div>
        <div className="issue-question" onClick={issueQuestion}>
          问答
        </div>
      </Modal>

      {/* 方案1 */}
      {/* 
        //模态框显示隐藏标记
        const [visible, setVisible] = useState(false);

        //选中模态框选项的回调
        const onSelect = opt => {
          setVisible(false);
          props.history.push("/" + opt.props.value);
        };

        //处理显示隐藏的回调
        const handleVisibleChange = visible => {
          setVisible(visible);
        };
        <Popover
          mask
          placement="topRight"
          visible={visible}
          overlayStyle={{ fontWeight: "bold" }}
          overlay={[
            <Item
              key="1"
              value="issueimageandtext"
              icon={
                <img
                  style={{
                    width: "20px",
                    height: "20px",
                    marginBottom: "15px",
                  }}
                  src={img8}
                  alt=""
                />
              }
            >
              图文
            </Item>,
            <Item
              key="2"
              value="issuequestion"
              icon={
                <img
                  style={{
                    width: "20px",
                    height: "20px",
                    marginBottom: "15px",
                  }}
                  src={img9}
                  alt=""
                />
              }
            >
              问答
            </Item>,
          ]}
          align={{
            offset: [-20, -6],
          }}
          onVisibleChange={handleVisibleChange}
          onSelect={onSelect}
        >
          <button className="issue">发布</button>
        </Popover> */}
    </>
  );
});
