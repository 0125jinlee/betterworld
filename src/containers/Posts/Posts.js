import React, { useEffect } from "react";
import { connect } from "react-redux";

import Post from "../../components/Post/Post";
import "./Posts.css";

const posts = props => {
  useEffect(() => {
    renderPosts(props);
  }, [renderPosts]);

  function renderPosts(props) {
    const posts = props.data;
    const updatedPosts = posts.map(post => {
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
};

export default connect(mapStateToProps)(posts);
