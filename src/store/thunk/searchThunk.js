import axios from "axios";

import * as searchActions from "../actions/searchActions";

export const apiCallThunk = searchTerm => {
  return function(dispatch, getState) {
    return axios
      .get(`http://localhost:9000/searchAPI?searchTerm=${searchTerm}`)
      .then(response => {
        try {
          dispatch(
            searchActions.receivedData({
              searchTerm: searchTerm,
              result: response.data
            })
          );
        } catch (e) {
          console.log(e);
        }
      })
      .catch(error => dispatch(searchActions.receivedError()));
  };
};
