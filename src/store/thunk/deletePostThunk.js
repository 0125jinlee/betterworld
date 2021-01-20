import firebase from "firebase";

export const deletePost = (uid, ein) => {
  return () => {
    firebase
      .database()
      .ref(`${uid}/posts/${ein}`)
      .remove();
  };
};
