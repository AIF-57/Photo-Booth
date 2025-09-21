import React, { useEffect } from "react";
import { api } from "../api/api";
import useAuth from "./useAuth";
import axios from "axios";

export default function useAxios() {
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    // request interceptor
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        const accessToken = auth.accessToken;
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // response interceptor
    const responseIntercept = api.interceptors.response.use(
      (response) => response,

      async (error) => {
        const originalRequest = error.config;

        // If the error status is 401 and there is no originalRequest._retry flag,
        // it means the token has expired and we need to refresh it
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = auth.refreshToken;
            const response = await axios.post(
              `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token`,
              { refreshToken }
            );
            const { accessToken } = response.data;
            console.log(`new accessToken: ${accessToken}`);
            setAuth({ ...auth, accessToken });

            // Retry the original request with the new token
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return axios(originalRequest);
          } catch (error) {
            throw error;
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [auth.accessToken]);
  return { api };
}
