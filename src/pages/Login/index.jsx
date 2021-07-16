import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";
import { Toast } from "antd-mobile";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Header from "@comp/Header";
import { getUserInfo, postUserInfo } from "@/api";
import { saveUserInfo } from "@/redux/actions/user";
import "./css/index.less";
import { LOGIN } from "@/common/title";
const { Password } = Input;

export default memo(function Login(props) {
  //使用useDispatch将dispatch映射到组件中
  const dispatch = useDispatch();
  //点击登录按钮的成功的回调
  //新版本自动触发表单验证validateFields
  const onFinish = async values => {
    //模拟验证登录与注册
    const result = await getUserInfo(values.username);
    //有用户信息则判断密码是否正确
    if (result.length) {
      const { password, username } = result[0];
      if (values.password === password) {
        dispatch(saveUserInfo(result[0]));
        localStorage.setItem("isLogin", true);
        localStorage.setItem("username", username);
        Toast.success("登录成功！", 1.5);
        setTimeout(() => {
          props.history.replace("/home");
        }, 550);
      } else {
        Toast.fail("用户名或密码错误！", 1.5);
      }
      //无用户信息则注册
    } else {
      let ico =
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2F50%2Fv2-aca139469bcdde6fb779444ea25c49b5_hd.jpg&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628994114&t=50cec264cda20cc8ef90aca9845216ce";
      let profile =
        "简介：这个人很懒，什么都没写~这个人很懒，什么都没写~什么都没写~";
      let joincirclesid = [],
        commentposts = [],
        issueposts = [];
      let user = { ...values, ico, profile, joincirclesid, commentposts, issueposts };
      console.log(user);
      const result = await postUserInfo(user);
      dispatch(saveUserInfo(result));
      localStorage.setItem("isLogin", true);
      localStorage.setItem("username", values.username);
      Toast.success("登录成功！", 1.5);
      setTimeout(() => {
        props.history.replace("/home");
      }, 550);
    }
  };

  //点击登录按钮的失败的回调
  const onFinishFailed = ({ values, errorFields, outOfDate }) => {
    Toast.fail("输入有误，请检查！", 1.5);
  };

  return (
    <>
      <Header title={LOGIN} to="/home" />
      <div className="login-wrap">
        <div className="title">登录车友圈</div>
        {/* <div> */}
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="username"
            className="login-input-wrap"
            /*
                定义用户名校验规则---“声明式验证”，即：自己不去做实际判断，只是声明
                    用户名/密码的的合法性要求:
                        1). 必须输入
                        2). 必须大于等于4位
                        3). 必须小于等于12位
                        4). 必须是字母、数字、下划线组成
                */

            rules={[
              { required: true, message: "用户名必须输入！" },
              { max: 12, message: "用户名必须小于等于12位！" },
              { min: 4, message: "用户名必须大于等于4位！" },
            ]}
          >
            {/* UserOutlined为不同图标名 */}
            {/* style={{ color: 'rgba(0,0,0,.25)'}}调整图标的颜色 */}
            <Input
              placeholder="请输入您的用户名"
              allowClear
              bordered={false}
              autoComplete="off"
            />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            className="login-input-wrap"
            rules={[
              { required: true, message: "密码必须输入！" },
              { max: 12, message: "密码必须小于等于12位！" },
              { min: 4, message: "密码必须大于等于4位！" },
              {
                pattern: /^\w+$/,
                message: "密码必须是字母、数字、下划线组成！",
              },
            ]}
          >
            <Password
              iconRender={visible =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              placeholder="请输入您的密码"
              bordered={false}
            />
          </Form.Item>
          <Form.Item className="login-form-button-item">
            <Button
              block
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
        {/* </div> */}
        <div className="tooltip">未注册用户会自动注册并登录</div>
      </div>
    </>
  );
});
