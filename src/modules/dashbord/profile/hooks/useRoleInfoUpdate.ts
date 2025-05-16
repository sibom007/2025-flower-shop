import { useMutation, useQueryClient } from "@tanstack/react-query";
import { instance as axiosInstance } from "@/lib/axiosInstance";
import { toast } from "sonner";

export const useRoleInfoUpdate = () => {
  const queryClient = useQueryClient();

  const { mutate: updateRoleInfo, isPending: isLoading } = useMutation({
    mutationFn: async (payload: {
      FatherName: string;
      FatherNumber: string;
      NIDNumber: string;
      NIDFront: string;
      NIDBack: string;
    }) => {
      const { data } = await axiosInstance.patch(
        "/u/update-userProfile/roleInfo",
        payload
      );
      return data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["SingleUser"] });
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateRoleInfo, isLoading };
};
