import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";

export const fetcher = axios.create({
  baseURL: BASE_URL,
});
