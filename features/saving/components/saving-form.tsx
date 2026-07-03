import { useAppForm } from "@/hooks/use-app-form";
import { cn } from "@/lib/utils";
import { createSavingSchema, SavingFormValues } from "../schemas/saving.schema";
import { revalidateLogic } from "@tanstack/react-form";
import { SheetContent } from "@/components/ui/sheet";
import { useMe } from "@/features/user/hooks/use-me";

interface Props {
  className?: string;
  defaultValues: SavingFormValues;
  onSubmit: (values: SavingFormValues) => void;
  isDisabled: boolean;
  loading?: boolean;
}

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

  const { data: me } = useMe();

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
          {(field) => {
            const userOptions = me
              ? Array.isArray(me)
                ? me.map((u) => ({ label: u.name, value: u.id })) // Jika 'me' berbentuk Array
                : [{ label: me.name, value: me.id }] // Jika 'me' berbentuk Single Object
              : [];

            return <field.SelectField label="Nama" options={userOptions} />;
          }}
        </form.AppField>

        <form.AppField name="amount">
          {(field) => (
            <field.InputField
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
          className="w-full mt-auto"
          loading={loading}
        />
      </form>
    </form.AppForm>
  );
}
