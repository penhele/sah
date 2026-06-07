"use client";

import { DataTable } from "@/components/data-table";
import { useSavings } from "@/features/saving/hooks/use-savings";
import { useMe } from "@/features/user/hooks/use-me";
import { formatter } from "@/lib/format-currency";
import { Target, TrendingUp, Wallet } from "lucide-react";
import { useMemo } from "react";
import CardChart from "./chart-card";
import { getSavingColumns } from "./saving-columns";
import StatCard from "./stat-card";

export default function HomePage() {
  const { data: savings = [] } = useSavings();
  const { data: me } = useMe();

  const mySaving = useMemo(() => {
    return savings.filter((item) => item.user.id === me?.id);
  }, [savings]);

  const total =
    savings?.reduce(
      (acumulator, saving) => acumulator + Number(saving.amount),
      0,
    ) ?? 0;

  const columnsForMe = getSavingColumns({ excludeFields: ["id", "nama"] });
  const columnsForAll = getSavingColumns();

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
    <div className=" space-y-4">
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
      <div className="grid grid-cols-3 gap-4">
        {/* <Card>
          <CardHeader>
            <CardTitle>Aktivitas</CardTitle>
          </CardHeader>

          <CardContent className="space-y-2">
            <div className="border p-2 rounded-lg bg-muted flex flex-row items-center">
              <div className="flex flex-col space-y-1">
                <span>Stephen Helenus</span>
                <span className="text-lg font-bold">
                  {formatter.format(54000000)}
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-1 border p-2 rounded-lg bg-muted">
              <span>Ivana Novelia</span>
              <span className="text-lg font-bold">
                {formatter.format(54000000)}
              </span>
            </div>
          </CardContent>
        </Card> */}

        <DataTable
          title="Pemasukan Stephen"
          data={mySaving}
          columns={columnsForMe}
        />

        <DataTable
          columns={columnsForAll}
          data={savings || []}
          title="Pemasukan"
          className="col-span-2"
        />
      </div>

      <CardChart />
    </div>
  );
}
