import React, { useEffect } from "react";
import { connect } from "react-redux";
import { displayImage } from "../../utils/utility";

import Post from "../Post/Post";
import * as actions from "../../store/actions/index";
import "./DisplaySavedPosts.css";

const DisplaySavedPosts = props => {
  useEffect(() => {
    if (props.isAuthenticated) {
      props.fetchPosts(localStorage.getItem("userId"));
    }
  }, [props.isAuthenticated, props.fetchedPosts]);

  if (props.fetchedPosts) {
    const fetchedPosts = Object.keys(props.fetchedPosts).map(einKey => {
      return (
        <Post
          charityName={props.fetchedPosts[einKey].charityName}
          ein={props.fetchedPosts[einKey].ein}
          url={props.fetchedPosts[einKey].url}
          website={props.fetchedPosts[einKey].website}
          city={props.fetchedPosts[einKey].city}
          state={props.fetchedPosts[einKey].state}
          zip={props.fetchedPosts[einKey].zipCode}
          category={props.fetchedPosts[einKey].category}
          missionStatement={props.fetchedPosts[einKey].missionStatement}
          src={`/PostPictures/${displayImage([], 0) + ".jpg"}`}
          alt={props.fetchedPosts[einKey].ein}
          key={props.fetchedPosts[einKey].ein}
          // savePostClicked={props.savePostClicked}
        />
      );
    });
    return <div className="FetchedPosts">{fetchedPosts}</div>;
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null,
    fetchedPosts: state.fetchReducer.fetchedPosts,
    savePostClicked: state.postReducer.savePostClicked
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: uid => dispatch(actions.fetchPosts(uid))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySavedPosts);
