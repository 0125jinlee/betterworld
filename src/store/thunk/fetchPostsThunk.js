import axios from "axios";

import * as fetchPostsActions from "../actions/fetchPostsAction";

export const fetchPosts = (token, userId) => {
  return (dispatch, getState) => {
    dispatch(fetchPostsActions.fetchPostsStart());
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
        dispatch(fetchPostsActions.fetchPostsSuccess(fetchedPosts));
      })
      .catch(err => {
        dispatch(fetchPostsActions.fetchPostsFail(err));
      });
  };
};
