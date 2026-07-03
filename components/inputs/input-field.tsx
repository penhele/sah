import { useFieldContext } from "@/hooks/use-app-form";
import { Field, FieldLabel } from "../ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { Eye, EyeOff, LucideIcon, Mail } from "lucide-react";
import { useState } from "react";
import { formatNumber } from "@/lib/format/format-currency";

type Props = {
  label: string;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password";
  readonly?: boolean;
  isDisabled?: boolean;
  IconAddon?: LucideIcon;
};

export default function InputField({
  label,
  type,
  placeholder,
  readonly,
  isDisabled,
  IconAddon,
}: Props) {
  const field = useFieldContext<string>();

  const [showPassword, setShowPassword] = useState(false);

  const rawValue = field.state.value;
  const displayValue = type === "number" ? formatNumber(rawValue) : rawValue;

  const getInputType = () => {
    if (type === "password") {
      return showPassword ? "text" : "password";
    }
    // PERBAIKAN: Jika tipenya number, gunakan "text" agar browser mau menampilkan titik (.) pemisah ribuan
    if (type === "number") {
      return "text";
    }
    return type;
  };

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
          value={displayValue || ""}
          onChange={(e) => {
            if (type === "number") {
              const cleanValue = e.target.value.replace(/\D/g, "");
              field.handleChange(cleanValue);
            } else {
              field.handleChange(e.target.value);
            }
          }}
          type={getInputType()}
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
