import { instance as axiosInstance } from "@/lib/axiosInstance";
import { IFlower } from "@/Types/Flower.type";

import { useQuery } from "@tanstack/react-query";

export const useSingleFlower = (id: string) => {
  return useQuery<IFlower>({
    queryKey: ["flower", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/f/single-flower/${id}`);
      return data.data;
    },
  });
};
