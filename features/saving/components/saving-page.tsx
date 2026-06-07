"use client";

import { DataTable } from "@/components/data-table";
import { savingColumns } from "@/features/home/components/saving-columns";
import { useSavings } from "../hooks/use-savings";
import SavingForm from "./saving-form";
import CreateSavingForm from "./create-saving-form";

export default function SavingPage() {
  const { data: savings = [] } = useSavings();

  return (
    <div className="px-4 grid grid-cols-3 gap-4">
      <CreateSavingForm />

      <DataTable
        columns={savingColumns}
        data={savings}
        title="Pemasukan"
        className="col-span-2"
      />
    </div>
  );
}
