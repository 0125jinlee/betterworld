import React from "react";
import { connect } from "react-redux";

import "./FetchPosts.css";

const FetchPosts = props => {
  return (
    <div className="NoFetchedPosts">
      <h1>You haven't add favorite charities yet!</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    userId: state.authReducer.userId
  };
};

export default connect(mapStateToProps)(FetchPosts);
