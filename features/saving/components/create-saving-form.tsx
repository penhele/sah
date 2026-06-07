import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SavingForm from "./saving-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSaving } from "../api/add-saving";
import { toast } from "sonner";
import { useMe } from "@/features/user/hoos/use-me";
import { CreateSavingPayload } from "../types/create-saving-payload";
import { savingsKeys } from "../queries/saving-keys";

type Props = {
  className?: string;
};

export default function CreateSavingForm({ className }: Props) {
  const { data: me, isLoading } = useMe();

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: (data: CreateSavingPayload) => addSaving(data),
    onSuccess(data, variables, onMutateResult, context) {
      toast.success("Berhasil");
      queryClient.invalidateQueries({ queryKey: savingsKeys.all });
    },
    onError(error, variables, onMutateResult, context) {
      toast.error("Gagal");
    },
  });

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle>Input Tabungan</CardTitle>
      </CardHeader>

      <CardContent>
        <SavingForm
          defaultValues={{
            userId: me?.id ?? "",
            amount: "",
            date: "",
          }}
          onSubmit={async (value) => await mutateAsync(value)}
          className={className}
          isLoading={isLoading}
        />
      </CardContent>
    </Card>
  );
}
