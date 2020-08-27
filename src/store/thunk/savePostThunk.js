import axios from "axios";

import * as savePostAction from "../actions/savePostAction";

export const savePost = (postData, token, userId) => {
  return dispatch => {
    dispatch(savePostAction.savePostStart());
    axios
      .post(
        "https://betterworld-aac7e.firebaseio.com/posts.json?auth=" + token,
        postData
      )
      .then(response => {
        dispatch(savePostAction.savePostSuccess(response.data.name, postData));
      })
      .catch(error => {
        dispatch(savePostAction.savePostFail(error));
      });
  };
};
