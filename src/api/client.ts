import axios from "axios";
import { handleApiError } from "./utils";

const API_BASE_URL = "http://localhost:3000/api/v1/";
// const API_BASE_URL = 'http://localhost:3000/api/v1/';
// const API_BASE_URL = 'https://api.berakorean.com/api/v1/';

export interface ApiResponse<T = unknown> {
  data?: T;
  error?: {
    status: number;
    message: string;
  };
}

export const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const apiError = handleApiError(error);
    throw {
      response: {
        data: {
          error: apiError,
        },
      },
    };
  }
);
