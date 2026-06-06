import { CreateSavingPayload } from "@/features/types/create-saving-payload";
import { api } from "@/lib/api/axios";

export const addSaving = async (data: CreateSavingPayload) => {
  const response = await api.post("/saving", data);

  return response.data;
};
