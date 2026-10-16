import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { maxBy, truncate } from "lodash-es";
import { toast } from "vue-sonner";
import { unref, type MaybeRef } from "vue";
import { commentApi } from "../api/commentsapi";
import type { CommentListDto } from "../api/comments.dto";
import type { CommentFormValues } from "../model/comment.schema";
import { commentsKeys } from "./keys";

export const useCreateComment = (postId: MaybeRef<number>) => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (values: CommentFormValues) =>
      commentApi.create({
        ...values,
        postId: unref(postId),
        name: truncate(values.body, { length: 30 }),
      }),
    onSuccess: (dto) => {
      // jsonplaceholder всегда возвращает один и тот же id, поэтому считаем его сами
      qc.setQueryData<CommentListDto>(commentsKeys.list, (list = []) => [
        ...list,
        { ...dto, id: (maxBy(list, "id")?.id ?? 0) + 1 },
      ]);
      toast.success("Комментарий добавлен");
    },
  });
};
