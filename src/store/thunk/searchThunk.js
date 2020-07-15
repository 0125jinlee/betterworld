import axios from "axios";

import * as searchActions from "../actions/searchActions";

export const apiCallThunk = searchTerm => {
  return function(dispatch, getState) {
    return axios
      .get(
        `https://us-central1-betterworld-aac7e.cloudfunctions.net/api/searchAPI?searchTerm=${searchTerm}`
      )
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
