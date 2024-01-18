import axios from "axios";

const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10";
axios.defaults.baseURL = apiUrl;
export default axios;
