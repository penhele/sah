import { useQuery } from "@tanstack/react-query";
import { getSavingByIdQueryOptions } from "../queries/saving-queries";

export const useSaving = (id: string | number) => {
  return useQuery(getSavingByIdQueryOptions(id));
};
