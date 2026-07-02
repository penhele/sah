import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useFormContext } from "@/hooks/use-app-form";
import { Spinner } from "./ui/spinner";

interface Props {
  label: string;
  className?: string;
  loading?: boolean;
}

export default function SubmitButton({ label, className, loading }: Props) {
  const form = useFormContext();

  return (
    <form.Subscribe
      selector={(state) => ({
        isSubmitting: state.isSubmitting,
        canSubmit: state.canSubmit,
      })}
    >
      {({ isSubmitting, canSubmit }) => (
        <Button type="submit" className={cn(className)}>
          {isSubmitting || loading ? <Spinner /> : label}
        </Button>
      )}
    </form.Subscribe>
  );
}
