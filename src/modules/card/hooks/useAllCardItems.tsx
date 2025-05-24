import { useQuery } from "@tanstack/react-query";
import { instance as axiosInstance } from "@/lib/axiosInstance";
import { CardItem } from "@/Types/Card.types";

export const useAllCardItems = () => {
  return useQuery<CardItem, Error>({
    queryKey: ["cardItems"],
    queryFn: async () => {
      const { data } = await axiosInstance.get("/p/card");
      return data.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
