"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAppForm } from "@/hooks/use-app-form";
import { useMutation } from "@tanstack/react-query";
import { Lock, Mail } from "lucide-react";
import { login } from "../api/login";
import { LoginPayload } from "../types/login-payload";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/routes";

export default function LoginForm() {
  const router = useRouter();

  const { mutateAsync } = useMutation({
    mutationFn: (data: LoginPayload) => login(data),
    onMutate(variables, context) {
      const toastId = toast.loading("Login...");
      return { toastId };
    },
    onSuccess(data, variables, onMutateResult, context) {
      toast.success("Berhasil", { id: onMutateResult.toastId });
      router.push(ROUTES.HOME);
    },
    onError(error, variables, onMutateResult, context) {
      toast.error("Gagal", { id: onMutateResult?.toastId });
    },
  });

  const form = useAppForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      await mutateAsync(value);
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
            <field.TextField
              label="Email"
              type="email"
              placeholder="john@doe.com"
              IconAddon={Mail}
            />
          )}
        </form.AppField>

        <form.AppField name="password">
          {(field) => (
            <field.TextField
              label="Password"
              type="password"
              placeholder="∗∗∗∗∗∗∗∗"
              IconAddon={Lock}
            />
          )}
        </form.AppField>

        <form.SubmitButton label="Sign In" className="w-full" />
      </form>
    </form.AppForm>
  );
}
