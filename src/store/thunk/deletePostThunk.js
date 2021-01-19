import firebase from "firebase";

import * as postActions from "../actions/postActions";

export const deletePost = (uid, ein) => {
  return dispatch => {
    dispatch(postActions.deletePostSuccess());
    firebase
      .database()
      .ref(`${uid}/posts/${ein}`)
      .remove();
  };
};
