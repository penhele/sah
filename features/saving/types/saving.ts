import { User } from "@/features/user/types/user";

export interface Saving {
  id: string;
  amount: number;
  date: Date;
  user: User;
  created_at: Date;
  updated_at: Date;
}
