import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { AuthApi } from "../services/auth.api.ts";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: AuthApi.login,
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      navigate("/");
    },
    onError: (error) => {
      console.error("Login failed: ", error);
    },
  });
};
export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: AuthApi.register,
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error) => {
      console.error("Register failed: ", error);
    },
  });
};
