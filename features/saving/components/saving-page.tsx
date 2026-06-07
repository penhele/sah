"use client";

import { DataTable } from "@/components/data-table";
import { getSavingColumns } from "@/features/home/components/saving-columns";
import { useMySavings } from "../hooks/use-my-savings";
import CreateSavingSheet from "./create-saving-sheet";

export default function SavingPage() {
  const { data: mySaving = [], me } = useMySavings();

  const columnsForAll = getSavingColumns();

  return (
    <div className="grid grid-cols-3 gap-4">
      <DataTable
        columns={columnsForAll}
        data={mySaving}
        title="Pemasukan"
        className="col-span-3"
        actions={<CreateSavingSheet />}
      />
    </div>
  );
}
