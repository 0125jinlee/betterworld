import React from "react";
import { connect } from "react-redux";

import Search from "../../components/Search/Search";
import NavigationItem from "../../components/Navigation/NavigationItem";
import "./Main.css";

const Main = () => {
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

export default connect(mapStateToProps)(Main);
