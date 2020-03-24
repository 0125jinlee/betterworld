import axios from "axios";

import * as searchActions from "../actions/searchActions";

export const apiCallThunk = searchTerm => {
  return function(dispatch, getState) {
    return axios.post("https://localhost:9000/searchAPI", searchTerm);
    //     .then(response => {
    //       if (
    //         response.status === 200 &&
    //         (!response || !response.data || !response.data.data)
    //       ) {
    //         alert("Something went wrong with an API call!");
    //       } else {
    //         dispatch(searchActions.receivedData(response.data.data));
    //       }
    //     })
    //     .catch(error => dispatch(searchActions.receivedError()));
  };
};
