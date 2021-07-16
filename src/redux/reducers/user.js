import { SAVE_USER_INFO } from "../action_types";

//初始化用户登录信息
let user = {};

export default function userReducer(preState = user, action) {
  const { type, user } = action;
  let newState;
  switch (type) {
    case SAVE_USER_INFO:
      newState = { ...user };
      return newState;
    default:
      return preState;
  }
}
