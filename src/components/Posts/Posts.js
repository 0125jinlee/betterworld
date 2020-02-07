import React from "react";
import { connect } from "react-redux";

import Post from "../Post/Post";
import "./Posts.css";

const posts = props => {
  if (Array.isArray(props.data)) {
    const updatedPosts = props.data.map(post => {
      return (
        <Post
          charityName={post.charityName}
          ein={post.ein}
          website={post.url}
          city={post.city}
          state={post.state}
          zip={post.zipCode}
          category={post.category}
          score={post.score}
        />
      );
    });
    return (
      <div>
        <section className="Posts">{updatedPosts}</section>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    data: state.searchResult
  };
};

export default connect(mapStateToProps)(posts);
