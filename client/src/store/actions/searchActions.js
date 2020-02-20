import * as actionTypes from "./actionTypes";

export const fetchingData = () => {
  return {
    type: actionTypes.FETCHING_DATA
  };
};

export const receivedData = data => {
  return {
    type: actionTypes.RECEIVED_DATA,
    data: data
  };
};

export const receivedError = () => {
  return {
    type: actionTypes.RECEIVED_ERROR
  };
};
