import axios from "axios";

import * as searchActions from "../actions/searchActions";

export const apiCallThunk = searchTerm => {
  return function(dispatch, getState) {
    return axios
      .get(`http://localhost:9000/searchAPI?searchTerm=${searchTerm}`)
      .then(response => {
        dispatch(searchActions.receivedData(response.data));
      })
      .catch(error => dispatch(searchActions.receivedError()));
  };
};
