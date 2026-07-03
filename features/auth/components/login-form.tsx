"use client";

import { ROUTES } from "@/constants/routes";
import { useAppForm } from "@/hooks/use-app-form";
import { useMutation } from "@tanstack/react-query";
import { goeyToast } from "goey-toast";
import { Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { login } from "../api/login";
import { LoginPayload } from "../types/login-payload";

export default function LoginForm() {
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: (data: LoginPayload) => login(data),
  });

  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ value }) => {
      goeyToast.promise(mutateAsync(value), {
        loading: "Log in...",
        success: () => {
          router.push(ROUTES.HOME);
          return "Berhasil";
        },
        error: "Gagal",
      });
    },
  });

  return (
    <form.AppForm>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="space-y-4"
      >
        <form.AppField name="email">
          {(field) => (
            <field.InputField
              label="Email"
              type="email"
              placeholder="john@doe.com"
              IconAddon={Mail}
            />
          )}
        </form.AppField>

        <form.AppField name="password">
          {(field) => (
            <field.InputField
              label="Password"
              type="password"
              placeholder="∗∗∗∗∗∗∗∗"
              IconAddon={Lock}
            />
          )}
        </form.AppField>

        <form.SubmitButton
          label="Sign In"
          className="w-full"
          loading={isPending}
        />
      </form>
    </form.AppForm>
  );
}
