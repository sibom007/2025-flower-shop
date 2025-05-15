import { FlowerCategory, FlowerType } from "@/Types/Flower.type";
import { useMutation } from "@tanstack/react-query";
import { instance as axiosInstance } from "@/lib/axiosInstance";
import { toast } from "sonner";

interface FlowerData {
  name: string;
  price: number;
  image: string;
  description: string;
  color: string;
  category: FlowerCategory;
  FlowerType: FlowerType;
  stock: number;
  discount?: number | "" | undefined;
}

export const useCreateFlower = () => {
  const createFlowerMutation = useMutation({
    mutationFn: async (flowerData: FlowerData) => {
      const responce = await axiosInstance.post("/f/create-flower", flowerData);
      return responce.data;
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
  });

  return {
    createFlower: createFlowerMutation.mutate,
    isLoading: createFlowerMutation.isPending,
    isError: createFlowerMutation.isError,
    isSuccess: createFlowerMutation.isSuccess,
    error: createFlowerMutation.error,
  };
};
