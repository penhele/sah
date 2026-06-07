import { useQuery } from "@tanstack/react-query";
import { getMeQueryOptions } from "../queries/user-queries";

export const useMe = () => {
  return useQuery(getMeQueryOptions());
};
