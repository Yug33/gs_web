import axios from "axios";
//TODO: take URL from .env
const API_BASE_URL = "http://localhost:3000";
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    common: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});

export default {
  name: "Api",
  methods: {
    login(userCredentials) {
      console.log(api.defaults);
      const url = "/login";
      return api.post(url, userCredentials).catch((e) => ({
        error: e,
        status: "failed",
      }));
    },
  },
};
