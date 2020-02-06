import React from "react";
import { connect } from "react-redux";

import Post from "../../components/Post/Post";
import "./Posts.css";

const posts = props => {
  if (props.data) {
    const updatedPosts = props.data.map(post => {
      return (
        <Post
          ein={post.ein}
          website={post.url}
          city={post.city}
          state={post.state}
          zip={post.zipCode}
          category={post.category}
        />
      );
    });
    return (
      <div>
        <section className="Posts">{updatedPosts}</section>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    data: state.searchResult
  };
  // posts rerenders everytime store state updates
};

export default connect(mapStateToProps)(posts);
