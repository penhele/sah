import { User } from "../user/types/user";

export interface Saving {
  id: string;
  amount: string;
  user: User;
  created_at: Date;
  updated_at: Date;
}
