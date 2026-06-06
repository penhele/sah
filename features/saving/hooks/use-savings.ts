import { useQuery } from "@tanstack/react-query";
import { getSavingsQueryOptions } from "../queries/saving-queries";

export const useSavings = () => {
  return useQuery(getSavingsQueryOptions());
};
