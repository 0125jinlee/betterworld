import React from "react";
import { connect } from "react-redux";

import Post from "../Post/Post";
import "./Posts.css";

let arr = [];
let base = 0;

function displayImage() {
  let num = Math.floor(Math.random() * 13);
  if (arr[num] === undefined) {
    arr[num] = 1;
    return num;
  } else if (arr[num] <= base) {
    arr[num]++;
    return num;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined) {
        arr[i] = 1;
        return i;
      } else if (arr[i] <= base) {
        arr[i]++;
        return i;
      }
    }
    let minIndex;
    for (let k = 0; k < arr.length; k++) {
      if (!minIndex) {
        minIndex = k;
      } else if (arr[minIndex] > arr[k]) {
        minIndex = k;
      }
    }
    arr[minIndex]++;
    base++;
    return minIndex;
  }
}

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
          src={`/PostPictures/${displayImage() + ".jpg"}`}
          alt={post.charityName}
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
