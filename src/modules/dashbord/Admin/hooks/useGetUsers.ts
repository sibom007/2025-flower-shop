import { instance as axiosInstance } from "@/lib/axiosInstance";
import { User } from "@/modules/auth/Types";

import { useQuery } from "@tanstack/react-query";

export function useGetUsers() {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosInstance.get(`/u/all-user`);
      return response.data?.data;
    },
  });
}
