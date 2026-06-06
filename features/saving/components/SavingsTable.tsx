"use client";

import { useGetSavingsActivities } from "../hooks/useSavings";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { id } from "date-fns/locale";

export const SavingsTable = () => {
  const { data: activities, isLoading } = useGetSavingsActivities();

  return (
    <Card className="rounded-2xl border-none shadow-sm col-span-1 md:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-semibold text-gray-800">
          Aktivitas Pemasukan
        </CardTitle>
        <span className="text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer font-medium">
          Lihat Semua
        </span>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="space-y-4 mt-4">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        ) : (
          <div className="mt-4 overflow-hidden rounded-xl border border-gray-100">
            <Table>
              <TableHeader className="bg-gray-50/50">
                <TableRow className="border-none hover:bg-transparent">
                  <TableHead className="w-[100px] text-gray-500 font-medium">
                    ID
                  </TableHead>
                  <TableHead className="text-gray-500 font-medium">
                    Tanggal
                  </TableHead>
                  <TableHead className="text-gray-500 font-medium">
                    Kategori
                  </TableHead>
                  <TableHead className="text-gray-500 font-medium">
                    Jumlah
                  </TableHead>
                  <TableHead className="text-right text-gray-500 font-medium">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities?.slice(0, 5).map((activity) => (
                  <TableRow
                    key={activity.id}
                    className="border-b border-gray-50 hover:bg-indigo-50/30 transition-colors"
                  >
                    <TableCell className="font-medium text-gray-900">
                      {activity.id}
                    </TableCell>
                    <TableCell className="text-gray-500">
                      {format(new Date(activity.date), "dd MMM yyyy", {
                        locale: id,
                      })}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-indigo-400" />
                        <span className="text-gray-700">
                          {activity.category}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-semibold text-gray-900">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        maximumFractionDigits: 0,
                      }).format(activity.amount)}
                    </TableCell>
                    <TableCell className="text-right">
                      <Badge
                        variant={
                          activity.status === "completed"
                            ? "default"
                            : "secondary"
                        }
                        className={
                          activity.status === "completed"
                            ? "bg-green-100 text-green-700 hover:bg-green-200 border-none px-3 py-1"
                            : "bg-orange-100 text-orange-700 hover:bg-orange-200 border-none px-3 py-1"
                        }
                      >
                        {activity.status === "completed"
                          ? "Selesai"
                          : "Tertunda"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
