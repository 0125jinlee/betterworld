import firebase from "../../firebase";

import * as savePostAction from "../actions/savePostAction";

export const savePost = (postData, token, uid) => {
  return dispatch => {
    dispatch(savePostAction.savePostStart());
    firebase
      .database()
      .ref("post/" + uid)
      .set({
        post: postData
      });
  };
};
