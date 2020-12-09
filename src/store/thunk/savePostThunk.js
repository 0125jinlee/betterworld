import firebase from "../../firebase";

import * as savePostAction from "../actions/savePostAction";

export const savePost = (postData, token, uid) => {
  return dispatch => {
    dispatch(savePostAction.savePostStart());
    firebase
      .database()
      .ref(process.env.REACT_APP_FIREBASE_DATABASE_URL + "post/" + uid)
      .set(postData);
  };
};
