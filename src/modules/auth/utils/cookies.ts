// utils/cookies.ts
import Cookies from "js-cookie";

// Set cookie
export const setCookie = (name: string, value: string, days = 7) => {
  Cookies.set(name, value, { expires: days, path: "/" });
};

// Get cookie
export const getCookie = (name: string) => {
  return Cookies.get(name);
};

// Remove cookie
export const removeCookie = (name: string) => {
  Cookies.remove(name);
};
