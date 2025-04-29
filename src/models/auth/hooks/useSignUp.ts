import { SignUpCredentials } from "../Types";

import { useMutation } from "@tanstack/react-query";
import { instance as axiosInstance } from "@/lib/axiosInstance";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (credentials: SignUpCredentials) => {
      return await axiosInstance.post("/auth/signup", credentials);
    },
    onSuccess: (data) => {
      if (data.status === 400) {
        toast.error(data.data.message);
      }
      if (data.status === 200) {
        toast.success(data.data.message);
        navigate("/login", { replace: true });
      }
    },
  });
};
