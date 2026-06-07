import { Saving } from "@/features/saving/types/saving";
import { formatter } from "@/lib/format-currency";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { ColumnDef } from "@tanstack/react-table";

interface GetColumnsProps {
  excludeFields?: ("id" | "jumlah" | "nama" | "tanggal")[];
}

export const getSavingColumns = ({
  excludeFields = [],
}: GetColumnsProps = {}): ColumnDef<Saving>[] => {
  const allColumns: (ColumnDef<Saving> & { id: string })[] = [
    {
      id: "id", // Kita beri ID eksplisit untuk mempermudah filtering
      accessorKey: "id",
      header: "ID",
    },
    {
      id: "jumlah",
      header: "Jumlah",
      cell: ({ row }) => {
        return <span>{formatter.format(Number(row.original.amount))}</span>;
      },
    },
    {
      id: "nama",
      header: "Nama",
      cell: ({ row }) => {
        return <span>{row.original.user?.name}</span>;
      },
    },
    {
      id: "tanggal",
      header: "Tanggal",
      cell: ({ row }) => {
        return (
          <span>
            {format(new Date(row.original.date), "EEEE, dd MMMM yyyy", {
              locale: id,
            })}
          </span>
        );
      },
    },
  ];

  return allColumns.filter((col) => !excludeFields.includes(col.id as any));
};
