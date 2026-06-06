import { api } from "@/lib/api/axios";
import { Saving } from "../types/saving";

export const getSavings = async (): Promise<Saving[]> => {
  const response = await api.get("/savings");
  
  return response.data;
};
