import { format, subMonths } from "date-fns";

export interface SavingActivity {
  id: string;
  amount: number;
  userId: string;
  date: string;
  description: string;
  category: string;
  status: "completed" | "pending";
}

export interface MonthlyGrowth {
  month: string;
  amount: number;
}

export interface SavingsStats {
  totalBalance: number;
  totalIncomeThisMonth: number;
  totalIncomeLastMonth: number;
  growthPercentage: number;
}

// Mock Data
const generateMockActivities = (): SavingActivity[] => {
  const activities: SavingActivity[] = [];
  const categories = ["Gaji", "Bonus", "Hadiah", "Investasi", "Lainnya"];

  for (let i = 0; i < 20; i++) {
    const isThisMonth = i < 8;
    const date = isThisMonth
      ? new Date(2026, 5, Math.floor(Math.random() * 28) + 1) // June 2026
      : new Date(2026, 4, Math.floor(Math.random() * 28) + 1); // May 2026

    activities.push({
      id: `SAV-${1000 + i}`,
      amount: Math.floor(Math.random() * 5000000) + 500000, // 500k to 5.5m
      userId: "user-1",
      date: date.toISOString(),
      description: `Pemasukan Tabungan ${i + 1}`,
      category: categories[Math.floor(Math.random() * categories.length)],
      status: Math.random() > 0.1 ? "completed" : "pending",
    });
  }

  return activities.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
};

const mockActivities = generateMockActivities();

const generateMonthlyGrowth = (): MonthlyGrowth[] => {
  const data: MonthlyGrowth[] = [];
  let currentBase = 10000000; // Start with 10M

  for (let i = 6; i >= 0; i--) {
    const monthDate = subMonths(new Date(2026, 5, 1), i);
    const growth = Math.floor(Math.random() * 8000000) + 2000000;
    currentBase += growth;

    data.push({
      month: format(monthDate, "MMM"),
      amount: currentBase,
    });
  }

  return data;
};

const mockMonthlyGrowth = generateMonthlyGrowth();

export const savingsApi = {
  getActivities: async (): Promise<SavingActivity[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockActivities), 800);
    });
  },

  getMonthlyGrowth: async (): Promise<MonthlyGrowth[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockMonthlyGrowth), 800);
    });
  },

  getStats: async (): Promise<SavingsStats> => {
    return new Promise((resolve) => {
      const totalBalance =
        mockMonthlyGrowth[mockMonthlyGrowth.length - 1].amount;
      const totalIncomeThisMonth = mockActivities
        .filter((a) => new Date(a.date).getMonth() === 5)
        .reduce((sum, a) => sum + a.amount, 0);
      const totalIncomeLastMonth = mockActivities
        .filter((a) => new Date(a.date).getMonth() === 4)
        .reduce((sum, a) => sum + a.amount, 0);

      const growthPercentage =
        totalIncomeLastMonth === 0
          ? 100
          : ((totalIncomeThisMonth - totalIncomeLastMonth) /
              totalIncomeLastMonth) *
            100;

      setTimeout(
        () =>
          resolve({
            totalBalance,
            totalIncomeThisMonth,
            totalIncomeLastMonth,
            growthPercentage,
          }),
        800,
      );
    });
  },
};
