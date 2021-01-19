import firebase from "firebase";

import * as postActions from "../actions/postActions";

export const savePost = (dispatch, postData, uid, ein) => {
  return dispatch => {
    dispatch(postActions.savePostSuccess());
    firebase
      .database()
      .ref(`${uid}/posts/${ein}`)
      .update(postData);
  };
};
