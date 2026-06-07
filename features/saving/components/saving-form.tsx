import { useAppForm } from "@/hooks/use-app-form";
import { cn } from "@/lib/utils";
import { createSavingSchema, SavingFormValues } from "../schemas/saving.schema";
import { revalidateLogic } from "@tanstack/react-form";

type Props = {
  className?: string;
  defaultValues: SavingFormValues;
  onSubmit: (values: SavingFormValues) => void;
};

export default function SavingForm({
  className,
  defaultValues,
  onSubmit,
}: Props) {
  const form = useAppForm({
    defaultValues: defaultValues,
    validators: {
      onChange: createSavingSchema,
    },
    validationLogic: revalidateLogic({
      mode: "submit",
      modeAfterSubmission: "blur",
    }),
    onSubmit: async ({ value }) => {
      onSubmit(value);
    },
  });

  return (
    <form.AppForm>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className={cn("space-y-4", className)}
      >
        <form.AppField name="userId">
          {(field) => <field.TextField label="Nama" readonly />}
        </form.AppField>

        <form.AppField name="amount">
          {(field) => <field.TextField label="Nominal" type="number" />}
        </form.AppField>

        <form.SubmitButton label="Saving" className="w-full" />
      </form>
    </form.AppForm>
  );
}
