import { useMutation, useQueryClient } from "@tanstack/vue-query";
import type { PostsListDto } from "../api/posts.dto";
import { postsApi } from "../api/posts.api";
import { unref, type MaybeRef } from "vue";
import { postsKeys } from "./keys";
import { toast } from "vue-sonner";
import { storeToRefs } from "pinia";
import { usePostsStore } from "../store/postsUiStore";

export const useDeletePost = (id: MaybeRef<number | null | undefined>) => {
  const qc = useQueryClient();
  const { modal } = storeToRefs(usePostsStore());

  return useMutation({
    mutationFn: () => postsApi.delete(unref(id)!),
    onSuccess: () => {
      const postId = unref(id)!;
      qc.removeQueries({ queryKey: postsKeys.detail(postId) });
      qc.setQueryData<PostsListDto>(postsKeys.list, (list = []) =>
        list.filter((p) => p.id !== postId),
      );
      toast.success("Пост успешно удалён");
      modal.value = false;
    },
  });
};
