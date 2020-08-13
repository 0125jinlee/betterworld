import axios from "axios";

const instance = axios.create({
  baseURL: "https://betterworld-aac7e.firebaseio.com/"
});

export default instance;
