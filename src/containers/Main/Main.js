import React, { useEffect } from "react";
import { connect } from "react-redux";

import Search from "../../components/Search/Search";
import NavigationItem from "../../components/Navigation/NavigationItem";
import * as actions from "../../store/actions/index";
import "./Main.css";

const Main = props => {
  const trendingWords = [
    "children",
    "women",
    "elder",
    "victim",
    "virus",
    "hunger",
    "needs"
  ];

  useEffect(() => {
    props.search(trendingWords[Math.ceil(Math.random() * 6)]);
  }, []);

  return (
    <div className="Main">
      <div className="Logo">
        <NavigationItem link="/" exact>
          <img src="/Logo.png" alt="Logo" />
        </NavigationItem>
        <NavigationItem link="/" exact>
          <h1>Better World</h1>
        </NavigationItem>
      </div>
      <div className="Search">
        <Search />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchTerm: state.searchReducer.searchTerm,
    searchCounter: state.searchReducer.searchCounter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    search: searchTerm => dispatch(actions.search(searchTerm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
