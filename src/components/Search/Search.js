import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

import Post from "../Post/Post";
import "./Search.css";

class Search extends Component {
  constructor() {
    super();
    this.state = { searchTerm: null };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    event.preventDefault();
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="charitySearch">
        <form onSubmit={console.log(this.state.searchTerm)}>
          <label>
            <input
              type="text"
              placeholder="Enter a keyword to search for the charity."
              onChange={this.handleChange}
            />
          </label>
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.dataCall}
          >
            Search
          </Button>
        </form>
        {this.props.dt && this.props.dt[0] && (
          <Post
            charityName={this.props.dt[0].charityName}
            ein={this.props.dt[0].ein}
            website={this.props.dt[0].url}
            city={this.props.dt[0].city}
            state={this.props.dt[0].state}
            zipcode={this.props.dt[0].zipCode}
            category={this.props.dt[0].category}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dt: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    urlUpdate: () => dispatch({ type: "URL_UPDATE" }),
    dataCall: () => dispatch({ type: "DATA_CALL" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
