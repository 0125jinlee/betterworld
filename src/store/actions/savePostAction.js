import * as actionTypes from "./actionTypes";

export const savePostSuccess = posts => {
  return {
    type: actionTypes.SAVE_POST_SUCCESS,
    posts: posts
  };
};

export const savePostFail = error => {
  return {
    type: actionTypes.SAVE_POST_FAIL,
    error: error
  };
};

export const savePostStart = () => {
  return {
    type: actionTypes.SAVE_POST_START
  };
};
