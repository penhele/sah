"use client";

import { DataTable } from "@/components/data-table";
import { savingColumns } from "@/features/home/components/saving-columns";
import { useSavings } from "../hooks/use-savings";

export default function SavingPage() {
  const { data: savings = [] } = useSavings();

  return (
    <div className="px-4">
        
        
      <DataTable columns={savingColumns} data={savings} title="Pemasukan" />
    </div>
  );
}
