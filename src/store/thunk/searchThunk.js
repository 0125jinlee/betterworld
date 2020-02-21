import axios from "axios";

export const apiCallThunk = searchTerm => {
  return axios.post("https://localhost:9000/testAPI?searchTerm=" + searchTerm);
};
