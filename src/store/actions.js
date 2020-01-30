import store from "./store";

export const call_data = () => {
  return {
    type: "CALL_DATA"
  };
};

export const receive_data = dt => {
  return {
    type: "RECEIVE_DATA",
    data: dt
  };
};

export const receive_error = () => {
  return {
    type: "RECEIVE_ERROR"
  };
};
