import React, { memo } from "react";
import { Form, Input, Button } from "antd";
import { Toast } from 'antd-mobile';
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import Header from "@comp/Header";
import "./css/index.less";
const { Password } = Input;

export default memo(function Login(props) {
  //点击登录按钮的成功的回调
  //新版本自动触发表单验证validateFields
  const onFinish = values => {
    localStorage.setItem("isLogin", true);
    Toast.success("登录成功！", 1);
    setTimeout(() => {
      props.history.replace("/home")
    }, 600)
  };

  //点击登录按钮的失败的回调
  const onFinishFailed = ({ values, errorFields, outOfDate }) => {
    // message.error("表单输入有误，请检查！", 2);
  };

  return (
    <>
      <Header title="登录" to="/home" />
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

              // rules={[
              //   { required: true, message: "用户名必须输入！" },
              //   { max: 12, message: "用户名必须小于等于12位！" },
              //   { min: 4, message: "用户名必须大于等于4位！" },
              //   {
              //     pattern: /^\w+$/,
              //     message: "用户名必须是字母、数字、下划线组成！",
              //   },
              // ]}
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
              // rules={[
              //   { required: true, message: "用户名必须输入！" },
              //   { max: 12, message: "用户名必须小于等于12位！" },
              //   { min: 4, message: "用户名必须大于等于4位！" },
              //   {
              //     pattern: /^\w+$/,
              //     message: "用户名必须是字母、数字、下划线组成！",
              //   },
              // ]}
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
