import React from "react";
import { connect } from "react-redux";
import { displayImage } from "../../utils/utility";

import Post from "../Post/Post";
import "./DisplaySavedPosts.css";

const DisplaySavedPosts = props => {
  const { fetchedPosts } = props;

  if (fetchedPosts) {
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
          saved={props.fetchedPosts[einKey].saved}
        />
      );
    });
    return (
      <div className="FetchedPosts">
        <h1>Saved Donations</h1>
        {fetchedPosts}
      </div>
    );
  } else {
    return (
      <div className="NoPosts">
        <h1 style={{ textAlign: "center" }}>You did not save any charities!</h1>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null,
    fetchedPosts: state.fetchReducer.fetchedPosts
  };
};

export default connect(mapStateToProps)(DisplaySavedPosts);
