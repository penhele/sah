import { api } from "@/lib/api/axios";

export const deleteSaving = async (id: string | number) => {
  const response = await api.delete(`/savings/${id}`);

  return response.data;
};
