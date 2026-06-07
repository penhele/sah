import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SavingForm from "./saving-form";
import { useMutation } from "@tanstack/react-query";
import { addSaving } from "../api/add-saving";
import { toast } from "sonner";

type Props = {
  className?: string;
};

export default function CreateSavingForm({ className }: Props) {
  const { mutateAsync } = useMutation({
    mutationFn: addSaving,
    onSuccess(data, variables, onMutateResult, context) {
      toast.success("Berhasil");
    },
    onError(error, variables, onMutateResult, context) {
      toast.error("Gagal");
    },
  });

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Input Tabungan</CardTitle>
      </CardHeader>

      <CardContent>
        <SavingForm
          defaultValues={{
            userId: "",
            amount: 0,
            date: "",
          }}
          onSubmit={async (value) => await mutateAsync(value)}
          className={className}
        />
      </CardContent>
    </Card>
  );
}
