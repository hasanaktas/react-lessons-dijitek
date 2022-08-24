import axios from "axios";

export const restCountriesApi = axios.create({
  baseURL: "https://restcountries.com",
});
