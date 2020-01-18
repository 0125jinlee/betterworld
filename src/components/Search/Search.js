import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";

import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: null,
      url: ""
    };
  }

  postData() {
    axios.get(this.state.url).then(response => {
      this.setState({ searchData: response.data.data });
    });
  }

  updateSearchTerm(evt) {
    const API_KEY = process.env.REACT_APP_CHARITY_API_KEY;
    const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
    this.setState({
      url:
        PROXY_URL +
        "http://data.orghunter.com/v1/charitysearch?user_key=" +
        API_KEY +
        "&searchTerm=" +
        evt.target.value.replace(" ", "%20")
    });
  }

  render() {
    return (
      <div className="charitySearch">
        <form>
          <input
            type="text"
            placeholder="Enter a keyword to search for the charity."
            onKeyDown={evt => this.updateSearchTerm(evt)}
          />
          <Button variant="contained" color="primary">
            Search
          </Button>
        </form>
      </div>
    );
  }
}

export default Search;
