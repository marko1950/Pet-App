import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 1Zl6-bmQJ26kjE8AkS2BBOmRsAiAwZGcJUyh-R7nXss",
  },
});
