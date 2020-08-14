import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
import Post from "../Post/Post";
import postsaxios from "../../axios-posts";
import Spinner from "../UI/Spinner/Spinner";
import "./FetchPosts.css";

const FetchPosts = props => {
  useEffect(props => {
    props.onFetchPosts(props.token, props.userId);
  }, []);

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

  let savedPosts = <Spinner />;
  if (
    Array.isArray(props.posts) &&
    props.posts.length !== 0 &&
    !props.loading
  ) {
    savedPosts = props.posts.map(post => (
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
    ));
  }
  return (
    <div className="savedPosts">
      <h1>Saved Charities</h1>
      {savedPosts}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.fetchPostsReducer.posts,
    loading: state.fetchPostsReducer.loading,
    token: state.authReducer.token,
    userId: state.authReducer.userId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchPosts: (token, userId) => dispatch(actions.fetchPosts(token, userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  FetchPosts,
  postsaxios
);
