import { useFieldContext } from "@/hooks/use-app-form";
import { Field, FieldLabel } from "./ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

type Props = {
  label: string;
  placeholder?: string;
  type?: "text" | "number";
  readonly?: boolean;
};

export default function TextField({
  label,
  type,
  placeholder,
  readonly,
}: Props) {
  const field = useFieldContext<string>();

  console.log(field.state.value);
  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>

      <InputGroup>
        {type === "number" && <InputGroupAddon>Rp</InputGroupAddon>}
        <InputGroupInput
          value={field.state.value}
          onChange={(e) => {
            if (type === "number") {
              const rawValue = e.target.value.replace(/\D/g, "");

              field.handleChange(rawValue);
            } else {
              field.handleChange(e.target.value);
            }
          }}
          type={type}
          placeholder={placeholder}
          readOnly={readonly}
        />
      </InputGroup>
    </Field>
  );
}
