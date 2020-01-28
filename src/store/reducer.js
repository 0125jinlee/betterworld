import axios from "axios";

const API_KEY = process.env.REACT_APP_CHARITY_API_KEY;

const initialState = {
  data: null,
  baseUrl:
    "https://cors-anywhere.herokuapp.com/http://data.orghunter.com/v1/charitysearch?user_key=" +
    API_KEY +
    "&searchTerm=",
  newUrl: ""
};

const reducer = (state = initialState, action) => {
  if (action.type === "URL_UPDATE") {
    return {
      ...state,
      newUrl: this.state.baseUrl + action.value.replace(" ", "%20")
    };
  }
  // if (action.type === 'DATA_CALL') {
  //   return {
  //     dataCall = event => {
  //       event.preventDefault();

  //       axios
  //         .post(this.state.newUrl)
  //         .then(response => {
  //           if (
  //             response.status === 200 &&
  //             (!response || !response.data || !response.data.data)
  //           ) {
  //             alert("Something went wrong with an API call!");
  //           } else {
  //             this.setState({ data: response.data.data });
  //           }
  //         })
  //         .catch(error => {
  //           alert(error);
  //         });
  //     };
  //   }
  console.log(initialState.newUrl);
  return state;
};

export default reducer;
