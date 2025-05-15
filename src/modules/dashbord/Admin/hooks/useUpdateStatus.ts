import { useMutation } from "@tanstack/react-query";

import { instance as axiosInstance } from "@/lib/axiosInstance";
import { toast } from "sonner";

interface UpdateStatusParams {
  id: string;
  status: string;
}

export const useUpdateStatus = () => {
  return useMutation({
    mutationFn: async ({ id, status }: UpdateStatusParams) => {
      const response = await axiosInstance.put(`/u/update-status/${id}`, {
        status,
      });
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
