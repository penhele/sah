import { api } from "@/lib/api/axios";
import { UpdateSavingPayload } from "../types/update-saving-payload";

export const updateSaving = async (
  id: string | number,
  data: UpdateSavingPayload,
) => {
  const response = await api.put(`/savings/${id}`, data);

  return response.data;
};
