import { SAVE_CIRCLES, SAVE_CHECK_CIRCLE } from "../action_types";
import { getCircles } from "@/api";

//保存circles的action
export const saveCircles = circles => ({
  type: SAVE_CIRCLES,
  circles,
});

//获取circles的异步action
export const getAsycCircles = () => {
  return dispatch => {
    getCircles().then(result => {
      dispatch(saveCircles(result));
    });
  };
};

//保存circles的action
export const saveCheckCircle = checkcircle => ({
  type: SAVE_CHECK_CIRCLE,
  checkcircle,
});
