import firebase from "firebase";

export const fetchPosts = uid => {
  return () => {
    firebase
      .database()
      .ref(`${uid}/posts/`)
      .once("value");
  };
};
