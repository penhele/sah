import { z, infer as zodInfer } from "zod";

export const createSavingSchema = z.object({
  userId: z.string().min(1),
  amount: z.number().min(1),
  date: z.string().min(1),
});

export type SavingFormValues = zodInfer<typeof createSavingSchema>;
