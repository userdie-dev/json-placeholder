import { useForm } from "vee-validate";
import { PostFormSchema, type PostFormValues } from "../model/post.schema";
import { postApadter } from "../adapters/posts.adapter";
import type { Post } from "../model/post.types";
import { watch, type Ref } from "vue";

export const usePostForm = (post: Ref<Post | undefined>) => {
  const form = useForm<PostFormValues>({
    validationSchema: PostFormSchema,
    initialValues: postApadter.toFormValues(post.value),
  });

  watch(post, (newValue) =>
    form.resetForm({ values: postApadter.toFormValues(newValue) }),
  );

  return form;
};
