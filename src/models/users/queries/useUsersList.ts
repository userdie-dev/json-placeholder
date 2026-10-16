import { useQuery } from "@tanstack/vue-query";
import { usersApi } from "../api/users.api";
import { usersKeys } from "./keys";

export const useUsersList = () =>
  useQuery({
    queryKey: usersKeys.list,
    queryFn: usersApi.list,
    //select:
  });
