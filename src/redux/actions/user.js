import { SAVE_USER_INFO } from "../action_types";
import { getUserInfo } from "@/api";

//保存user的action
export const saveUserInfo = user => ({
  type: SAVE_USER_INFO,
  user,
});

//获取用户信息的异步action
export const getAsycUserInfo = (username) => {
  return dispatch => {
    getUserInfo(username).then(result => {
      dispatch(saveUserInfo(result[0]));
    });
  };
};
