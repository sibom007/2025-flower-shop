import { instance as axiosInstance } from "@/lib/axiosInstance";

export const getUserByToken = async (token: string) => {
  if (token) {
    const response = await axiosInstance.get(`/u/user-by-token`, {
      params: {
        token: token,
      },
    });
    return response.data.data;
  }
};
