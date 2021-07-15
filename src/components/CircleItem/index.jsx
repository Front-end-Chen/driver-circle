import React, { memo, useState } from "react";
import { Link } from "react-router-dom";
import "./css/index.less";
import img4 from "../../assets/img/用户1.jpeg";
import img5 from "../../assets/img/用户2.jpeg";
import img6 from "../../assets/img/用户3.png";
import img7 from "../../assets/img/更多@2x.png";

export default memo(function CircleItem(props) {
  const { id, circlename, previewimgs, divernum } = props.circle;
  //车友圈加入按钮标记
  const [isJoin, setIsJoin] = useState(false);

  //车友圈加入按钮的点击回调
  const joinCarCircle = e => {
    e.target.innerText = isJoin ? "加入" : "已加入";
    e.target.className = isJoin ? "no-join" : "join";
    setIsJoin(!isJoin);
  };

  return (
    <div className="item">
      <Link to={`/circledetail/${id}`} className="circledetail-link">
        <header className="item-title">{circlename}</header>
        <div className="imglist">
          {previewimgs.map(img => {
            return (
              <img
                className={previewimgs.length === 3 ? "img-three" : "img-two"}
                key={img}
                src={img}
                alt=""
              />
            );
          })}
        </div>
      </Link>
      <div className="info">
        <div className="head-imglist">
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
        </div>
        <span className="num">{divernum}位活跃车友</span>
        <button className="no-join" onClick={e => joinCarCircle(e)}>
          加入
        </button>
      </div>
    </div>
  );
});
