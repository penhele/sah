"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useSavings } from "@/features/saving/hooks/use-savings";
import StatCard from "./stat-card";
import { DataTable } from "@/components/data-table";
import { savingColumns } from "./saving-columns";
import { Target, TrendingUp, Wallet } from "lucide-react";

export default function HomePage() {
  const { data: savings } = useSavings();
  const total =
    savings?.reduce(
      (acumulator, saving) => acumulator + Number(saving.amount),
      0,
    ) ?? 0;

  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const items = [
    {
      title: "Total Tabungan",
      value: formatter.format(total),
      description: "Akumulasi seluruh tabungan pernikahan",
      Icon: Wallet,
    },
    {
      title: "Pemasukan Bulan Ini",
      value: formatter.format(total),
      description: "VS bulan lalu",
      Icon: TrendingUp,
    },
    {
      title: "Target Menabung",
      value: 20,
      description: "Akumulasi seluruh tabungan pernikahan",
      Icon: Target,
      isProgress: true,
    },
  ];

  return (
    <div className="px-4 space-y-4">
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

      <DataTable columns={savingColumns} data={savings || []} />
    </div>
  );
}
