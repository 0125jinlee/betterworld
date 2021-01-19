import * as actionTypes from "./actionTypes";

export const savePostSuccess = () => {
  return {
    type: actionTypes.SAVE_POST_SUCCESS,
    savePostClicked: true
  };
};

export const deletePostSuccess = () => {
  return {
    type: actionTypes.DELETE_POST_SUCCESS,
    savePostClicked: false
  };
};
