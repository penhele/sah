import { Saving } from "@/features/saving/types/saving";
import { formatter } from "@/lib/format-currency";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { id } from "date-fns/locale";

export const savingColumns: ColumnDef<Saving>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    header: "Jumlah",
    cell: ({ row }) => {
      return <span>{formatter.format(row.original.amount)}</span>;
    },
  },
  {
    header: "Nama",
    cell: ({ row }) => {
      return <span>{row.original.user.name}</span>;
    },
  },
  {
    header: "Tanggal",
    cell: ({ row }) => {
      return (
        <span>
          {format(row.original.created_at, "EEEE, dd MMMM yyyy", {
            locale: id,
          })}
        </span>
      );
    },
  },
];
