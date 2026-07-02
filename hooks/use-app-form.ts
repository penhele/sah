"use client";

import CalendarField from "@/components/inputs/calendar-field";
import SubmitButton from "@/components/submit-button";
import InputField from "@/components/inputs/input-field";
import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import SelectField from "@/components/inputs/select-field";

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    InputField,
    CalendarField,
    SelectField
  },
  formComponents: {
    SubmitButton,
  },
});
