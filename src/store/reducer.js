const initialState = {
  searchResult: {},
  isFetching: false,
  isError: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_DATA":
      return {
        searchResult: {},
        isFetching: true,
        isError: false
      };
    case "RECEIVED_DATA":
      return {
        searchResult: action.data,
        isFetching: false,
        isError: false
      };
    case "RECEIVED_ERROR":
      return {
        isFetching: false,
        isError: true
      };
    default:
      return state;
  }
};

export default reducer;
