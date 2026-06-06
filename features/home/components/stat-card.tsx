import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
import { LucideIcon, Wallet } from "lucide-react";

type Props = {
  title: string;
  value: number | string;
  description: string;
  isProgress?: boolean;
  Icon: LucideIcon;
};

export default function StatCard({
  title,
  value,
  description,
  Icon,
  isProgress,
}: Props) {
  return (
    <Card>
      <CardContent className="relative space-y-4">
        <Icon className="absolute top-0 right-4 opacity-5" size={56} />

        <div className="flex flex-row justify-between">
          <h1>{title}</h1>

          <div className=" bg-indigo-100 text-indigo-600 p-2 rounded-full">
            <Icon size={16} />
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          <span className="text-2xl font-bold">{value}</span>

          {isProgress ? (
            <Progress value={Number(value)} className="h-2 flex items-end" />
          ) : (
            <span className="text-muted-foreground">{description}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
