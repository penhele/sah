import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SavingForm from "./saving-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addSaving } from "../api/add-saving";
import { toast } from "sonner";
import { useMe } from "@/features/user/hooks/use-me";
import { CreateSavingPayload } from "../types/create-saving-payload";
import { savingsKeys } from "../queries/saving-keys";

type Props = {
  className?: string;
};

export default function CreateSavingForm({
  className,
  showHeader = true,
}: Props) {
  const { data: me, isLoading } = useMe();

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: (data: CreateSavingPayload) => addSaving(data),
    onMutate(variables, context) {
      const toastId = toast.loading("Creating...");
      return { toastId };
    },
    onSuccess(data, variables, onMutateResult, context) {
      toast.success("Berhasil", { id: onMutateResult?.toastId });
      queryClient.invalidateQueries({ queryKey: savingsKeys.all });
    },
    onError(error, variables, onMutateResult, context) {
      toast.error("Gagal", { id: onMutateResult?.toastId });
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
            date: new Date().toISOString(),
          }}
          onSubmit={async (value) => await mutateAsync(value)}
          className={className}
          isLoading={isLoading}
        />
      </CardContent>
    </Card>
  );
}
