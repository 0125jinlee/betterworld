import * as actionTypes from "./actionTypes";

export const saveInit = () => {
  return {
    type: actionTypes.SAVE_INIT
  };
};

export const savePostStart = () => {
  return {
    type: actionTypes.SAVE_POST_START
  };
};

export const savePostSuccess = (id, postData) => {
  return {
    type: actionTypes.SAVE_POST_SUCCESS,
    postId: id,
    postData: postData
  };
};

export const savePostFail = error => {
  return {
    type: actionTypes.SAVE_POST_FAIL,
    error: error
  };
};
