import { useMe } from "@/features/user/hooks/use-me";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { gooeyToast } from "goey-toast";
import { addSaving } from "../api/add-saving";
import { savingsKeys } from "../queries/saving-keys";
import { CreateSavingPayload } from "../types/create-saving-payload";
import SavingForm from "./saving-form";

interface Props {
  className?: string;
}

export default function CreateSavingForm({ className }: Props) {
  const { data: me, isLoading } = useMe();
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: CreateSavingPayload) => addSaving(data),
  });

  const handleSubmit = (value: CreateSavingPayload) => {
    gooeyToast.promise(mutateAsync(value), {
      loading: "Creating...",
      success: () => {
        queryClient.invalidateQueries({ queryKey: savingsKeys.all });
        return "Berhasil";
      },
      error: "Gagal",
    });
  };

  return (
    <SavingForm
      defaultValues={{
        userId: me?.id ?? "",
        amount: "",
        date: new Date().toISOString(),
      }}
      onSubmit={handleSubmit}
      className={className}
      isDisabled={isLoading}
      loading={isPending}
    />
  );
}
