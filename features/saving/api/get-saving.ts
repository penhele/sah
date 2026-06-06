import { Saving } from "@/features/types/saving";
import { api } from "@/lib/api/axios";

export const getSaving = async (id: string | number): Promise<Saving> => {
  const response = await api.get(`/savings/${id}`);

  return response.data;
};
