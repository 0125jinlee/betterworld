import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../store/thunk/fetchPostsThunk";

import NavigationItem from "../../components/Navigation/NavigationItem";
import FetchPosts from "../../components/FetchPosts/FetchPosts";
import "./MyPage.css";

const MyPage = props => {
  useEffect(() => {
    if (props.token) {
      props.dispatch(fetchPosts(props.token, props.userId));
    }
  });

  return (
    <div>
      <div className="MyPage">
        <div className="Logo">
          <NavigationItem link="/" exact>
            <img src="/Logo.png" alt="Logo" />
          </NavigationItem>
          <NavigationItem link="/" exact>
            <h1>Better World</h1>
          </NavigationItem>
        </div>
      </div>
      <div>
        <FetchPosts></FetchPosts>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    userId: state.authReducer.userId,
    fetchedPosts: state.fetchPostsReducer.posts
  };
};

export default connect(mapStateToProps)(MyPage);
