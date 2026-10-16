import { unref, type MaybeRef } from "vue";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import type { PostsListDto } from "../api/posts.dto";
import { postsApi } from "../api/posts.api";
import type { PostFormValues } from "../model/post.schema";
import { postApadter } from "../adapters/posts.adapter";
import { postsKeys } from "./keys";
import { toast } from "vue-sonner";
import { storeToRefs } from "pinia";
import { usePostsStore } from "../store/postsUiStore";

export const useSavePost = (id: MaybeRef<number | null>) => {
  const qc = useQueryClient();
  const { modal } = storeToRefs(usePostsStore());

  return useMutation({
    mutationFn: (values: PostFormValues) => {
      const payload = postApadter.toPayload(values);
      const postId = unref(id);

      return postId
        ? postsApi.update({ ...payload, id: postId })
        : postsApi.create(payload);
    },
    onSuccess: (dto) => {
      qc.setQueryData(postsKeys.detail(dto.id), dto);
      qc.setQueryData<PostsListDto>(postsKeys.list, (list = []) =>
        list.some((p) => p.id === dto.id)
          ? list.map((p) => (p.id === dto.id ? dto : p))
          : [dto, ...list],
      );

      toast.success("Пост успешно сохранён");
      modal.value = false;
    },
  });
};
