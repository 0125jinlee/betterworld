import React, { Component } from "react";
import { connect } from "react-redux";
import { apiCallThunk } from "../../store/thunk/searchThunk";

import "./Search.css";

class Search extends Component {
  constructor() {
    super();
    this.state = { searchTerm: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const searchTerm = this.state.searchTerm;
    this.props.dispatch(apiCallThunk(searchTerm));
  };

  render() {
    return (
      <div className="container">
        <h1 className="searchTitle">Show and support what you love</h1>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            type="text"
            placeholder="Enter keywords to search for the charities"
            onChange={this.handleChange}
          />
          <button className="button" onClick={this.handleSubmit}>
            SEARCH
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.searchReducer
  };
};

export default connect(mapStateToProps)(Search);
