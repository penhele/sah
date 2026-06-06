import { UpdateSavingPayload } from "@/features/types/update-saving-payload";
import { api } from "@/lib/api/axios";

export const updateSaving = async (
  id: string | number,
  data: UpdateSavingPayload,
) => {
  const response = await api.put(`/savings/${id}`, data);

  return response.data;
};
