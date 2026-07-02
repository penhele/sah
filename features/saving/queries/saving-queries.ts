import { queryOptions } from "@tanstack/react-query";
import { getSavings } from "../api/get-savings";
import { savingsKeys } from "./saving-keys";
import { getSaving } from "../api/get-saving";
import { getSavingsByUserId } from "../api/get-savings-by-user-id";

export const getSavingsQueryOptions = () =>
  queryOptions({
    queryFn: getSavings,
    queryKey: savingsKeys.all,
    staleTime: 1000 * 60 * 5,
  });

export const getSavingsByUserIdQueryOptions = (userId: string) =>
  queryOptions({
    queryFn: () => getSavingsByUserId(userId),
    queryKey: savingsKeys.mySavings(userId),
    staleTime: 1000 * 60 * 5,
  });

export const getSavingByIdQueryOptions = (id: string | number) =>
  queryOptions({
    queryFn: () => getSaving(id),
    queryKey: savingsKeys.detail(id),
    staleTime: 1000 * 60 * 5,
  });
