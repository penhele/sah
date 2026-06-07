import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { useSavings } from "@/features/saving/hooks/use-savings";
import { formatter } from "@/lib/format-currency";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

export default function CardChart() {
  const { data: savings = [] } = useSavings();

  const chartConfig = {
    Stephen: {
      label: "Stephen",
      color: "#2563eb", // Warna Biru
    },
    Ivana: {
      label: "Ivana",
      color: "#ec4899", // Warna Pink
    },
  } satisfies ChartConfig;

  // --- PROSES TRANSFORMAASI DATA UNTUK GRAFIK MULTI-USER ---
  const chartData = Object.values(
    savings.reduce(
      (acc, item) => {
        // Ambil tanggal saja (YYYY-MM-DD) atau jam untuk unique key sumbu X
        // Di sini kita pakai format ISO String utuh agar presisi, atau disingkat sesuai kebutuhan
        const dateKey = format(item.date, "MMMM", { locale: id });
        const userName = item.user?.name || "Unknown";
        const amountNum = Number(item.amount) || 0;

        if (!acc[dateKey]) {
          acc[dateKey] = {
            created_at: dateKey,
            // Inisialisasi awal agar grafik tidak putus jika salah satu user tidak ada data
            Stephen: 0,
            Ivana: 0,
          };
        }

        // Tambahkan amount ke nama user yang bersangkutan
        acc[dateKey][userName] = (acc[dateKey][userName] || 0) + amountNum;

        return acc;
      },
      {} as Record<string, any>,
    ),
  ).sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
  ); // Urutkan kronologis awal-akhir

  return (
    <Card>
      <CardHeader>
        <CardTitle>Grafik</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-56 w-full">
          {/* 1. Masukkan chartData hasil transformasi tadi */}
          <AreaChart data={chartData}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey={"created_at"}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <YAxis
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => formatter.format(value)}
            />

            <Area
              dataKey="Stephen"
              type="monotone"
              fill="var(--color-Stephen)"
              stroke="var(--color-Stephen)"
            />
            <Area
              dataKey="Ivana"
              type="monotone"
              fill="var(--color-Ivana)"
              stroke="var(--color-Ivana)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
