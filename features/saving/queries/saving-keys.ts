export const savingsKeys = {
  all: ["savings"] as const,
  detail: (id: string | number) => [...savingsKeys.all, id] as const,
  activities: () => [...savingsKeys.all, "activities"] as const,
  monthlyGrowth: () => [...savingsKeys.all, "monthlyGrowth"] as const,
  stats: () => [...savingsKeys.all, "stats"] as const,

  mySavings: (userId: string) => [...savingsKeys.all, userId] as const,
};
