import { Card, CardContent } from "@/components/ui/card";
import { Wallet } from "lucide-react";

type Props = {
  title: string;
  value: number;
  description: string;
};

export default function StatCard({ title, value, description }: Props) {
  return (
    <Card>
      <CardContent className="relative space-y-4">
        <Wallet className="absolute top-0 right-4 opacity-5" size={56} />

        <div className="flex flex-row justify-between">
          <h1>{title}</h1>

          <div className=" bg-indigo-100 text-indigo-600 p-2 rounded-full">
            <Wallet size={16} />
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-2xl font-bold">IDR {value}</span>
          <span className="text-muted-foreground">{description}</span>
        </div>
      </CardContent>
    </Card>
  );
}
