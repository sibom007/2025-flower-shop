import { useMutation, useQueryClient } from "@tanstack/react-query";
import { instance as axiosInstance } from "@/lib/axiosInstance";

import { toast } from "sonner";

export const useHeaderImgUpdate = () => {
  const queryClient = useQueryClient();

  const { mutate: updateHeaderImg, isPending: isLoading } = useMutation({
    mutationFn: async (image: string) => {
      const { data } = await axiosInstance.patch(
        "/u/update-userProfile/image",
        { image }
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

  return { updateHeaderImg, isLoading };
};
