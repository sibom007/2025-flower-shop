import { toast } from "sonner";
import useDecodedAuth from "./useDecodedAuth";
import { useQuery } from "@tanstack/react-query";
import { instance as axiosInstance } from "@/lib/axiosInstance";

export const useUser = () => {
  const { id } = useDecodedAuth();

  return useQuery({
    queryKey: ["SingleUser"],
    queryFn: async () => {
      const response = await axiosInstance(`/u/${id}`);
      if (response.status !== 200) {
        toast.error("Failed to fetch user data");
        return null;
      }
      return response.data?.data;
    },
    enabled: !!id,
  });
};
