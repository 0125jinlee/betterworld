import React, { Component } from "react";
import axios from "axios";

import "./Posts.css";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get("");
  }

  render() {
    return { posts };
  }
}

export default Posts;
