import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utility";

const initialState = {
  posts: [],
  loading: false,
  saved: false
};

const saveInit = (state, action) => {
  return updateObject(state, { saved: false });
};

const savePostStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const savePostSuccess = (state, action) => {
  const newPost = updateObject(action.postData, { id: action.postId });
  return updateObject(state, {
    loading: false,
    purchased: true,
    posts: state.posts.concat(newPost)
  });
};

const savePostFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const savePostReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_INIT:
      return saveInit(state, action);
    case actionTypes.SAVE_POST_START:
      return savePostStart(state, action);
    case actionTypes.SAVE_POST_SUCCESS:
      return savePostSuccess(state, action);
    case actionTypes.SAVE_POST_FAIL:
      return savePostFail(state, action);
    default:
      return state;
  }
};

export default savePostReducer;
