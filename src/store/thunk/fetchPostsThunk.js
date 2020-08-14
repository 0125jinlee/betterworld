import axios from "axios";

import * as fetchPostsAction from "../actions/fetchPostsAction";

export const fetchPosts = (token, userId) => {
  return (dispatch, getState) => {
    dispatch(fetchPostsAction.fetchPostsStart());
    const queryParams =
      "?auth=" + token + "&savedBy=userId&equalTo=" + userId + '"';
    axios
      .get("/posts.json" + queryParams)
      .then(res => {
        const fetchedPosts = [];
        for (let key in res.data) {
          fetchedPosts.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchPostsAction.fetchPostsSuccess(fetchedPosts));
      })
      .catch(err => {
        dispatch(fetchPostsAction.fetchPostsFail(err));
      });
  };
};
