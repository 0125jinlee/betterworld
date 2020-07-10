const initialState = {
  searchTerm: "",
  searchResult: [],
  isFetching: false,
  isError: false
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_DATA":
      return {
        searchResult: [],
        isFetching: true,
        isError: false
      };
    case "RECEIVED_DATA":
      return {
        searchTerm: action.data.searchTerm,
        searchResult: action.data.result,
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

export default searchReducer;
