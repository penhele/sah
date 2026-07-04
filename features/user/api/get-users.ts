import { api } from "@/lib/api/axios";
import { User } from "../types/user";

export const getUsers = async (): Promise<User[]> => {
  const { data } = await api.get("/users");

  return data;
};
