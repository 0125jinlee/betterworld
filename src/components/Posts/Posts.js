import React from "react";
import { connect } from "react-redux";

import Post from "../Post/Post";
import "./Posts.css";

const posts = props => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  function displayImage() {
    let num = Math.ceil(Math.random() * 13);
    if (arr === []) {
      arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
      displayImage();
    }
    if (arr.includes(num) && num <= 13 && num >= 1) {
      arr.splice(arr.indexOf(num), 1);
      return num;
    }
  }

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
          src={`/PostPictures/${displayImage() + ".jpg"}`}
          alt={`PostPicture${displayImage()}`}
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
