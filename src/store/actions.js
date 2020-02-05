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
