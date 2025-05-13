import { useMutation } from "@tanstack/react-query";
import { instance as axiosInstance } from "@/lib/axiosInstance";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { removeFromLocalStorage } from "../utils/localStore";
import { authKey } from "@/Types/authkey";
import { useAuth } from "@/context/AuthContext";

export const useLogout = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async () => {
      return await axiosInstance.post(
        "/auth/logout",
        {},
        {
          withCredentials: true, // to include refreshToken cookie
        }
      );
    },
    onSuccess: (data) => {
      if (data.status === 200) {
        toast.success("Logout successful");
        removeFromLocalStorage(authKey);
        setUser(null);
        navigate("/login", { replace: true });
      } else {
        toast.error("Logout failed");
      }
    },
    onError: () => {
      toast.error("Something went wrong during logout");
    },
  });
};
