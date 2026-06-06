"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useSavings } from "@/features/saving/hooks/use-savings";
import StatCard from "./stat-card";

export default function HomePage() {
  const { data: savings } = useSavings();
  const total =
    savings?.reduce(
      (acumulator, saving) => acumulator + Number(saving.amount),
      0,
    ) ?? 0;

  const items = [
    {
      title: "Total Tabungan",
      value: total,
      description: "Akumulasi seluruh tabungan pernikahan",
    },
    {
      title: "Total Tabungan",
      value: total,
      description: "Akumulasi seluruh tabungan pernikahan",
    },
    {
      title: "Total Tabungan",
      value: total,
      description: "Akumulasi seluruh tabungan pernikahan",
    },
  ];

  return (
    <div className="px-4">
      <div className="grid grid-cols-3 gap-4">
        {items.map((item, index) => (
          <StatCard
            key={index}
            title={item.title}
            description={item.description}
            value={item.value}
          />
        ))}
      </div>
    </div>
  );
}
