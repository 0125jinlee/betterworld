import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";

import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    const API_KEY = process.env.REACT_APP_CHARITY_API_KEY;
    this.state = {
      searchData: null,
      url:
        "https://cors-anywhere.herokuapp.com/http://data.orghunter.com/v1/charitysearch?user_key=" +
        API_KEY +
        "&searchTerm=",
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.beginSearch = this.beginSearch.bind(this);
  }

  handleChange(event) {
    this.setState({
      ...this.state,
      value: this.state.url + event.target.value.replace(" ", "%20")
    });
  }

  beginSearch = event => {
    event.preventDefault();

    const URL = {
      value: this.state.value
    };

    axios
      .post(URL.value)
      .then(response => {
        const charities = response.data.data;
        this.setState({ searchData: charities });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="charitySearch">
        <form onSubmit={this.beginSearch}>
          <label>
            <input
              type="text"
              placeholder="Enter a keyword to search for the charity."
              onChange={this.handleChange}
            />
          </label>
          {console.log(this.state.searchData)}
          <Button
            variant="contained"
            color="primary"
            onClick={this.beginSearch}
          >
            Search
          </Button>
        </form>
      </div>
    );
  }
}

export default Search;
