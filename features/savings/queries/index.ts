export const savingsKeys = {
  all: ['savings'] as const,
  activities: () => [...savingsKeys.all, 'activities'] as const,
  monthlyGrowth: () => [...savingsKeys.all, 'monthlyGrowth'] as const,
  stats: () => [...savingsKeys.all, 'stats'] as const,
};
