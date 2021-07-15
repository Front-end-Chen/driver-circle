import { SAVE_POSTS } from "../action_types";

//初始化帖子信息
let posts = [];

export default function postsReducer(preState = posts, action) {
  const { type, posts } = action;
  let newState;
  switch (type) {
    case SAVE_POSTS:
      newState = [...posts];
      return newState;
    default:
      return preState;
  }
}
