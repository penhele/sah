"use client";

import { useMe } from "@/features/user/hooks/use-me";
import { useQuery } from "@tanstack/react-query";
import { getSavingsByUserIdQueryOptions } from "../queries/saving-queries";

export const useMySavings = () => {
  const { data: me } = useMe();

  return useQuery(getSavingsByUserIdQueryOptions(me?.id ?? ""));
};
