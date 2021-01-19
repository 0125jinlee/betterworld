import axios from "axios";

import * as searchActions from "../actions/searchActions";

export const search = searchTerm => {
  return function(dispatch) {
    return axios
      .get(
        `https://us-central1-betterworld-aac7e.cloudfunctions.net/api/searchAPI?searchTerm=${searchTerm}`
      )
      .then(response => {
        try {
          dispatch(searchActions.receivedData(searchTerm, response.data));
        } catch (e) {
          console.log(e);
        }
      })
      .catch(error => console.log(error));
  };
};
