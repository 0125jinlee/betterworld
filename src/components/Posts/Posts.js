import React from "react";
import { connect } from "react-redux";

import Post from "../Post/Post";
import "./Posts.css";

const posts = props => {
  if (Array.isArray(props.searchResult) && props.searchResult.length !== 0) {
    const updatedPosts = props.searchResult.map(post => {
      return (
        <Post
          charityName={post.charityName}
          ein={post.ein}
          orghunterUrl={post.url}
          website={post.website}
          city={post.city}
          state={post.state}
          zip={post.zipCode}
          category={post.category}
          score={post.score}
          acceptingDonations={post.acceptingDonations}
          missionStatement={post.missionStatement}
        />
      );
    });
    return (
      <div className="Results">
        <div className="ResultsTopic">
          SEARCH RESULTS FOR '{props.searchTerm.toUpperCase()}'
        </div>
        <div className="Posts">{updatedPosts}</div>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    searchTerm: state.searchReducer.searchTerm,
    searchResult: state.searchReducer.searchResult
  };
};

export default connect(mapStateToProps)(posts);
