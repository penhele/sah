import { useQuery } from "@tanstack/react-query";
import { getUsersQueryOptions } from "../queries/user-queries";

export const useUsers = () => useQuery(getUsersQueryOptions());
