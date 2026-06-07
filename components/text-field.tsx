import { useFieldContext } from "@/hooks/use-app-form";
import { Field, FieldLabel } from "./ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

type Props = {
  label: string;
  placeholder?: string;
  type?: "text" | "number";
};

export default function TextField({ label, type, placeholder }: Props) {
  const field = useFieldContext<string>();

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>

      <InputGroup>
        {type === "number" && <InputGroupAddon>Rp</InputGroupAddon>}
        <InputGroupInput
          value={field.state.value}
          onChange={(e) => {
            field.handleChange(e.target.value);
          }}
          type={type ? "text" : type}
          placeholder={placeholder}
        />
      </InputGroup>
    </Field>
  );
}
