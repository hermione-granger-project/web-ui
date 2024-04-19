import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";
import axios from "axios";

export const AuthService = () => {
  const { setUser } = useContext(AuthContext);

  const register = (data: { email: string; username: string; password: string }) => {
    // Call API to register user
    return axios
      .post("https://members-gi4bxnwssa-uc.a.run.app/v1/members", data)
      .then((response) => {
        // Set user data in context
        setUser({
          email: response.data.email,
          username: response.data.username,
          isAuthenticated: true,
        });
      });
  };

  const login = (data: { email: string; password: string }) => {
    // Call API to register user
    return axios
      .post("https://members-gi4bxnwssa-uc.a.run.app/v1/members/login", data)
      .then((response) => {
        // Set user data in context
        setUser({
          email: response.data.email,
          username: response.data.username,
          isAuthenticated: true,
        });
      });
  };

  return {
    register,
    login
  };
};