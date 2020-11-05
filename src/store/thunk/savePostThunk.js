import axios from "axios";

import * as savePostAction from "../actions/savePostAction";

export const savePost = (postData, token, userId) => {
  const link = process.env.REACT_APP_FIREBASE_DATABASE_URL + "users/$<uid>";

  return dispatch => {
    dispatch(savePostAction.savePostStart());
    axios
      .post(link, postData)
      .then(response => {
        dispatch(savePostAction.savePostSuccess(response.data.name, postData));
      })
      .catch(error => {
        dispatch(savePostAction.savePostFail(error));
      });
  };
};
