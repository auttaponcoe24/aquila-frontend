import axios from "axios";

const apiUrl = "https://api.thecatapi.com/v1/images";
axios.defaults.baseURL = apiUrl;
export default axios;
