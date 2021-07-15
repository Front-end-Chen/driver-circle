import { SAVE_CIRCLES, SAVE_CHECK_CIRCLE } from "../action_types";

//初始化车友圈信息
let circlesInfo = {
  circles: [], //车友圈信息
  checkcircle: {}, //选中的车友圈信息
};

export default function circlesReducer(preState = circlesInfo, action) {
  const { type, circles, checkcircle } = action;
  let newState;
  switch (type) {
    case SAVE_CIRCLES:
      newState = { ...preState, circles };
      return newState;
    case SAVE_CHECK_CIRCLE:
      newState = { ...preState, checkcircle };
      return newState;
    default:
      return preState;
  }
}
