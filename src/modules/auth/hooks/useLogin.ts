import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { authKey } from "@/Types/authkey";
import { LoginCredentials } from "../Types";
import { setToLocalStorage } from "../utils/localStore";
import { instance as axiosInstance } from "@/lib/axiosInstance";

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
        if (data.data.data.accessToken) {
          setToLocalStorage(authKey, data.data.data.accessToken);
        }
        toast.success(data.data.message);
        navigate("/", { replace: true });
      }
    },
  });
};
