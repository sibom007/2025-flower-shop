import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { authKey } from "@/Types/authkey";
import { LoginCredentials } from "../Types";
import { setToLocalStorage } from "../utils/localStore";
import { instance as axiosInstance } from "@/lib/axiosInstance";
import { getUserByToken } from "./useGetUserFromToken";
import { useAuth } from "@/context/AuthContext";

export const useLogin = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (credentials: LoginCredentials) => {
      const response = await axiosInstance.post("/auth/login", credentials, {
        withCredentials: true,
      });

      return response.data?.data;
    },

    onSuccess: async (data) => {
      const accessToken = data?.accessToken;
      if (!accessToken) {
        toast.error("Login failed. No access token received.");
        return;
      }

      try {
        const user = await getUserByToken(accessToken);
        setUser(user);
        setToLocalStorage(authKey, accessToken);

        toast.success(data.message || "Login successful!");
        navigate("/", { replace: true });
      } catch (error) {
        console.error("Failed to fetch user after login:", error);
        toast.error("Login succeeded, but failed to load user data.");
      }
    },

    onError: () => {
      const message = "Something went wrong during login. Please try again.";
      toast.error(message);
    },
  });
};
