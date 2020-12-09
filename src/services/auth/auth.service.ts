import { ENV } from "../../types/env";
import axios from "axios";

export const login = (email: string, password: string) => {
  return axios
    .post(ENV.LOGIN_API_URL, {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};
