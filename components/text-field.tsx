import { useFieldContext } from "@/hooks/use-app-form";
import { Field, FieldLabel } from "./ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";
import { Eye, EyeOff, LucideIcon, Mail } from "lucide-react";
import { useState } from "react";

type Props = {
  label: string;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password";
  readonly?: boolean;
  isDisabled?: boolean;
  IconAddon?: LucideIcon;
};

export default function TextField({
  label,
  type,
  placeholder,
  readonly,
  isDisabled,
  IconAddon,
}: Props) {
  const field = useFieldContext<string>();

  const [showPassword, setShowPassword] = useState(false);

  console.log(field.state.value);
  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>

      <InputGroup>
        {type === "number" && <InputGroupAddon>Rp</InputGroupAddon>}

        {IconAddon && (
          <InputGroupAddon>
            <IconAddon />
          </InputGroupAddon>
        )}
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
          type={showPassword ? "text" : type}
          placeholder={placeholder}
          readOnly={readonly}
          disabled={isDisabled}
        />

        {type === "password" && (
          <InputGroupAddon align={"inline-end"}>
            <InputGroupButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Eye /> : <EyeOff />}
            </InputGroupButton>
          </InputGroupAddon>
        )}
      </InputGroup>
    </Field>
  );
}
