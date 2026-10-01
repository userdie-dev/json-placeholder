import type { PostPayloadDto } from "../api/posts.dto";
import type { PostFormValues } from "../model/post.schema";
import type { Post } from "../model/post.types";

export const postApadter = {
  toPayload: (v: PostFormValues): PostPayloadDto => ({
    ...v,
    body: v.body.trim(),
    title: v.title.trim(),
  }),

  toFormValues: (post?: Post): PostFormValues => ({
    ...post,
    body: post?.body ?? "",
    title: post?.title ?? "",
  }),
};
