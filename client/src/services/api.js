import axios from "axios";

const API = axios.create({
  baseURL: "/", // Automatically uses the proxy URL
});

// Define API functions
export const registerUser = (userData) => API.post("/api/auth/register", userData);
export const loginUser = (credentials) => API.post("/api/auth/login", credentials);
