import { useMutation } from "@tanstack/react-query";

import { instance as axiosInstance } from "@/lib/axiosInstance";
import { toast } from "sonner";

interface UpdateRoleParams {
  id: string;
  role: string;
}

export const useUpdateRole = () => {
  return useMutation({
    mutationFn: async ({ id, role }: UpdateRoleParams) => {
      const response = await axiosInstance.put(`/u/update-role/${id}`, {
        role,
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
