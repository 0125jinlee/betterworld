import React from "react";
import { connect } from "react-redux";

import Post from "../Post/Post";
import "./FetchPosts.css";

let arr = [];
let base = 0;

const displayImage = () => {
  let num = Math.floor(Math.random() * 20);
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
};

const FetchPosts = props => {
  if (Array.isArray(props.fetchedPosts) && props.fetchedPosts.length !== 0) {
    const fetchedPosts = props.fetchedPosts.map(post => {
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
          score={post.score}
          acceptingDonations={post.acceptingDonations}
          missionStatement={post.missionStatement}
          src={`/PostPictures/${displayImage() + ".jpg"}`}
          alt={post.ein}
          key={post.ein}
        />
      );
    });
    return <div className="FetchedPosts">{fetchedPosts}</div>;
  } else {
    return (
      <div className="NoFetchedPosts">
        <h1>You haven't add favorite charities yet!</h1>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    fetchedPosts: state.searchReducer.searchTerm
  };
};

export default connect(mapStateToProps)(FetchPosts);
