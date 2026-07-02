import { useAppForm } from "@/hooks/use-app-form";
import { cn } from "@/lib/utils";
import { createSavingSchema, SavingFormValues } from "../schemas/saving.schema";
import { revalidateLogic } from "@tanstack/react-form";
import { SheetContent } from "@/components/ui/sheet";

type Props = {
  className?: string;
  defaultValues: SavingFormValues;
  onSubmit: (values: SavingFormValues) => void;
  isDisabled: boolean;
  loading?: boolean;
};

export default function SavingForm({
  className,
  defaultValues,
  onSubmit,
  isDisabled,
  loading,
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
      await onSubmit(value);
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
            <field.TextField label="Nama" isDisabled={isDisabled} readonly />
          )}
        </form.AppField>

        <form.AppField name="amount">
          {(field) => (
            <field.TextField
              label="Nominal"
              isDisabled={isDisabled}
              type="number"
              placeholder="1.000.000"
            />
          )}
        </form.AppField>

        <form.AppField name="date">
          {(field) => <field.CalendarField label="Date" />}
        </form.AppField>

        <form.SubmitButton
          label="Saving"
          className="w-full"
          loading={loading}
        />
      </form>
    </form.AppForm>
  );
}
