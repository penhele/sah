import { useQuery } from "@tanstack/react-query";
import { savingsApi } from "../api/savingsApi";
import { savingsKeys } from "../queries/saving-keys";

export const useGetSavingsActivities = () => {
  return useQuery({
    queryKey: savingsKeys.activities(),
    queryFn: savingsApi.getActivities,
  });
};

export const useGetMonthlyGrowth = () => {
  return useQuery({
    queryKey: savingsKeys.monthlyGrowth(),
    queryFn: savingsApi.getMonthlyGrowth,
  });
};

export const useGetSavingsStats = () => {
  return useQuery({
    queryKey: savingsKeys.stats(),
    queryFn: savingsApi.getStats,
  });
};
