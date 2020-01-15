import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

import './Search.css';

class Search extends Component {
  state = {
    query: "",
    data: [],
    filteredData: []
  };

  handleInputchange = (event) => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.data.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  }

  componentDidMount() {
    const API_KEY = process.env.REACT_APP_CHARITY_API_KEY;
    axios.get('http://data.orghunter.com/v1/charitysearch?user_key=' + API_KEY + '&searchTerm=treasure%20coast%20humane', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
      }
    })
      .then(response => {
        this.setState({data: response});
        console.log(response);
      });
  }

  render () {
    return (
      <div className = "charitySearch">
        <form>
          <input
            placeholder = "Enter a keyword to search for the charity."
            value = {this.state.query}
            onChange = {this.handleInputChange}
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