import { api } from "@/lib/api/axios";
import { LoginPayload } from "../types/login-payload";
import Cookies from "js-cookie";

export const login = async (data: LoginPayload) => {
  const response = await api.post("/auth/login", data);

  Cookies.set("access_token", response.data.access_token);

  return response;
};
