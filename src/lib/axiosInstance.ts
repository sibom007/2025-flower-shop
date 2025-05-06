import axios from "axios";
import {
  getFromLocalStorage,
  // setToLocalStorage,
} from "../modules/auth/utils/localStore";

import { authKey } from "@/Types/authkey";
// import { getNewAccessToken } from "@/modules/auth/utils/getNewAccessToken";

const instance = axios.create();
instance.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

instance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },

  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const config = error.config;
    if (error?.response?.status === 500 && !config.sent) {
      config.sent = true;

      // const response = await getNewAccessToken(); // get new access token

      // const accessToken = response?.data?.accessToken; // set in variable

      // config.headers["Authorization"] = accessToken; // set in header

      // setToLocalStorage(authKey, accessToken); // and set in local storage

      return instance(config);
    } else {
      // const responseObject: IGenericErrorResponse = {
      //   statusCode: error?.response?.data?.err?.statusCode || 500,
      //   message:
      //     error?.response?.data?.errorSources || "Something went wrong!!!",
      //   errorMessages: error?.response?.data?.message,
      // };

      return error.response;
      // return responseObject;
    }
  }
);

export { instance };
