import { queryOptions } from "@tanstack/react-query";
import { getSavings } from "../api/get-savings";
import { savingsKeys } from "./saving-keys";

export const getSavingsQueryOptions = () =>
  queryOptions({
    queryFn: getSavings,
    queryKey: savingsKeys.all,
    initialData: 1000 * 60 * 5,
  });
