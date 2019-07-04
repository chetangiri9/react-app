import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 04439b62c1d463f43fe0694ae00f0da227dc3cd41ce3cd2440a151fb54b80346"
  }
});
