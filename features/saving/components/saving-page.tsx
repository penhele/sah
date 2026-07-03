"use client";

import { DataTable } from "@/components/data-table";
import { getSavingColumns } from "@/features/home/components/saving-columns";
import { useMySavings } from "../hooks/use-my-savings";
import CreateSavingSheet from "./create-saving-sheet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMe } from "@/features/user/hooks/use-me";

export default function SavingPage() {
  const { data: me } = useMe();
  const { data: mySavings = [] } = useMySavings();

  const columnsForAll = getSavingColumns();

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Ivana</CardTitle>
          </CardHeader>

          <CardContent></CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Stephen</CardTitle>
          </CardHeader>

          <CardContent></CardContent>
        </Card>
      </div>

      <DataTable
        columns={columnsForAll}
        data={mySavings}
        title="Pemasukan"
        className="col-span-2"
        actions={<CreateSavingSheet />}
      />
    </div>
  );
}
