import { useMutation, useQueryClient } from "@tanstack/react-query";
import { instance as axiosInstance } from "@/lib/axiosInstance";
import { FlowerCategory, FlowerType } from "@/Types/Flower.type";
import { toast } from "sonner";

interface UpdateFlowerPayload {
  name: string;
  price: number;
  description: string;
  color: string;
  category: FlowerCategory;
  FlowerType: FlowerType;
  stock: number;
  discount: number | 0;
  isAvailable: boolean;
}

interface UpdateFlowerVariables {
  id: string;
  payload: UpdateFlowerPayload;
}

export const useUpdateFlower = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, payload }: UpdateFlowerVariables) => {
      const res = await axiosInstance.patch(`/f/update-flower/${id}`, payload);
      return res.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["flowers"] });
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
