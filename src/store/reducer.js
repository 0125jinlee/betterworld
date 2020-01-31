const initialState = {
  data: null,
  isFetching: false,
  isError: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_DATA":
      return Object.assign({}, state, {
        data: null,
        isFetching: true,
        isError: false
      });
    case "RECEIVED_DATA":
      return Object.assign({}, state, {
        data: action.data,
        isFetching: false,
        isError: false
      });
    case "RECEIVED_ERROR":
      return Object.assign({}, state, {
        isFetching: false,
        isError: true
      });
    default:
      return state;
  }
};

export default reducer;
