import { api } from "@/lib/api/axios";
import { CreateSavingPayload } from "../types/create-saving-payload";

export const addSaving = async (data: CreateSavingPayload) => {
  const response = await api.post("/saving", data);

  return response.data;
};
