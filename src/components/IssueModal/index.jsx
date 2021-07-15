import React, { memo, useState } from "react";
import { withRouter } from "react-router-dom";
import { Modal } from "antd-mobile";
import "./css/index.less";

function IssueModal(props) {
  //模态框显示标记
  const [isVisible, setIsVisible] = useState(false);

  //发布按钮显示模态框回调
  const showModal = e => {
    e.preventDefault(); // 修复 Android 上点击穿透
    setIsVisible(true);
  };

  //模态框图文按钮的回调
  const issueImageAndText = () => {
    setIsVisible(false);
    props.history.push("/issue/imgtext");
  };

  //模态框问答按钮的回调
  const issueQuestion = () => {
    setIsVisible(false);
    props.history.push("/issue/qa");
  };

  return (
    <>
      {/* 发布按钮 */}
      <button className="home-issue" onClick={showModal}>
        发布
      </button>
      {/* 2.更佳方案 */}
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

      {/* 1.方案1 */}
      {/* 
        import { Popover } from "antd-mobile";
        // const Item = Popover.Item;
        
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
}

export default withRouter(memo(IssueModal));