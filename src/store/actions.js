import axios from "axios";

import store from "./store";

export const fetching_data = () => {
  return {
    type: "FETCHING_DATA"
  };
};

export const received_data = data => {
  return {
    type: "RECEIVED_DATA",
    data: data
  };
};

export const received_error = () => {
  return {
    type: "RECEIVED_ERROR"
  };
};

const API_KEY = process.env.REACT_APP_CHARITY_API_KEY;
const baseUrl =
  "https://cors-anywhere.herokuapp.com/http://data.orghunter.com/v1/charitysearch?user_key=" +
  API_KEY +
  "&searchTerm=";

export const apiCallThunk = searchTerm => {
  const newUrl = baseUrl + searchTerm.replace(" ", "%20");
  store.dispatch(fetching_data());
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
          dispatch(received_data(response.data.data));
        }
      })
      .catch(error => dispatch(received_error()));
  };
};
