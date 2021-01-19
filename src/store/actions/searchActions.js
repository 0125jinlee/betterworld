import * as actionTypes from "./actionTypes";

export const receivedData = (searchTerm, searchResult) => {
  return {
    type: actionTypes.RECEIVED_DATA,
    searchTerm: searchTerm,
    searchResult: searchResult
  };
};
