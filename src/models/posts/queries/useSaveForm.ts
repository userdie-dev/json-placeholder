import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { postsApi } from "../api/posts.api";
import type { PostFormValues } from "../model/post.schema";
import { postApadter } from "../adapters/posts.adapter";
import { postsKeys } from "./keys";
import { toast } from "vue-sonner";
import { storeToRefs } from "pinia";
import { usePostsStore } from "../store/postsUiStore";

export const useSavePost = (id: number | null) => {
  const qc = useQueryClient();
  const { modal } = storeToRefs(usePostsStore());

  return useMutation({
    mutationFn: (values: PostFormValues) => {
      const payload = postApadter.toPayload(values);

      return id ? postsApi.update(payload) : postsApi.create(payload);
    },
    onSuccess: (dto) => {
      qc.setQueryData(postsKeys.detail(dto.id), dto);
      qc.invalidateQueries({ queryKey: postsKeys.list });

      toast.success("Пост успешно сохранён");
      modal.value = false;
    },
  });
};
