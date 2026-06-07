import { useAppForm } from "@/hooks/use-app-form";
import { cn } from "@/lib/utils";
import { createSavingSchema, SavingFormValues } from "../schemas/saving.schema";
import { revalidateLogic } from "@tanstack/react-form";

type Props = {
  className?: string;
  defaultValues: SavingFormValues;
  onSubmit: (values: SavingFormValues) => void;
  isLoading: boolean;
};

export default function SavingForm({
  className,
  defaultValues,
  onSubmit,
  isLoading,
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
          {(field) => (
            <field.TextField label="Nama" isDisabled={isLoading} readonly />
          )}
        </form.AppField>

        <form.AppField name="amount">
          {(field) => (
            <field.TextField
              label="Nominal"
              isDisabled={isLoading}
              type="number"
            />
          )}
        </form.AppField>

        <form.AppField name="date">
          {(field) => <field.CalendarField label="Date" />}
        </form.AppField>

        <form.SubmitButton label="Saving" className="w-full" />
      </form>
    </form.AppForm>
  );
}
