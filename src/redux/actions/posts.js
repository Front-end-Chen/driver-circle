import { SAVE_POSTS } from "../action_types";
import { getPosts } from "@/api";

//保存首页全部posts的action
export const savePosts = posts => ({
  type: SAVE_POSTS,
  posts,
});

//获取首页全部posts的异步action
export const getAsycPosts = () => {
  return dispatch => {
    getPosts().then(result => {
      dispatch(savePosts(result.reverse()));
    });
  };
};
