import axios from "axios";

import * as searchActions from "./actions/searchActions";

const API_KEY = process.env.REACT_APP_CHARITY_API_KEY;
const baseUrl =
  "https://cors-anywhere.herokuapp.com/http://data.orghunter.com/v1/charitysearch?user_key=" +
  API_KEY +
  "&searchTerm=";

export const apiCallThunk = searchTerm => {
  const newUrl = baseUrl + searchTerm.replace(" ", "%20");
  return function(dispatch, getState) {
    return axios
      .post(newUrl)
      .then(response => {
        if (
          response.status === 200 &&
          (!response || !response.data || !response.data.data)
        ) {
          alert("Something went wrong with an API call!");
        } else {
          dispatch(searchActions.receivedData(response.data.data));
        }
      })
      .catch(error => dispatch(searchActions.receivedError()));
  };
};
