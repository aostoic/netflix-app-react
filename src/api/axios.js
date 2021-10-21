import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3030/",
  baseURL: "https://netflix-api-example.herokuapp.com/",
});

export default instance;
