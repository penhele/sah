import { queryOptions } from "@tanstack/react-query";
import { getMe } from "../api/get-me";
import { getUsers } from "../api/get-users";
import { userKeys } from "./user-keys";

export const getMeQueryOptions = () => {
  return queryOptions({
    queryKey: userKeys.me,
    queryFn: getMe,
    staleTime: 1000 * 60 * 5,
  });
};

export const getUsersQueryOptions = () =>
  queryOptions({
    queryKey: userKeys.all,
    queryFn: getUsers,
    staleTime: 1000 * 60 * 5,
  });
