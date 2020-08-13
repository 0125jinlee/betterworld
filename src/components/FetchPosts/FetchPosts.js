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

  let posts = <Spinner />;
  if (!props.loading) {
    posts = props.posts.map(post => (
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
        // src={`/PostPictures/${displayImage() + ".jpg"}`}
        alt={post.ein}
        key={post.ein}
      />
    ));
  }
  return (
    <div className="SavedPosts">
      <h1>Saved Charities</h1>
      {posts}
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
