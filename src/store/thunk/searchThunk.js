import axios from "axios";

export const apiCallThunk = searchTerm => {
  axios
    .post("https://localhost:9000/searchAPI", searchTerm)
    .then(res => console.log("Data send"))
    .catch(err => console.log(err.data));
};
