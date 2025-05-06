import { useMutation } from "@tanstack/react-query";

import { LoginCredentials } from "../Types";
import { instance as axiosInstance } from "@/lib/axiosInstance";
import { toast } from "sonner";
import { setToLocalStorage } from "../utils/localStore";
import { authKey } from "@/Types/authkey";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (credentials: LoginCredentials) => {
      return await axiosInstance.post(`/auth/login`, credentials, {
        withCredentials: true,
      });
    },
    onSuccess: (data) => {
      if (data.status === 400) {
        toast.error(data.data.message);
      }
      if (data.status === 401) {
        toast.error(data.data.message);
      }
      if (data.status === 200) {
        toast.success(data.data.message);
        navigate("/", { replace: true });
      }
      if (data.data.data.accessToken) {
        setToLocalStorage(authKey, data.data.data.accessToken);
      }
    },
  });
};
