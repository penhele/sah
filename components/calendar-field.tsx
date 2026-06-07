import React from "react";
import { Calendar } from "./ui/calendar";
import { useFieldContext } from "@/hooks/use-app-form";
import { Field, FieldLabel } from "./ui/field";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { parseISO } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarFold } from "lucide-react";
import { formatDate } from "@/lib/format/date";

type Props = {
  label: string;
  placeholder?: string;
  isDisabled?: boolean;
};

export default function CalendarField({
  label,
  placeholder = "Pick a date",
  isDisabled,
}: Props) {
  const field = useFieldContext<string>();

  const currentValue = field.state.value
    ? parseISO(field.state.value)
    : undefined;

  return (
    <Field className="space-y-between-items-xs">
      <div className="flex justify-between items-center">
        <FieldLabel>{label}</FieldLabel>

        {/* <FieldInfo field={field} /> */}
      </div>

      <Popover>
        <PopoverTrigger asChild disabled={isDisabled}>
          <Button
            className={cn(
              "text-left justify-start w-full flex font-normal",
              !currentValue &&
                "text-muted-foreground hover:text-muted-foreground",
            )}
            variant={"outline"}
          >
            <CalendarFold />
            {currentValue ? formatDate(currentValue.toString()) : placeholder}
          </Button>
        </PopoverTrigger>

        <PopoverContent>
          <Calendar
            selected={currentValue}
            onSelect={(selectedDate: Date | undefined) => {
              if (selectedDate) {
                field.handleChange(selectedDate.toISOString());
              }
            }}
            mode="single"
            captionLayout="dropdown"
            disabled={(date) =>
              date > new Date(new Date().setHours(0, 0, 0, 0))
            }
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
