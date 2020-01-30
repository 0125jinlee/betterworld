import axios from "axios";

export const SEARCH_TERM = "SEARCH_TERM";
export const SAVE_SEARCH = "SAVE_SEARCH";

const API_KEY = process.env.REACT_APP_CHARITY_API_KEY;
const baseUrl =
  "https://cors-anywhere.herokuapp.com/http://data.orghunter.com/v1/charitysearch?user_key=" +
  API_KEY +
  "&searchTerm=";

export function search(query) {
  query.preventDefault();

  const request = axios
    .post(baseUrl + query)
    .then(response => {
      if (
        response.status === 200 &&
        (!response || !response.data || !response.data.data)
      ) {
        alert("Something went wrong with an API call!");
      } else {
        return request;
      }
    })
    .catch(error => {
      alert(error);
    });
}
