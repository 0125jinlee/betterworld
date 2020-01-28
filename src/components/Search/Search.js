import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

import Post from "../Post/Post";
import "./Search.css";

class Search extends Component {
  render() {
    return (
      <div className="charitySearch">
        <form>
          <label>
            <input
              type="text"
              placeholder="Enter a keyword to search for the charity."
              onChange={this.urlUpdate}
            />
          </label>
          <Button variant="contained" color="primary" onClick={this.dataCall}>
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
    urlUpdate: event =>
      dispatch({ type: "URL_UPDATE", value: event.target.value }),
    dataCall: () => dispatch({ type: "DATA_CALL" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
