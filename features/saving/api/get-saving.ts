import { api } from "@/lib/api/axios";
import { Saving } from "../types/saving";

export const getSaving = async (id: string | number): Promise<Saving> => {
  const response = await api.get(`/savings/${id}`);

  return response.data;
};
