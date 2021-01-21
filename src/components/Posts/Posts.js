import React from "react";
import { connect } from "react-redux";
import { displayImage } from "../../utils/utility";

import Post from "../Post/Post";
import "./Posts.css";

const posts = props => {
  if (Array.isArray(props.searchResult) && props.searchResult.length !== 0) {
    const updatedPosts = props.searchResult.map(post => {
      return (
        <Post
          charityName={post.charityName}
          ein={post.ein}
          url={post.url}
          website={post.website}
          city={post.city}
          state={post.state}
          zip={post.zipCode}
          category={post.category}
          missionStatement={post.missionStatement}
          src={`/PostPictures/${displayImage([], 0) + ".jpg"}`}
          alt={post.ein}
          key={post.ein}
          savePostClicked={props.savePostClicked}
        />
      );
    });
    return (
      <div className="Results">
        <div className="ResultsTopic">
          {props.searchCounter > 1 ? (
            <span>
              <h4>SEARCH RESULTS FOR "{props.searchTerm.toUpperCase()}"</h4>
            </span>
          ) : (
            <span>
              <h4>MOST TRENDING</h4>
              <h1>
                Donations for{" "}
                {props.searchTerm.charAt(0).toUpperCase() +
                  props.searchTerm.slice(1)}
              </h1>
            </span>
          )}
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
    searchCounter: state.searchReducer.searchCounter,
    searchResult: state.searchReducer.searchResult
  };
};

export default connect(mapStateToProps)(posts);
