import { useMutation, useQueryClient } from "@tanstack/react-query";
import { instance as axiosInstance } from "@/lib/axiosInstance";

import { toast } from "sonner";

export const useContactUpdate = () => {
  const queryClient = useQueryClient();
  const { mutate: updateContact, isPending: isLoading } = useMutation({
    mutationFn: async (payload: {
      homeAddress: string;
      currentAddress: string;
      phoneNumber: string;
    }) => {
      const { data } = await axiosInstance.patch(
        "/u/update-userProfile/contactInfo",
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

  return { updateContact, isLoading };
};
