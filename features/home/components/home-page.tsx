"use client";

import { DataTable } from "@/components/data-table";
import { useMySavings } from "@/features/saving/hooks/use-my-savings";
import { useSavings } from "@/features/saving/hooks/use-savings";
import CardChart from "./chart-card";
import { getSavingColumns } from "./saving-columns";
import StatGrid from "./stat-grid";

export default function HomePage() {
  const { data: savings = [] } = useSavings();
  const { data: mySaving = [], me } = useMySavings();

  const columnsForMe = getSavingColumns({ excludeFields: ["id", "nama"] });
  const columnsForAll = getSavingColumns();

  return (
    <div className=" space-y-4">
      <StatGrid />

      <div className="grid grid-cols-3 gap-4">
        <DataTable
          title={`Pemasukan ${me?.name}`}
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
