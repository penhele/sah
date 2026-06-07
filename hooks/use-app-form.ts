"use client";

import CalendarField from "@/components/calendar-field";
import SubmitButton from "@/components/submit-button";
import TextField from "@/components/text-field";
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    TextField,
    CalendarField,
  },
  formComponents: {
    SubmitButton,
  },
});
