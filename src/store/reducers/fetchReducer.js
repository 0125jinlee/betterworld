import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/utility";

const initialState = {
  fetchedPosts: null
};

const fetchSuccess = (state, action) => {
  return updateObject(state, {
    fetchedPosts: action.fetchedPosts
  });
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUCCESS:
      return fetchSuccess(state, action);
    default:
      return state;
  }
};

export default fetchReducer;
