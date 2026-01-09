import axios from "axios";
import { getAccessToken } from "@/server/access-token";

// const isRefreshing = false;
// let queue: ((token: string) => void)[] = [];

// function processQueue(token: string) {
//   queue.forEach((cb) => cb(token));
//   queue = [];
// };

const APIAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_BACKEND,
});


APIAuth.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

APIAuth.interceptors.response.use(
  function onFulfilled(res){
    return res;
  },
);

export { APIAuth };
