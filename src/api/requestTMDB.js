// const TMDBApi = {};

// TMDBApi.BASE_URL = "https://api.themoviedb.org/3";

// TMDBApi.API_KEY = "?api_key=56850f27d2bed417680d8b4c44c012f4";

// export default TMDBApi;

import axios from "axios";

const TMDBApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    api_key: "56850f27d2bed417680d8b4c44c012f4",
  },
});

export default TMDBApi;
