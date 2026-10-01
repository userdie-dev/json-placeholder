import { useQuery } from "@tanstack/vue-query";
import { postsApi } from "../api/posts.api";
import { postsKeys } from "./keys";

export const usePostsList = () =>
  useQuery({
    queryKey: postsKeys.list,
    queryFn: postsApi.list,
    //select:
  });
