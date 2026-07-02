import { api } from "@/lib/api/axios";
import { Saving } from "../types/saving";

export const getSavingsByUserId = async (userId: string): Promise<Saving[]> => {
  const response = await api.get(`/savings/user/${userId}`);

  return response.data;
};
