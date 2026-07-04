import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useUsers } from "@/features/user/hooks/use-users";
import { Pie, PieChart } from "recharts";

export default function PieChartSaving() {
  const { data: users = [] } = useUsers();

  const chartConfig = users.reduce(
    (config, user, index) => {
      config[user.name] = {
        label: user.name.split(" ")[0],
        color: `var(--chart-${(index % 5) + 1})`,
      };
      return config;
    },
    {
      amount: { label: "Amount" },
    } as ChartConfig,
  );

  const chartData = users.map((user, index) => ({
    name: user.name,
    total: user.total_amount,
    fill: `var(--chart-${(index % 5) + 1})`,
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Grafik Pemasukan</CardTitle>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="total"
              labelLine={false}
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill="var(--foreground)"
                  >
                    {payload.name.split(" ")[0]}
                  </text>
                );
              }}
              nameKey="name"
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="name" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
