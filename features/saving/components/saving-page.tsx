"use client";

import { DataTable } from "@/components/data-table";
import { getSavingColumns } from "@/features/home/components/saving-columns";
import { useSavings } from "../hooks/use-savings";
import CreateSavingForm from "./create-saving-form";

export default function SavingPage() {
  const { data: savings = [] } = useSavings();

  const columnsForAll = getSavingColumns();

  return (
    <div className="grid grid-cols-3 gap-4">
      <CreateSavingForm />

      <DataTable
        columns={columnsForAll}
        data={savings}
        title="Pemasukan"
        className="col-span-2"
      />
    </div>
  );
}
