import { useQuery } from "@tanstack/react-query";
import { getSavingsByUserIdQueryOptions } from "../queries/saving-queries";

export const useSavingsByUserId = (userId: string) =>
  useQuery(getSavingsByUserIdQueryOptions(userId));
