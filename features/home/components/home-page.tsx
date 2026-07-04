"use client";

import { DataTable } from "@/components/data-table";
import { useMySavings } from "@/features/saving/hooks/use-my-savings";
import { useSavings } from "@/features/saving/hooks/use-savings";
import { useMe } from "@/features/user/hooks/use-me";
import CardChart from "./chart-card";
import { getSavingColumns } from "./saving-columns";
import StatGrid from "./stat-grid";
import PieChartSaving from "./pie-chart-saving";

export default function HomePage() {
  const { data: me } = useMe();
  const { data: savings = [] } = useSavings();
  const { data: mySavings = [] } = useMySavings();

  const columnsForMe = getSavingColumns({ excludeFields: ["nama"] });
  const columnsForAll = getSavingColumns();

  return (
    <div className="space-y-4">
      <div className="flex flex-col">
        <span className="text-sm text-muted-foreground">Selamat datang,</span>
        <span className="font-bold text-2xl">{me?.name}</span>
      </div>

      <StatGrid />

      <div className="grid grid-cols-3 gap-4">
        <DataTable
          title={`Pemasukan ${me?.name}`}
          data={mySavings}
          columns={columnsForMe}
        />

        <DataTable
          columns={columnsForAll}
          data={savings || []}
          title="Pemasukan"
          className="col-span-2"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <CardChart />

        <PieChartSaving />
      </div>
    </div>
  );
}
