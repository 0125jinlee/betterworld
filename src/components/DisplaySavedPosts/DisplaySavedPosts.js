import React, { useEffect } from "react";
import { connect } from "react-redux";

import Post from "../Post/Post";
import * as actions from "../../store/actions/index";
import "./DisplaySavedPosts.css";

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

const DisplaySavedPosts = props => {
  useEffect(() => {
    if (props.isAuthenticated) {
      props.fetchPosts(localStorage.getItem("userId"));
    }
  }, [props.isAuthenticated, props.fetchPosts]);

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
          missionStatement={post.missionStatement}
          src={`/PostPictures/${displayImage() + ".jpg"}`}
          alt={post.ein}
          key={post.ein}
        />
      );
    });
    return <div className="FetchedPosts">{fetchedPosts}</div>;
  }
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.token !== null,
    fetchedPosts: state.fetchReducer.fetchedPosts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: uid => dispatch(actions.fetchPosts(uid))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySavedPosts);
