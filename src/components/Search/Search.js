import React, { Component } from "react";
import { connect } from "react-redux";
import { apiCallThunk } from "../../store/thunk";

import Posts from "../../containers/Posts/Posts";
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
        <form onSubmit={this.handleSubmit} className="form">
          <h2 className="title">LET'S MAKE THE WORLD A BETTER PLACE!</h2>
          <input
            type="text"
            placeholder="Enter keywords to search for the charity"
            onChange={this.handleChange}
          />
          <button className="button" onClick={this.handleSubmit}>
            Search
          </button>
        </form>
        {this.props.data.isFetching ? <h3>Loading...</h3> : null}
        {this.props.data.isError ? <h3>Enter different keywords!</h3> : null}
        {console.log(this.props.data.searchResult)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(Search);