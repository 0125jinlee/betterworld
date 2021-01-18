import firebase from "firebase";

import * as fetchActions from "../actions/fetchActions";

export const fetchPosts = uid => {
  return dispatch => {
    firebase
      .database()
      .ref(`${uid}/posts/`)
      .on("value", snapshot => {
        const fetchedPosts = snapshot.val();
        if (fetchedPosts !== null && fetchedPosts !== undefined) {
          dispatch(fetchActions.fetchSuccess(fetchedPosts));
        }
      });
  };
};
