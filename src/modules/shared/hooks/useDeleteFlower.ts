import { useMutation, useQueryClient } from "@tanstack/react-query";
import { instance as axiosInstance } from "@/lib/axiosInstance";

import { toast } from "sonner";

export const useDeleteFlower = () => {
  const quryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (flowerId: string) => {
      const res = await axiosInstance.delete(`/f/delete-flower/${flowerId}`);
      return res.data;
    },

    onSuccess: (data) => {
      toast.success(data.message);
      quryClient.invalidateQueries({ queryKey: ["flower"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    deleteFlower: mutation.mutate,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
};
