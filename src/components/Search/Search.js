import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";

// import Post from "../Post/Post";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    const API_KEY = process.env.REACT_APP_CHARITY_API_KEY;
    this.state = {
      data: null,
      baseUrl:
        "https://cors-anywhere.herokuapp.com/http://data.orghunter.com/v1/charitysearch?user_key=" +
        API_KEY +
        "&searchTerm=",
      newUrl: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      newUrl: this.state.baseUrl + event.target.value.replace(" ", "%20")
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post(this.state.newUrl)
      .then(response => {
        this.setState({ data: response.data.data });
      })
      .catch(error => {
        alert(error);
      });
  };

  render() {
    return (
      <div className="charitySearch">
        <form onSubmit={this.handleSubmit}>
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
            onClick={this.handleSubmit}
          >
            Search
          </Button>
        </form>
        {console.log(this.state.data)}
      </div>
    );
    //     <Post
    //       charityName={this.state.data[0].charityName}
    //       ein={this.state.data[0].ein}
    //       website={this.state.data[0].url}
    //       city={this.state.data[0].city}
    //       state={this.state.data[0].state}
    //       zipcode={this.state.data[0].zipCode}
    //       category={this.state.data[0].category}
    //     />
  }
}

export default Search;
