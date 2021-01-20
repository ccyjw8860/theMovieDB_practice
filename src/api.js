import axios from "axios";

const callApi = (method, path, page = undefined, data = {}) => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const API_KEY = "2289e8d7e9e4c0238c61bb0228d73367";
  const fullUrl =
    page !== undefined
      ? `${baseUrl}${path}?api_key=${API_KEY}&language=es-US&page=${page}`
      : `${baseUrl}${path}?api_key=${API_KEY}&language=es-US`;

  if (method === "get" || method === "delete") {
    const response = axios[method](fullUrl);
    return response;
  }
};

export default callApi;
