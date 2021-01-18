import firebase from "firebase";

export const savePost = (postData, uid, ein) => {
  return () => {
    firebase
      .database()
      .ref(`${uid}/posts/${ein}`)
      .update(postData);
  };
};
