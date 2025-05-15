import { IUser } from "@/Types/User.types";
import { useQuery } from "@tanstack/react-query";
import { instance as axiosInstance } from "@/lib/axiosInstance";

export const useUserById = (userId: string) => {
  return useQuery<IUser>({
    queryKey: ["userById", userId],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/u/${userId}`);
      return data.data;
    },
    enabled: !!userId,
  });
};
