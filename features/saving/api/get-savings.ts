import { Saving } from "@/features/types/saving";
import { api } from "@/lib/api/axios";

export const getSavings = async (): Promise<Saving[]> => {
  const response = await api.get("/savings");
  return response.data;
};
