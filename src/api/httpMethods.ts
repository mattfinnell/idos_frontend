import axios from "axios";

export const API_URL: string = "http://localhost:8000";

export const httpPostRequest = async <T>(endpoint: string, data: T) => {
  return axios.post(API_URL + endpoint, JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
};
