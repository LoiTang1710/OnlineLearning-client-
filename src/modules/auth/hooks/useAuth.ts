import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { AuthApi } from "../services/auth.api.ts";
import { toast } from "sonner";
import { useAuthStore } from "../../../stores/useAuthStore.ts";
import type { AxiosError } from "axios";

export const useLogin = () => {
  const navigate = useNavigate();
  const setLoginSuccess = useAuthStore((state) => state.setLoginSuccess)

  return useMutation({
    mutationFn: AuthApi.login,
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);

      if(data.user){
        setLoginSuccess(data.user, data.accessToken)
      }
      toast.success('Đăng nhập thành công')

      navigate("/");
    },
    onError: (error: AxiosError<{message: string}>) => {
      const serverLog = error.response?.data?.message || error.message
      console.error(serverLog);
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
    onError: (error: AxiosError<{message: string}>) => {
      const serverLog = error.response?.data?.message || error.message
      console.error(serverLog)
    },
  });
};
