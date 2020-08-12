import React, { useState } from "react";
import { connect } from "react-redux";
import { apiCallThunk } from "../../store/thunk/searchThunk";

import "./Search.css";

const Search = props => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchTerm.length > 0
      ? props.dispatch(apiCallThunk(searchTerm))
      : alert("Enter valid search terms!");
  };

  return (
    <div className="Container">
      <h1 className="searchTitle">Show and support what you love</h1>
      <form onSubmit={handleSubmit} className="searchForm">
        <input
          type="text"
          placeholder="What do you want to support today?"
          onChange={event => handleChange(event)}
        />
        <button className="searchButton" onClick={handleSubmit}>
          SEARCH
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchTerm: state.searchReducer.searchTerm,
    searchCounter: state.searchReducer.searchCounter
  };
};

export default connect(mapStateToProps)(Search);
