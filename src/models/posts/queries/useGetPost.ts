import { useQuery } from "@tanstack/vue-query";
import { postsApi } from "../api/posts.api";
import { computed, unref, type MaybeRef } from "vue";
import { postsKeys } from "./keys";

export const useGetPost = (id: MaybeRef<number | null>) =>
  useQuery({
    queryKey: computed(() => postsKeys.detail(unref(id)!)),
    queryFn: () => postsApi.get(unref(id)!),
    enabled: computed(() => !!unref(id)),
  });
