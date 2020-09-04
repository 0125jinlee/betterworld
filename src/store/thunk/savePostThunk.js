import axios from "axios";

import * as savePostAction from "../actions/savePostAction";

export const savePost = (postData, token, userId) => {
  return dispatch => {
    dispatch(savePostAction.savePostStart());
    const queryParams = "?auth=" + token + "&savedBy=userId&equalTo=" + userId;
    axios
      .post(
        "https://betterworld-aac7e.firebaseio.com/posts.json" + queryParams,
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
