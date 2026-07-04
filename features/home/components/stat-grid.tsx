import { formatter } from "@/lib/format-currency";
import StatCard from "./stat-card";
import { Target, TrendingUp, Wallet } from "lucide-react";
import { useSavings } from "@/features/saving/hooks/use-savings";

export default function StatGrid() {
  const { data: savings } = useSavings();
  const total =
    savings?.reduce(
      (acumulator, saving) => acumulator + Number(saving.amount),
      0,
    ) ?? 0;

  const currentDate = new Date();

  const monthlyTotal =
    savings?.reduce((accumulator, saving) => {
      const savingDate = new Date(saving.date);

      const isCurrentMonth =
        savingDate.getMonth() === currentDate.getMonth() &&
        savingDate.getFullYear() === currentDate.getFullYear();

      return isCurrentMonth ? accumulator + Number(saving.amount) : accumulator;
    }, 0) ?? 0;

  const TARGET_SAVING = 40_000_000;
  const savingProgress = Math.min((total / TARGET_SAVING) * 100, 100);

  const items = [
    {
      title: "Total Tabungan",
      value: formatter.format(total),
      description: "Akumulasi seluruh tabungan pernikahan",
      Icon: Wallet,
    },
    {
      title: "Pemasukan Bulan Ini",
      value: formatter.format(monthlyTotal),
      description: "VS bulan lalu",
      Icon: TrendingUp,
    },
    {
      title: "Target Menabung",
      value: `${savingProgress.toFixed(2)} %`,
      description: `${formatter.format(total)} dari ${formatter.format(TARGET_SAVING)}`,
      Icon: Target,
      isProgress: true,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item, index) => (
        <StatCard
          key={index}
          title={item.title}
          description={item.description}
          value={item.value}
          Icon={item.Icon}
          isProgress={item.isProgress}
        />
      ))}
    </div>
  );
}
