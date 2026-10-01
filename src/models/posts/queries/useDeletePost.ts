import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { postsApi } from "../api/posts.api";
import { unref, type MaybeRef } from "vue";
import { postsKeys } from "./keys";
import { toast } from "vue-sonner";
import { storeToRefs } from "pinia";
import { usePostsStore } from "../store/postsUiStore";

export const useDeletePost = (id: MaybeRef<number | undefined>) => {
  const qc = useQueryClient();
  const { modal } = storeToRefs(usePostsStore());

  return useMutation({
    mutationFn: () => postsApi.delete(unref(id)!),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: postsKeys.list });
      toast.success("Пост успешно удалён");
      modal.value = false;
    },
  });
};
