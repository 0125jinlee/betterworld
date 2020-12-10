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

// firebase
//   .database()
//   .ref(`Users/${currentUser.uid}/posts`)
//   .set({
//     charityName: props.charityName,
//     ein: props.ein,
//     url: props.url,
//     website: props.website,
//     city: props.city,
//     state: props.state,
//     zip: props.zipCode,
//     category: props.category,
//     score: props.score,
//     acceptingDonations: props.acceptingDonations,
//     missionStatement: props.missionStatement,
//     alt: props.ein,
//     key: props.ein,
//   });
