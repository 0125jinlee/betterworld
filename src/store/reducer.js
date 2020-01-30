const initialState = {
  data: null,
  isFetching: false,
  isLoading: false
};

const reducer = (state = initialState, action) => {
  if (action.type === "URL_UPDATE") {
    return {
      ...state,
      newUrl: state.baseUrl + action.value.replace(" ", "%20")
    };
  }
  if (action.type === "DATA_CALL") {
    alert("DATA_CALLED!");
  }
  return state;
};

export default reducer;
