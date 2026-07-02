import { useFieldContext } from "@/hooks/use-app-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Field, FieldLabel } from "../ui/field";

interface Props {
  label: string;
  placeholder?: string;
  options: { label: string; value: string | number }[];
}

export default function SelectField({ label, placeholder, options }: Props) {
  const field = useFieldContext<string>();

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <Select
        value={field.state.value}
        onValueChange={field.handleChange}
        onOpenChange={(open) => {
          if (!open) {
            field.handleBlur();
          }
        }}
      >
        <SelectTrigger id={field.name}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value.toString()}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Field>
  );
}
