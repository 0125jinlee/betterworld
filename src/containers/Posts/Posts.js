import React, { Component } from "react";
import { connect } from "react-redux";

import Post from "../../components/Post/Post";
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: {}
  };

  componentDidMount() {
    console.log(this.props.data.searchResult);
    const posts = this.props.data.searchResult.slice(0, 9);
    const updatedPosts = posts.map(post => {
      return {
        ...post
      };
    });
    this.setState({ posts: updatedPosts });
  }

  postSelectedHandler = id => {
    console.log("clicked!");
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.props.data.isError) {
      posts = this.state.posts.map(post => {
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
    }
    return (
      <div>
        <section className="Posts">{posts}</section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(Posts);
