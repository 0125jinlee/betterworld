import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utility";

const initialState = {
  savePostClicked: false
};

const savePostSuccess = (state, action) => {
  return updateObject(state, {
    savePostClicked: action.savePostClicked
  });
};

const deletePostSuccess = (state, action) => {
  return updateObject(state, {
    savePostClicked: action.deletePostClicked
  });
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_POST_SUCCESS:
      return savePostSuccess(state, action);
    case actionTypes.DELETE_POST_SUCCESS:
      return deletePostSuccess(state, action);
    default:
      return state;
  }
};

export default postReducer;
