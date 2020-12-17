import firebase from "firebase";

import * as savePostAction from "../actions/savePostAction";

export const savePost = (postData, uid) => {
  return dispatch => {
    dispatch(savePostAction.savePostStart());
    firebase
      .database()
      .ref(`users/${uid}/posts`)
      .set(postData);
  };
};
