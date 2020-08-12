import axios from "axios";

import * as savePostActions from "../actions/savePostAction";

export const savePostThunk = (token, userId) => {
  return dispatch => {
    dispatch(savePostActions.savePostStart());
    const queryParams =
      "?auth=" + token + "&savedBy=userId&equalTo=" + userId + '"';
    axios
      .get("/posts.json" + queryParams)
      .then(res => {
        const savedPosts = [];
        for (let key in res.data) {
          savedPosts.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(savePostActions.savePostSuccess(savedPosts));
      })
      .catch(err => {
        dispatch(savePostActions.savePostFail(err));
      });
  };
};
