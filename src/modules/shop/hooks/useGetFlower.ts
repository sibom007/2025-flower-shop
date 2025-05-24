import { useQuery } from "@tanstack/react-query";
import { instance as axiosInstance } from "@/lib/axiosInstance";
import { IFlowerFilter } from "@/Types/Flower.type";


export const useGetFlower = (payload: IFlowerFilter | null) => {
  const cleanedFilters = Object.fromEntries(
    Object.entries(payload || {}).filter(([, value]) => value !== "")
  );

  return useQuery({
    queryKey: ["flowers", cleanedFilters],
    queryFn: async () => {
      const response = await axiosInstance.get(`/f/all-flowers`, {
        params: cleanedFilters,
      });
      return response.data?.data?.data;
    },
    enabled: !!payload,
  });
};
