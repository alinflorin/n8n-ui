import env from "@/env";
import axios, { InternalAxiosRequestConfig } from "axios";

export function setupAxiosDevRequestInterceptor(): void {
  const username = env.AUTH_USER;
  const password = env.AUTH_PASSWORD;

  if (!username || !password) {
    console.warn(
      "[DEV] Missing Basic Auth credentials in environment variables."
    );
    return;
  }

  const credentials = btoa(`${username}:${password}`);
  const authHeader = `Basic ${credentials}`;

  axios.interceptors.request.use();

  axios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      config.headers.Authorization = authHeader;

      console.debug("[DEV] Injected Basic Auth header");
      return config;
    },
    (error) => {
      console.error("[DEV] Axios Request Error:", error);
      return Promise.reject(error);
    }
  );
}
