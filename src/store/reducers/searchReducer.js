import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utility";

const initialState = {
  searchCounter: 0,
  searchTerm: "",
  searchResult: []
};

const receivedData = (state, action) => {
  return updateObject(state, {
    searchCounter: state.searchCounter + 1,
    searchTerm: action.searchTerm,
    searchResult: action.searchResult
  });
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RECEIVED_DATA:
      return receivedData(state, action);
    default:
      return state;
  }
};

export default searchReducer;
