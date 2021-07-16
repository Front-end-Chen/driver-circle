/* 
  1.项目中所有请求由该文件发出
  2.以后每当发请求之前，都要在该文件里添加一个方法
*/
//引入自定义的ajax
import request from "./request";

//获取车友圈基本信息
export const getCircles = () => {
  return request.get("/circles");
};

//获取首页全部帖子信息
export const getPosts = () => {
  return request.get("/posts");
};

//获取某个车友圈的全部帖子
export const getPostsByCID = cid => {
  return request.get("/posts", { params: { cid } });
};

//发布帖子
export const issuePost = post => {
  return request.post("/posts", { post });
};

//模拟登录
export const getUserInfo = username => {
  return request.get("/users", { params: { username } });
};

//模拟注册
export const postUserInfo = user => {
  return request.post("/users", { user });
};
