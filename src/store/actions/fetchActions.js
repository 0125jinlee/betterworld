import * as actionTypes from "./actionTypes";

export const fetchSuccess = fetchedPosts => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    fetchedPosts: fetchedPosts
  };
};
