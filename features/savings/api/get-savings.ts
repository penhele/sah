import { api } from "@/lib/api/axios";

export const getSavings = async () => {
  const response = await api.get("/savings");
  return response.data;
};
